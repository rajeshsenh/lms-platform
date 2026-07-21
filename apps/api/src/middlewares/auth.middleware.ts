import type { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { env } from "../config/env";
import type { UserRole } from "../generated/prisma";

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
	const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];

	if (!token) {
		res.status(401).json({ error: "Access denied. No token provided." });
		return;
	}

	try {
		const secret = env.JWT_SECRET;
		const decoded = jwt.verify(token, secret) as {
			id: string;
			email: string;
			role: UserRole;
		};
		req.user = decoded;
		next();
	} catch (_) {
		res.status(401).json({ error: "Invalid or expired token." });
	}
};

export const authorizeRole = (...roles: UserRole[]) => {
	return (req: Request, res: Response, next: NextFunction) => {
		if (!req.user) {
			res.status(401).json({ error: "Unauthorized." });
			return;
		}
		if (!roles.includes(req.user.role)) {
			res.status(403).json({ error: "Forbidden. Insufficient permissions." });
			return;
		}

		next();
	};
};
