import type { Request, Response } from "express";
import { categorySevices } from "./category.service";

export const categoryController = {
	async create(req: Request, res: Response) {
		const category = await categorySevices.createCategory(req.user.id, req.body);

		res.status(201).json({
			status: "success",
			data: category,
		});
	},

	async update(req: Request<{ id: string }>, res: Response) {
		const updateCategory = await categorySevices.updateCategory(req.params.id, req.body);
		res.json({
			status: "success",
			data: updateCategory,
		});
	},

	async getById(req: Request<{ id: string }>, res: Response) {
		const category = await categorySevices.getCategory(req.params.id);
		res.json({
			status: "success",
			data: category,
		});
	},

	async list(_: Request, res: Response) {
		const categories = await categorySevices.getAllCategory();
		res.json({
			status: "success",
			data: categories,
		});
	},

	async remove(req: Request<{ id: string }>, res: Response) {
		await categorySevices.deleteCategory(req.params.id);
		res.json({ success: true });
	},
};
