"use client";

import Image from "next/image";
import { useState } from "react";
import { Lightbox } from "@/components/Lightbox";

type Photo = {
	src: string;
	alt: string;
};

const photos: Photo[] = [
	{ src: "/photography/photo1.jpg", alt: "Lake Chuzenji" },
	{ src: "/photography/photo2.jpg", alt: "Ducks" },
];

export default function PhotographyPage() {
	const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
	const [isLightboxOpen, setIsLightboxOpen] = useState(false);

	const handlePhotoClick = (photo: Photo) => {
		setSelectedPhoto(photo);
		setIsLightboxOpen(true);
	};

	const handleClose = () => {
		setIsLightboxOpen(false);
		setSelectedPhoto(null);
	};

	return (
		<div className="flex flex-col items-center space-y-8 py-8">
			<header className="space-y-4 text-center">
				<h1 className="text-4xl font-bold">Photography</h1>
				<p className="text-lg text-gray-600 dark:text-gray-400">My passion for capturing moments through the lens</p>
			</header>

			<div className="grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{photos.map((photo) => (
					<button
						aria-label={`View ${photo.alt}`}
						className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
						key={photo.src}
						onClick={() => handlePhotoClick(photo)}
						type="button"
					>
						<Image
							alt={photo.alt}
							className="object-cover transition-transform duration-300 group-hover:scale-105"
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							src={photo.src}
						/>
					</button>
				))}
			</div>

			<Lightbox isOpen={isLightboxOpen} onClose={handleClose} photo={selectedPhoto} />

			<footer className="mt-12 text-center">
				<a
					className="text-blue-600 transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
					href="/"
				>
					← Back to Profile
				</a>
			</footer>
		</div>
	);
}
