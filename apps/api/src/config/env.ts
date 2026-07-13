import "dotenv/config";

const requireEnv = (name: string) => {
	const value = process.env[name];

	if (!value) {
		throw new Error(`Missing required environment variable: ${name}`);
	}

	return value;
};

export const env = {
	JWT_SECRET: requireEnv("JWT_SECRET"),
	JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN ?? "1h",
	DATABASE_URL: requireEnv("DATABASE_URL"),
	PORT: requireEnv("PORT"),
	FRONTEND_URL: requireEnv("FRONTEND_URL"),
	LOG_LEVEL: requireEnv("LOG_LEVEL"),
	NODE_ENV: requireEnv("NODE_ENV"),
	LOG_DIRECTORY: requireEnv("LOG_DIRECTORY"),
	LOG_MAX_SIZE: requireEnv("LOG_MAX_SIZE"),
	LOG_MAX_FILES: requireEnv("LOG_MAX_FILES"),
};
