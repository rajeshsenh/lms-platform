import type { Request, Response } from "express";
import { env } from "../../config/env";
import { authSevices } from "./auth.service";

const COOKIE_OPTIONS = {
	httpOnly: true,
	secure: env.NODE_ENV === "production",
	maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
	sameSite: "lax" as const,
};

export const authController = {
	async signup(req: Request, res: Response) {
		const data = await authSevices.signup(req.body);

		res.status(201)
			.cookie("token", data.token, {
				httpOnly: true,
				secure: true,
				sameSite: "strict",
			})
			.json({ status: true, data: { user: data.user } });
	},

	async login(req: Request, res: Response) {
		const { email, password } = req.body;
		const data = await authSevices.login({ email, password });
		res.cookie("token", data.token, COOKIE_OPTIONS)
			.status(200)
			.json({ status: true, data: { user: data.user } });
	},

	async logout(_: Request, res: Response) {
		res.clearCookie("token", { ...COOKIE_OPTIONS, maxAge: 0 });
		res.json({ status: "success", success: true });
	},
};
