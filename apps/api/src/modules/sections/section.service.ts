import type { Section } from "../../generated/prisma";
import { sectionRepository } from "./section.repository";

export const sectionService = {
	async createSection(data: Section) {
		const orderAvailable = await sectionRepository.isOrderAvailable(data.courseId, data.order);
		if (orderAvailable) throw new Error("Section order already exists.");
		return await sectionRepository.create(data);
	},

	async updateSection(id: string, data: Section) {
		if (data.order === undefined) {
			throw new Error("order is not found..");
		}

		const section = await sectionRepository.findById(id);

		if (!section) {
			throw new Error("A section with this order not exists...");
		}
		const updateSection = await sectionRepository.update(id, {
			...data,
		});

		return updateSection;
	},

	async getSection(id: string) {
		return await sectionRepository.findById(id);
	},

	async getAllSectionsByCourse(courseId: string) {
		return await sectionRepository.findByCourse(courseId);
	},

	async deleteSection(id: string) {
		return await sectionRepository.remove(id);
	},
};
