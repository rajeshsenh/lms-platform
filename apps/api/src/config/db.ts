import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";
import { env } from "./env";
import logger from "./logger";

const connectionString = env.DATABASE_URL;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({
	adapter,
});

const checkDataBaseConnection = async () => {
	try {
		await prisma.$connect();
		await prisma.$queryRaw`SELECT 1`;

		console.log("✅ PostgreSQL connection established successfully.");
		logger.info("✅ PostgreSQL connection established successfully.");
	} catch (error: unknown) {
		if (error instanceof Error) {
			logger.error(error.message);
			logger.error("❌ PostgreSQL connection failed!");
		} else {
			logger.error("An unexpected error occurred", error);
		}
		process.exit(1);
	} finally {
		await prisma.$disconnect();
	}
};

export { checkDataBaseConnection, prisma };
