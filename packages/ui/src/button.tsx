"use client";

import type { ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
	className?: string;
	appName: string;
	type: string;
}

export const Button = ({ children, type, className, appName }: ButtonProps) => {
	return (
		<button
			className={className}
			type={type}
			onClick={() => alert(`Hello from your ${appName} app!`)}
		>
			{children}
		</button>
	);
};
