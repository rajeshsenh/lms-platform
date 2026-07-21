import cookieParser from "cookie-parser";
import cors from "cors";
import express, { type NextFunction, type Request, type Response } from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";

import { env } from "./config/env";
import logger from "./config/logger";
import authRouter from "./modules/auth/auth.routes";
import categoryRouter from "./modules/category/category.routes";
import courseRouter from "./modules/courses/course.routes";
import userRouter from "./modules/user/user.routes";

const app = express();

const API_PREFIX = "/api/v1";

// 1. Security Headers
app.use(
	helmet({
		crossOriginResourcePolicy: {
			policy: "cross-origin",
		},
	}),
);

// 2. CORS configuration
app.use(
	cors({
		origin: env.FRONTEND_URL,
		credentials: true,
		methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
		allowedHeaders: ["Content-Type", "Authorization"],
	}),
);

// TODO:3. payment hooks

// 4. Standard body parses
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// 5. Global Rate Limiting
const apiLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 200, // limit each IP to 200 requests per window
	standardHeaders: true,
	legacyHeaders: false,
	message: { error: "Too many requests from this IP, please try again in 15 minutes." },
});
app.use("/api", apiLimiter);

// 6. API Routes
app.use(`${API_PREFIX}/auth`, authRouter);
app.use(`${API_PREFIX}/user`, userRouter);
app.use(`${API_PREFIX}/category`, categoryRouter);
app.use(`${API_PREFIX}/course`, courseRouter);

// 7. Health check endpoint
app.get("/health", (_, res) => {
	res.status(200).json({ status: "ok", timeStamp: new Date().toISOString() });
});

// 8. Global Error Handler
app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
	logger.error("Global Error Handler caught an uncaught exception:", err);
	res.status(500).json({
		status: "error",
		message: err instanceof Error ? err.message : "Internal Server Error",
	});
});

export default app;
