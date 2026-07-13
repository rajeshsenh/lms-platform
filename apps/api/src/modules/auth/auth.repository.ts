import { prisma } from "../../config/db";

export const authRepository = {
	async findByEmail(email: string) {
		return await prisma.user.findUnique({ where: { email } });
	},

	async findById(id: string) {
		return await prisma.user.findUnique({ where: { id } });
	},

	async create(data: any) {
		return await prisma.user.create({
			data,
		});
	},

	async existsByEmail(email: string) {
		const user = await prisma.user.findUnique({
			where: { email },
			select: {
				id: true,
			},
		});
		return Boolean(user);
	},
};
