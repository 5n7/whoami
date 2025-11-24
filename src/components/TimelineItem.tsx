import type React from "react";
import type { ReactNode } from "react";

interface TimelineItemProps {
	title: string;
	subtitle: string | ReactNode;
	period: string;
	description?: string | ReactNode;
	isLast?: boolean;
	titleLink?: string;
	subtitleLink?: string;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
	title,
	subtitle,
	period,
	description,
	isLast = false,
	titleLink,
	subtitleLink,
}) => {
	return (
		<div className={`relative pl-6 ${!isLast ? "pb-6" : ""}`}>
			{/* Timeline line */}
			{!isLast && <div className="absolute top-5 left-2 h-full w-px bg-gray-300"></div>}

			{/* Timeline marker */}
			<div className="absolute top-1 left-0 h-4 w-4 rounded-sm bg-gray-900"></div>

			{/* Content */}
			<div className="ml-1">
				<div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
					<div className="sm:min-w-0">
						{titleLink ? (
							<a
								className="text-base font-medium text-gray-900 hover:text-gray-700"
								href={titleLink}
								rel="noopener noreferrer"
								target="_blank"
							>
								{title}
							</a>
						) : (
							<h3 className="text-base font-medium text-gray-900">{title}</h3>
						)}
						<p className="mt-2 pl-2 text-sm text-gray-600">
							{subtitleLink && typeof subtitle === "string" ? (
								<a
									className="text-gray-600 hover:text-gray-700"
									href={subtitleLink}
									rel="noopener noreferrer"
									target="_blank"
								>
									{subtitle}
								</a>
							) : (
								subtitle
							)}
						</p>
					</div>
					<span className="mt-1 pl-2 text-xs text-gray-500 sm:mt-0 sm:ml-auto sm:shrink-0 sm:whitespace-nowrap sm:text-right sm:pl-4">
						{period}
					</span>
				</div>

				{description && <div className="mt-1 pl-2 text-sm text-gray-700">{description}</div>}
			</div>
		</div>
	);
};
