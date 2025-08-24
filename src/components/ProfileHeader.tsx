import Image from "next/image";
import type React from "react";

interface ProfileHeaderProps {
	name: string;
	title: string;
	imageUrl: string;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name, title, imageUrl }) => {
	return (
		<section className="flex flex-col items-center space-y-6 text-center">
			<div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-gray-200 shadow-lg">
				<Image alt={name} className="rounded-full object-cover" fill priority sizes="160px" src={imageUrl} />
			</div>
			<div className="space-y-2">
				<h1 className="text-4xl font-bold">{name}</h1>
				<p className="text-xl text-gray-600 dark:text-gray-400">{title}</p>
			</div>
		</section>
	);
};
