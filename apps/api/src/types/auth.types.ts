export interface IRegisterData {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	role?: string;
}

export interface ILoginData {
	email: string;
	password: string;
}
