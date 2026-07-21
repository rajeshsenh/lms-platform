import slugify from "slugify";

import { prisma } from "../../src/config/db";
import logger from "../../src/config/logger";
import { categories } from "../data/category";

type Category = {
	name: string;
	description?: string;
	children?: Category[];
};

const createdBy = "4f70e92a-d73b-47f3-a245-2df8c199e644";

const createCategory = async (category: Category, parentId: string | null = null) => {
	const slug = slugify(category.name, { lower: true });

	const saved = await prisma.category.upsert({
		where: {
			slug,
		},
		update: {
			description: category.description,
			parentId,
		},
		create: {
			name: category.name,
			slug,
			createdBy: createdBy,
			description: category.description,
			parentId,
		},
	});

	if (category.children?.length) {
		for (let i = 0; i < category.children.length; i++) {
			await createCategory(category.children[i], saved.id);
		}
	}
};

export const seedCategories = async () => {
	logger.info("🌱 Seeding Categories...");

	for (let i = 0; i < categories.length; i++) {
		await createCategory(categories[i], null);
	}

	logger.info("✅ Categories Seeded");
};
