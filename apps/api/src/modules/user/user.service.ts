import bcrypt from "bcryptjs";
import type { Prisma, User, UserRole } from "../../generated/prisma";
import type { IAuthUser, IChangePassword } from "../../types/auth.types";
import { userRepository } from "./user.repository";

const toUserResponse = (user: User) => {
	return {
		id: user.id,
		firstName: user.firstName,
		lastName: user.lastName,
		email: user.email,
		role: user.role,
		avatarUrl: user.avatarUrl,
	};
};

const toAdminResponse = (user: User) => {
	return {
		id: user.id,
		firstName: user.firstName,
		lastName: user.lastName,
		email: user.email,
		role: user.role,
		avatarUrl: user.avatarUrl,
		status: user.status,
	};
};
export const userServices = {
	async profile(id: string) {
		const user = await userRepository.findById(id);

		if (!user) throw new Error("User not found...");

		return { user: toUserResponse(user) };
	},

	async updateProfile(id: string, data: Prisma.UserUncheckedUpdateInput) {
		const user = await userRepository.update(id, {
			...data,
		});

		return { user: toUserResponse(user) };
	},

	async changePassword(user: IAuthUser, body: IChangePassword) {
		const currentUser = await userRepository.findById(user.id);

		if (!currentUser) {
			throw new Error("User not found...");
		}
		const isPasswordValid = await bcrypt.compare(body.currentPassword, currentUser.password);

		if (!isPasswordValid) {
			throw new Error("Invalid password");
		}

		const isSamePassword = await bcrypt.compare(body.newPassword, currentUser.password);

		if (isSamePassword) {
			throw new Error("New password must be different from the current password.");
		}

		const hashedPassword = await bcrypt.hash(body.newPassword, 12);

		return userRepository.update(user.id, { password: hashedPassword });
	},

	async updateRole(id: string, role: UserRole) {
		return await userRepository.update(id, { role });
	},

	async users() {
		const users = await userRepository.list();
		const formatedUsers = users.map((user) => toAdminResponse(user));
		return formatedUsers;
	},

	async deactivate(id: string) {
		return await userRepository.remove(id);
	},
};
