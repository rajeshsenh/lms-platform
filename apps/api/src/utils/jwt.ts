import jwt from "jsonwebtoken";
import { env } from "../config/env";

export const generateToken = (id: string) => {
	const payload = { id };
	const { JWT_EXPIRES_IN, JWT_SECRET } = env;

	if (!JWT_SECRET) throw new Error("JWT_SECRET missing.");

	const token = jwt.sign(payload, JWT_SECRET, {
		expiresIn: JWT_EXPIRES_IN as jwt.SignOptions["expiresIn"],
	});

	return token;
};

export const verifyToken = (token: string) => {
	return jwt.verify(token, env.JWT_SECRET);
};
