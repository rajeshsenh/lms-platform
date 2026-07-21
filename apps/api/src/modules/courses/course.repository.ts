import { prisma } from "../../config/db";
import { type Course, CourseStatus, type Prisma } from "../../generated/prisma";

export const courseRepository = {
	async findById(id: string) {
		return await prisma.course.findUnique({ where: { id } });
	},

	async create(data: Course) {
		return await prisma.course.create({ data });
	},

	async update(id: string, data: Prisma.CourseUncheckedUpdateInput) {
		return await prisma.course.update({
			where: { id },
			data,
		});
	},

	async list() {
		return await prisma.course.findMany({
			orderBy: {
				createdAt: "desc",
			},
		});
	},

	async remove(id: string) {
		return this.update(id, { status: CourseStatus.DELETED });
	},
};
