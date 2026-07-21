import bcrypt from "bcryptjs";

import { prisma } from "../../src/config/db";
import logger from "../../src/config/logger";
import { users } from "../data/users";

const createUsers = async () => {
	const plainTextPassword = "password123";
	const salt = await bcrypt.genSalt(10);
	const passwordHash = await bcrypt.hash(plainTextPassword, salt);

	for (const u of users) {
		const user = await prisma.user.upsert({
			where: { email: u.email },
			update: {},
			create: {
				email: u.email,
				firstName: u.firstName,
				lastName: u.lastName,
				password: passwordHash,
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
