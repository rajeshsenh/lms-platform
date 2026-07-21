import { prisma } from "../../config/db";
import type { Prisma } from "../../generated/prisma";

export const userRepository = {
	async findById(id: string) {
		return await prisma.user.findUnique({ where: { id } });
	},

	async update(id: string, data: Prisma.UserUncheckedUpdateInput) {
		return await prisma.user.update({
			where: { id },
			data,
		});
	},

	async list() {
		return await prisma.user.findMany({
			orderBy: {
				createdAt: "desc",
			},
		});
	},

	async remove(id: string) {
		return await this.update(id, {
			status: "DELETED",
		});
	},
};
