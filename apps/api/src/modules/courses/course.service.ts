import slugify from "slugify";
import type { Course } from "../../generated/prisma";
import { courseRepository } from "./course.repository";

export const courseService = {
	async createCourse(userId: string, data: Course) {
		const slug = slugify(data.title, { lower: true });

		return await courseRepository.create({ ...data, slug, instructorId: userId });
	},

	async updateCourse(id: string, data: Course) {
		const updateCourse = await courseRepository.update(id, {
			...data,
		});

		return updateCourse;
	},

	async getCourse(id: string) {
		return await courseRepository.findById(id);
	},

	async getAllCourse() {
		return await courseRepository.list();
	},

	async deleteCourse(id: string) {
		return await courseRepository.remove(id);
	},
};
