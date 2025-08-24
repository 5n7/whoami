import type React from "react";
import type { ReactNode } from "react";

interface SectionContainerProps {
	title: string;
	children: ReactNode;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({ title, children }) => {
	return (
		<section className="w-full max-w-3xl">
			<div className="mb-4 flex items-center">
				<h2 className="text-xl font-semibold text-gray-900">{title}</h2>
			</div>
			<div className="mb-10">{children}</div>
		</section>
	);
};
