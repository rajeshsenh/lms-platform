import type { Request, Response } from "express";
import { sectionService } from "./section.service";

export const sectionController = {
	async create(req: Request, res: Response) {
		const section = await sectionService.createSection(req.body);

		res.status(201).json({
			status: "success",
			data: section,
		});
	},

	async update(req: Request<{ id: string }>, res: Response) {
		const updateSection = await sectionService.updateSection(req.params.id, req.body);
		res.json({
			status: "success",
			data: updateSection,
		});
	},

	async getById(req: Request<{ id: string }>, res: Response) {
		const section = await sectionService.getSection(req.params.id);
		res.json({
			status: "success",
			data: section,
		});
	},

	async list(req: Request<{ courseId: string }>, res: Response) {
		const sections = await sectionService.getAllSectionsByCourse(req.params.courseId);
		res.json({
			status: "success",
			data: sections,
		});
	},

	async remove(req: Request<{ id: string }>, res: Response) {
		await sectionService.deleteSection(req.params.id);
		res.json({ success: true });
	},
};
