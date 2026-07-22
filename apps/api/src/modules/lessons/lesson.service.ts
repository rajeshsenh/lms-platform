import type { Lesson } from "../../generated/prisma";
import { lessonRepository } from "./lesson.repository";

export const lessonService = {
	async createLesson(data: Lesson) {
		const orderAvailable = await lessonRepository.isOrderAvailable(data.sectionId, data.order);
		if (orderAvailable) throw new Error("Lesson order already exists.");
		return await lessonRepository.create(data);
	},

	async updateLesson(id: string, data: Lesson) {
		if (data.order === undefined) {
			throw new Error("order is not found..");
		}

		const lesson = await lessonRepository.findById(id);

		if (!lesson) {
			throw new Error("A Lessson with this order not exists...");
		}
		const updateLesson = await lessonRepository.update(id, {
			...data,
		});

		return updateLesson;
	},

	async getLesson(id: string) {
		return await lessonRepository.findById(id);
	},

	async getAllLessonsBySection(sectionId: string) {
		return await lessonRepository.findBySection(sectionId);
	},

	async deleteLesson(id: string) {
		return await lessonRepository.remove(id);
	},

	async saveProgress(userId: string, data: any) {
		return await lessonRepository.updateProgress(userId, data.lessonId, data);
	},

	async getProgress(userId: string) {
		return await lessonRepository.getProgress(userId);
	},
};
