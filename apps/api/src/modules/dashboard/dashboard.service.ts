import { dashboardRepository } from "./dashboard.repository";

export const dashboardService = {
	async student(userId: string) {
		const data = await dashboardRepository.studentDashboard(userId);

		return {
			myCourses: data.enrollments,
			completedCourses: data.completed,
			continueLearning: data.recent,
			recentLessons: data.recent,
		};
	},

	async instructor(userId: string) {
		const courses = await dashboardRepository.instructorDashboard(userId);

		return {
			courses: courses.length,
			students: courses.reduce((a, c) => a + c.enrollments.length, 0),
			revenue: courses.reduce(
				(a, c) => a + c.payments.reduce((x, p) => x + Number(p.amount), 0),
				0,
			),
			topCourses: courses.slice(0, 5),
		};
	},

	async admin() {
		const result = await dashboardRepository.adminDashboard();

		return {
			users: result.users,
			courses: result.courses,
			payments: result.payments,
			revenue: Number(result.payments._sum.amount ?? 0),
		};
	},
};
