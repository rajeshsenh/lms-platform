import { UserRole } from "../../src/generated/prisma";

interface SeedUser {
	email: string;
	firstName: string;
	lastName: string;
	role: UserRole;
}

export const users: SeedUser[] = [
	{
		email: "admin@eduforge.com",
		firstName: "System",
		lastName: "Admin",
		role: UserRole.ADMIN,
	},
	{
		email: "jane.instructor@eduforge.com",
		firstName: "Jane",
		lastName: "Instructor",
		role: UserRole.INSTRUCTOR,
	},
	{
		email: "john.student@eduforge.com",
		firstName: "John",
		lastName: "Student",
		role: UserRole.STUDENT,
	},
	{
		email: "alex.student@eduforge.com",
		firstName: "Alex",
		lastName: "Johnson",
		role: UserRole.STUDENT,
	},
];
