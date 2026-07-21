import type { Request, Response } from "express";
import { courseService } from "./course.service";

export const categoryController = {
	async create(req: Request, res: Response) {
		const course = await courseService.createCourse(req.user.id, req.body);

		res.status(201).json({
			status: "success",
			data: course,
		});
	},

	async update(req: Request<{ id: string }>, res: Response) {
		const updateCourse = await courseService.updateCourse(req.params.id, req.body);
		res.json({
			status: "success",
			data: updateCourse,
		});
	},

	async getById(req: Request<{ id: string }>, res: Response) {
		const course = await courseService.getCourse(req.params.id);
		res.json({
			status: "success",
			data: course,
		});
	},

	async list(_: Request, res: Response) {
		const courses = await courseService.getAllCourse();
		res.json({
			status: "success",
			data: courses,
		});
	},

	async remove(req: Request<{ id: string }>, res: Response) {
		await courseService.deleteCourse(req.params.id);
		res.json({ success: true });
	},
};
