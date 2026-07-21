import { prisma } from "../../config/db";
import type { Category, Prisma } from "../../generated/prisma";

export const categoryRepository = {
	async findById(id: string) {
		return await prisma.category.findUnique({ where: { id } });
	},

	async create(data: Category) {
		return await prisma.category.create({ data });
	},

	async update(id: string, data: Prisma.CategoryUncheckedCreateInput) {
		return await prisma.category.update({
			where: { id },
			data,
		});
	},

	async list() {
		return await prisma.category.findMany({
			orderBy: {
				createdAt: "desc",
			},
		});
	},

	async remove(id: string) {
		return prisma.category.delete({ where: { id } });
	},
};
