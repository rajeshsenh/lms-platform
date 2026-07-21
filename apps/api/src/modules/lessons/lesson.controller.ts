import type { Request, Response } from "express";
import { lessonService } from "./lesson.service";

export const lessonController = {
	async create(req: Request, res: Response) {
		const lesson = await lessonService.createLesson(req.body);

		res.status(201).json({
			status: "success",
			data: lesson,
		});
	},

	async update(req: Request<{ id: string }>, res: Response) {
		const updateLesson = await lessonService.updateLesson(req.params.id, req.body);
		res.json({
			status: "success",
			data: updateLesson,
		});
	},

	async getById(req: Request<{ id: string }>, res: Response) {
		const lesson = await lessonService.getLesson(req.params.id);
		res.json({
			status: "success",
			data: lesson,
		});
	},

	async list(req: Request<{ sectionId: string }>, res: Response) {
		const lessons = await lessonService.getAllLessonsBySection(req.params.sectionId);
		res.json({
			status: "success",
			data: lessons,
		});
	},

	async remove(req: Request<{ id: string }>, res: Response) {
		await lessonService.deleteLesson(req.params.id);
		res.json({ success: true });
	},

	async progress(req: Request, res: Response) {
		const result = await lessonService.saveProgress(req.user.id, req.body);
		res.json(result);
	},

	async getProgress(req: Request, res: Response) {
		res.json(await lessonService.getProgress(req.user.id));
	},
};
