import { prisma } from "../../config/db";
import type { Lesson, Prisma } from "../../generated/prisma";

export const lessonRepository = {
	async findById(id: string) {
		return await prisma.lesson.findUnique({ where: { id } });
	},

	async create(data: Lesson) {
		return await prisma.lesson.create({ data });
	},

	async update(id: string, data: Prisma.LessonUncheckedUpdateInput) {
		return await prisma.lesson.update({
			where: { id },
			data,
		});
	},

	async findBySection(sectionId: string) {
		return await prisma.lesson.findMany({
			where: { sectionId },
			orderBy: {
				order: "asc",
			},
		});
	},

	async remove(id: string) {
		return await prisma.lesson.delete({ where: { id } });
	},

	async isOrderAvailable(sectionId: string, order: number) {
		return await prisma.lesson.findFirst({ where: { sectionId, order } });
	},

	async updateProgress(userId: string, lessonId: string, data: any) {
		return await prisma.lessonProgress.upsert({
			where: {
				userId_lessonId: {
					userId,
					lessonId,
				},
			},
			update: data,
			create: {
				...data,
				userId,
				lessonId,
			},
		});
	},

	async getProgress(userId: string) {
		return await prisma.lessonProgress.findMany({
			where: { userId },
			include: {
				lesson: true,
			},
			// orderBy: {
			//     updatedAt:
			//         "desc"
			// }
		});
	},
};
