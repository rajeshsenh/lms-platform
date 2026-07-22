import { prisma } from "../../config/db";

export const dashboardRepository = {
	async studentDashboard(userId: string) {
		const [enrollments, completed, recent] = await Promise.all([
			prisma.enrollment.count({
				where: { userId },
			}),
			prisma.enrollment.count({
				where: {
					userId,
					status: "COMPLETED",
				},
			}),
			prisma.lessonProgress.findMany({
				where: { userId },
				take: 5,
				// orderBy: {
				//     updatedAt: "desc"
				// },
				include: {
					lesson: true,
				},
			}),
		]);

		return {
			enrollments,
			completed,
			recent,
		};
	},

	async instructorDashboard(userId: string) {
		const courses = await prisma.course.findMany({
			where: { instructorId: userId },
			include: {
				enrollments: true,
				payments: true,
			},
		});
		return courses;
	},

	async adminDashboard() {
		const [users, courses, payments] = await Promise.all([
			prisma.user.count(),
			prisma.course.count(),
			prisma.payment.aggregate({
				_sum: {
					amount: true,
				},
			}),
		]);

		return {
			users,
			courses,
			payments,
		};
	},
};
