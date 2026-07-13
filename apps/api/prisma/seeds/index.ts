import { performance } from "node:perf_hooks";
import { prisma } from "../../src/config/db";
import { env } from "../../src/config/env";
import logger from "../../src/config/logger";
// import { seedCategories } from "./category.seed";
import { seedUsers } from "./users.seed";

const cleanDatabase = async () => {
	await prisma.$transaction([
		prisma.lessonProgress.deleteMany(),
		prisma.wishlist.deleteMany(),
		prisma.courseReview.deleteMany(),
		prisma.enrollment.deleteMany(),
		prisma.payment.deleteMany(),
		prisma.lesson.deleteMany(),
		prisma.section.deleteMany(),
		prisma.course.deleteMany(),
		prisma.category.deleteMany(),
		prisma.user.deleteMany(),
	]);
};

const shouldResetDatabase = env.RESET_DATABASE === "true";

async function seed() {
	const start = performance.now();

	logger.info("🌱 Starting database seed...");

	if (shouldResetDatabase) {
		logger.info("Cleaning database...");
		await cleanDatabase();
		logger.info("Database cleaned.");
	}

	await seedUsers();
	// await seedCategories();

	const duration = ((performance.now() - start) / 1000).toFixed(2);

	logger.info(`🎉 Seed completed in ${duration}s`);
}

async function bootstrap() {
	try {
		await seed();
		process.exitCode = 0;
	} catch (error) {
		logger.error("Database seeding failed.", error);
		process.exitCode = 1;
	} finally {
		await prisma.$disconnect();
	}
}

void bootstrap();
