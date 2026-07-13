import { AsyncLocalStorage } from "node:async_hooks";
import crypto from "node:crypto";
import os from "node:os";
import { createLogger, format, transports } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import packageJson from "../../package.json";
import { env } from "./env";

const { combine, timestamp, errors, json, colorize, printf } = format;

const loggerConfig = {
	level: env.LOG_LEVEL ?? "info",
	logDirectory: env.LOG_DIRECTORY ?? "logs",
	maxSize: env.LOG_MAX_SIZE ?? "20m",
	maxFiles: env.LOG_MAX_FILES ?? "30d",
	isDevelopment: env.NODE_ENV !== "production",
	version: packageJson.version,
	serviceName: "LMS_platform",
	environment: env.NODE_ENV,
};

const _createLevelFilter = (level: string) =>
	format((info) => (info.level === level ? info : false))();

const REDACTED_TEXT = "********";

const SENSITIVE_FIELDS = [
	"password",
	"confirmPassword",
	"oldPassword",
	"newPassword",
	"accessToken",
	"refreshToken",
	"token",
	"authorization",
	"cookie",
	"secret",
	"clientSecret",
	"apiKey",
	"x-api-key",
	"creditCard",
	"cvv",
];

const sensitiveFields = new Set(SENSITIVE_FIELDS.map((field) => field.toLowerCase()));

const isObject = (value: unknown): value is Record<string, unknown> => {
	return typeof value === "object" && value !== null && !Array.isArray(value);
};

const redactSensitiveData = (value: unknown): unknown => {
	if (Array.isArray(value)) {
		return value.map(redactSensitiveData);
	}

	if (!isObject(value)) {
		return value;
	}

	const clone: Record<string, unknown> = {};

	for (const [key, val] of Object.entries(value)) {
		if (sensitiveFields.has(key.toLowerCase())) {
			clone[key] = REDACTED_TEXT;
			continue;
		}

		clone[key] = redactSensitiveData(val);
	}

	return clone;
};

interface RequestContext {
	requestId: string;
	correlationId?: string;
	userId?: string;
}

const asyncLocalStorage = new AsyncLocalStorage<RequestContext>();

const requestContext = {
	run(context: RequestContext, callback: () => void) {
		asyncLocalStorage.run(context, callback);
	},

	getStore() {
		return asyncLocalStorage.getStore();
	},

	getRequestId() {
		return asyncLocalStorage.getStore()?.requestId;
	},

	getCorrelationId() {
		return asyncLocalStorage.getStore()?.correlationId;
	},

	getUserId() {
		return asyncLocalStorage.getStore()?.userId;
	},

	create() {
		return {
			requestId: crypto.randomUUID(),
		};
	},
};

interface RequestContext {
	requestId: string;
	correlationId?: string;
	userId?: string;
}

const redactFormat = format((info) => {
	return redactSensitiveData(info) as never;
});

const enrichMetadata = format((info) => {
	info.requestId = requestContext.getRequestId();

	info.correlationId = requestContext.getCorrelationId();

	info.userId = requestContext.getUserId();

	info.service = loggerConfig.serviceName;

	info.environment = loggerConfig.environment;

	info.hostname = os.hostname();

	info.version = loggerConfig.version;

	return info;
});

const productionFormat = combine(
	errors({
		stack: true,
	}),
	timestamp(),
	redactFormat(),
	enrichMetadata(),
	json(),
);

const developmentFormat = combine(
	colorize(),
	timestamp({
		format: "HH:mm:ss",
	}),
	errors({
		stack: true,
	}),
	printf((info) => {
		const requestId = info.requestId ? ` [${info.requestId}]` : "";

		const stack = info.stack ? `\n${info.stack}` : "";

		return `${info.timestamp} ${info.level}${requestId}: ${info.message}${stack}`;
	}),
);

const createDailyRotateTransport = (level: string) =>
	new DailyRotateFile({
		level,
		filename: `${loggerConfig.logDirectory}/${level}-%DATE%.log`,
		datePattern: "YYYY-MM-DD",
		zippedArchive: true,
		maxSize: loggerConfig.maxSize,
		maxFiles: loggerConfig.maxFiles,
		// format: combine(createLevelFilter(level), timestamp(), errors({ stack: true }), json()),
		format: productionFormat,
	});

const consoleTransport = new transports.Console({
	level: loggerConfig.level,
	format: loggerConfig.isDevelopment ? developmentFormat : productionFormat,
});

const logger = createLogger({
	level: loggerConfig.level,
	defaultMeta: {
		service: "lms-platform",
	},
	format: combine(timestamp(), errors({ stack: true }), json()),
	transports: [
		consoleTransport,
		createDailyRotateTransport("info"),
		createDailyRotateTransport("error"),
		createDailyRotateTransport("http"),
	],
	exceptionHandlers: [
		new DailyRotateFile({
			filename: `${loggerConfig.logDirectory}/exceptions-%DATE%.log`,
			datePattern: "YYYY-MM-DD",
			maxFiles: loggerConfig.maxFiles,
			maxSize: loggerConfig.maxSize,
			zippedArchive: true,
			format: productionFormat,
		}),
	],

	rejectionHandlers: [
		new DailyRotateFile({
			filename: `${loggerConfig.logDirectory}/rejections-%DATE%.log`,
			datePattern: "YYYY-MM-DD",
			maxFiles: loggerConfig.maxFiles,
			maxSize: loggerConfig.maxSize,
			zippedArchive: true,
			format: productionFormat,
		}),
	],

	exitOnError: false,
});

export default logger;
