import type { Request, Response } from "express";
import { dashboardService } from "./dashboard.service";

export const dashboardController = {
	async student(req: Request, res: Response) {
		res.json({
			status: "success",
			data: await dashboardService.student(req.user.id),
		});
	},

	async instructor(req: Request, res: Response) {
		res.json({
			status: "success",
			data: await dashboardService.instructor(req.user.id),
		});
	},

	async admin(_req: Request, res: Response) {
		res.json({
			status: "success",
			data: await dashboardService.admin(),
		});
	},
};
