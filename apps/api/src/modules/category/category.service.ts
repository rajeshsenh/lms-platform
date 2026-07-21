import slugify from "slugify";
import type { Category } from "../../generated/prisma";
import { categoryRepository } from "./category.repository";

export const categorySevices = {
	async createCategory(userId: string, data: Category) {
		const slug = slugify(data.name, { lower: true });

		return await categoryRepository.create({ ...data, slug, createdBy: userId });
	},

	async updateCategory(id: string, data: Category) {
		const updateCategory = await categoryRepository.update(id, {
			...data,
		});

		return updateCategory;
	},

	async getCategory(id: string) {
		return await categoryRepository.findById(id);
	},

	async getAllCategory() {
		return await categoryRepository.list();
	},

	async deleteCategory(id: string) {
		return await categoryRepository.remove(id);
	},
};
