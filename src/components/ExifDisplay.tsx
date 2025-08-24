"use client";

import exifr from "exifr";
import type React from "react";
import { useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa";
import { MdDateRange, MdLens } from "react-icons/md";

interface ExifData {
	Make?: string;
	Model?: string;
	LensModel?: string;
	FocalLength?: number;
	FocalLengthIn35mmFormat?: number;
	FNumber?: number;
	ExposureTime?: number;
	ISO?: number;
	DateTimeOriginal?: Date;
}

interface ExifDisplayProps {
	imageSrc: string;
	isOpen: boolean;
}

export const ExifDisplay: React.FC<ExifDisplayProps> = ({ imageSrc, isOpen }) => {
	const [exifData, setExifData] = useState<ExifData | null>(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (isOpen && imageSrc) {
			setLoading(true);
			exifr
				.parse(imageSrc, {
					pick: [
						"Make",
						"Model",
						"LensModel",
						"FocalLength",
						"FocalLengthIn35mmFormat",
						"FNumber",
						"ExposureTime",
						"ISO",
						"DateTimeOriginal",
					],
				})
				.then((data) => {
					setExifData(data || null);
					setLoading(false);
				})
				.catch(() => {
					setExifData(null);
					setLoading(false);
				});
		}
	}, [imageSrc, isOpen]);

	if (!isOpen || loading || !exifData) return null;

	const formatExposureTime = (time: number) => {
		if (time >= 1) {
			return `${time}s`;
		}
		const denominator = Math.round(1 / time);
		return `1/${denominator}s`;
	};

	const formatDate = (date: Date) => {
		return new Intl.DateTimeFormat("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		}).format(date);
	};

	return (
		<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-4 sm:p-6 md:p-8 text-white">
			<div className="mx-auto max-w-7xl">
				{/* Camera and Lens Row */}
				<div className="mb-2 sm:mb-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs sm:text-sm font-medium">
					<div className="flex flex-wrap items-center gap-3 sm:gap-6">
						{(exifData.Make || exifData.Model) && (
							<div className="flex items-center gap-1.5 sm:gap-2">
								<FaCamera className="text-white/60 text-sm" />
								<span className="truncate max-w-[150px] sm:max-w-none">
									{exifData.Make} {exifData.Model}
								</span>
							</div>
						)}
						{exifData.LensModel && (
							<div className="hidden sm:flex items-center gap-2">
								<MdLens className="text-white/60" />
								<span className="truncate max-w-[200px] lg:max-w-none">{exifData.LensModel}</span>
							</div>
						)}
					</div>
					{exifData.DateTimeOriginal && (
						<div className="flex items-center gap-1.5 sm:gap-2 text-white/70 sm:ml-auto">
							<MdDateRange className="text-white/60 text-sm" />
							<span className="text-xs sm:text-sm">{formatDate(new Date(exifData.DateTimeOriginal))}</span>
						</div>
					)}
				</div>

				{/* Divider */}
				<div className="mb-3 sm:mb-4 h-px bg-white/20" />

				{/* Shooting Settings - Responsive Grid on Mobile */}
				<div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-3 sm:gap-4 font-mono">
					{exifData.FocalLength && (
						<div className="flex items-baseline gap-1">
							<span className="text-base sm:text-lg md:text-xl font-semibold">{Math.round(exifData.FocalLength)}</span>
							<span className="text-xs sm:text-sm text-white/60">mm</span>
							{exifData.FocalLengthIn35mmFormat && exifData.FocalLengthIn35mmFormat !== exifData.FocalLength && (
								<span className="hidden sm:inline text-xs text-white/40 ml-1">
									({Math.round(exifData.FocalLengthIn35mmFormat)}mm)
								</span>
							)}
						</div>
					)}

					{exifData.FNumber && (
						<div className="flex items-baseline gap-0.5">
							<span className="text-xs sm:text-sm text-white/60">ƒ/</span>
							<span className="text-base sm:text-lg md:text-xl font-semibold">{exifData.FNumber}</span>
						</div>
					)}

					{exifData.ExposureTime && (
						<div className="flex items-baseline">
							<span className="text-base sm:text-lg md:text-xl font-semibold">
								{formatExposureTime(exifData.ExposureTime)}
							</span>
						</div>
					)}

					{exifData.ISO && (
						<div className="flex items-baseline gap-1">
							<span className="text-xs sm:text-sm text-white/60">ISO</span>
							<span className="text-base sm:text-lg md:text-xl font-semibold">{exifData.ISO}</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
