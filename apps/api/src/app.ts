import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";

import { env } from "./config/env";
import logger from "./config/logger";

const app = express();

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

// 7. Health check endpoint
app.get("/health", (_, res) => {
	res.status(200).json({ status: "ok", timeStamp: new Date().toISOString() });
});

// 8. Global Error Handler
app.use((err: any, _req: express.Request, res: express.Response) => {
	logger.error("Global Error Handler caught an uncaught exception:", err);
	res.status(err.status || 500).json({
		error: err.message || "Internal Server Error",
	});
});

export default app;
