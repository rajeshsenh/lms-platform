export interface IUser {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	role: string;
	avatarUrl: string | null;
	emailVerified: string;
	createdAt: Date;
	updatedAt: Date;
	status: string;
}
