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
		<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-8 text-white">
			<div className="mx-auto max-w-7xl">
				{/* Camera and Lens Row */}
				<div className="mb-3 flex flex-wrap items-center gap-6 text-sm font-medium">
					{(exifData.Make || exifData.Model) && (
						<div className="flex items-center gap-2">
							<FaCamera className="text-white/60" />
							<span>
								{exifData.Make} {exifData.Model}
							</span>
						</div>
					)}
					{exifData.LensModel && (
						<div className="flex items-center gap-2">
							<MdLens className="text-white/60" />
							<span>{exifData.LensModel}</span>
						</div>
					)}
					{exifData.DateTimeOriginal && (
						<div className="ml-auto flex items-center gap-2 text-white/80">
							<MdDateRange className="text-white/60" />
							<span>{formatDate(new Date(exifData.DateTimeOriginal))}</span>
						</div>
					)}
				</div>

				{/* Divider */}
				<div className="mb-4 h-px bg-white/20" />

				{/* Shooting Settings - Single Row */}
				<div className="flex flex-wrap items-center gap-4 font-mono">
					{exifData.FocalLength && (
						<>
							<div className="flex items-baseline gap-1">
								<span className="text-xl font-semibold">{Math.round(exifData.FocalLength)}</span>
								<span className="text-sm text-white/60">mm</span>
								{exifData.FocalLengthIn35mmFormat && exifData.FocalLengthIn35mmFormat !== exifData.FocalLength && (
									<span className="text-xs text-white/40 ml-1">({Math.round(exifData.FocalLengthIn35mmFormat)}mm)</span>
								)}
							</div>
							{(exifData.FNumber || exifData.ExposureTime || exifData.ISO) && <span className="text-white/20">•</span>}
						</>
					)}

					{exifData.FNumber && (
						<>
							<div className="flex items-baseline gap-0.5">
								<span className="text-sm text-white/60">ƒ/</span>
								<span className="text-xl font-semibold">{exifData.FNumber}</span>
							</div>
							{(exifData.ExposureTime || exifData.ISO) && <span className="text-white/20">•</span>}
						</>
					)}

					{exifData.ExposureTime && (
						<>
							<div className="flex items-baseline">
								<span className="text-xl font-semibold">{formatExposureTime(exifData.ExposureTime)}</span>
							</div>
							{exifData.ISO && <span className="text-white/20">•</span>}
						</>
					)}

					{exifData.ISO && (
						<div className="flex items-baseline gap-1">
							<span className="text-sm text-white/60">ISO</span>
							<span className="text-xl font-semibold">{exifData.ISO}</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
