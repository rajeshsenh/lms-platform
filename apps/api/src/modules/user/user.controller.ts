import type { Request, Response } from "express";
import { userServices } from "./user.service";

export const userController = {
	async me(req: Request, res: Response) {
		const profile = await userServices.profile(req.user.id);

		res.status(201).json({ status: "success", data: profile });
	},

	async update(req: Request, res: Response) {
		res.json({
			status: "success",
			data: await userServices.updateProfile(req.user.id, req.body),
		});
	},

	async password(req: Request, res: Response) {
		await userServices.changePassword(req.user, req.body);

		res.json({ success: true });
	},

	async role(req: Request<{ id: string }>, res: Response) {
		res.json(await userServices.updateRole(req.params.id, req.body.role));
	},

	async list(_: Request, res: Response) {
		res.json({ data: await userServices.users() });
	},

	async remove(req: Request<{ id: string }>, res: Response) {
		await userServices.deactivate(req.params.id);
		res.status(204).json({ success: true }).send();
	},
};
