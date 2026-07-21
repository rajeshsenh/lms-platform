import bcrypt from "bcryptjs";

import { prisma } from "../../src/config/db";
import logger from "../../src/config/logger";
import { users } from "../data/users";

const createUsers = async () => {
	const plainTextPassword = "password123";
	const passwordHash = await bcrypt.hash(plainTextPassword, 10);

	for (const user of users) {
		await prisma.user.upsert({
			where: { email: user.email },
			update: {
				firstName: user.firstName,
				lastName: user.lastName,
				role: user.role,
			},
			create: {
				email: user.email,
				firstName: user.firstName,
				lastName: user.lastName,
				password: passwordHash,
				role: user.role,
			},
		});
		logger.info(
			`✅ Created/Verified user: ${user.firstName} - (${user.email}) - (${user.role})`,
		);
	}
};

export const seedUsers = async () => {
	logger.info("🌱 Seeding Users...");

	await createUsers();

	logger.info("✅ Users Seeded");
};
