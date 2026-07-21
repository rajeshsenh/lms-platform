import type { Lesson, Section } from "../../generated/prisma";
import { lessonRepository } from "./lesson.repository";

export const lessonService = {
	async createLesson(data: Lesson) {
		return await lessonRepository.create(data);
	},

	async updateLesson(id: string, data: Section) {
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
