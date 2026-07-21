import bcrypt from "bcryptjs";
import { UserStatus } from "../../generated/prisma";
import type { ILoginData, IRegisterData } from "../../types/auth.types";
import type { IUser } from "../../types/user.types";
import { generateToken } from "../../utils/jwt";
import { authRepository } from "./auth.repository";

const toAuthResponse = (user: IUser) => {
	return {
		id: user.id,
		firstName: user.firstName,
		lastName: user.lastName,
		email: user.email,
		role: user.role,
		avatarUrl: user.avatarUrl,
	};
};
export const authSevices = {
	async signup(data: IRegisterData) {
		const exists = await authRepository.existsByEmail(data.email);

		if (exists) throw new Error("Email is already registered.");

		const password = await bcrypt.hash(data.password, 12);
		const user = await authRepository.create({ ...data, password });
		const token = generateToken(user.id, user.role);

		return { user: toAuthResponse(user), token };
	},

	async login(data: ILoginData) {
		const { email, password } = data;
		const user = await authRepository.findByEmail(email);

		if (!user) throw new Error("Invalid Credentials.");

		if (user.status === UserStatus.DELETED) {
			throw new Error(
				"This account is no longer available. Please contact support if you believe this is an error.",
			);
		}

		if (user.status === UserStatus.BLOCKED) {
			throw new Error("Your account has been suspended. Please contact support.");
		}

		const isValid = await bcrypt.compare(password, user.password);

		if (!isValid) throw new Error("Invalid Credentials.");

		const token = generateToken(user.id, user.role);

		return { user: toAuthResponse(user), token };
	},
};
