import { prisma } from "../../config/db";
import type { Prisma, Section } from "../../generated/prisma";

export const sectionRepository = {
	async findById(id: string) {
		return await prisma.section.findUnique({ where: { id }, include: { lessons: true } });
	},

	async create(data: Section) {
		return await prisma.section.create({ data });
	},

	async update(id: string, data: Prisma.SectionUncheckedUpdateInput) {
		return await prisma.section.update({
			where: { id },
			data,
		});
	},

	async findByCourse(courseId: string) {
		return await prisma.section.findMany({
			where: { courseId },
			orderBy: {
				order: "desc",
			},
			include: { lessons: true },
		});
	},

	async remove(id: string) {
		return await prisma.section.delete({ where: { id } });
	},

	async isOrderAvailable(courseId: string, order: number) {
		return await prisma.section.findFirst({ where: { courseId, order } });
	},
};
