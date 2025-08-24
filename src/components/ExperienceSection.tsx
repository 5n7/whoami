import type React from "react";
import { SectionContainer } from "./SectionContainer";
import { TimelineItem } from "./TimelineItem";

interface Experience {
	title: string;
	company: string;
	period: string;
	description: string;
	type: "main" | "side" | "past";
}

interface ExperienceSectionProps {
	experiences: Experience[];
	linkedinId?: string;
}

const typeLabel = (type: Experience["type"]) => {
	switch (type) {
		case "main":
			return "Current Position";
		case "side":
			return "Side Project";
		case "past":
			return "Previous Position";
		default:
			return "";
	}
};

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences, linkedinId }) => {
	return (
		<SectionContainer title="Professional Experience">
			<div className="space-y-2">
				{experiences.map((job, index) => (
					<TimelineItem
						description={job.description}
						isLast={index === experiences.length - 1}
						key={index}
						period={job.period}
						subtitle={
							<span>
								{job.company}
								<span className="ml-2 text-xs text-gray-400">{typeLabel(job.type)}</span>
							</span>
						}
						title={job.title}
					/>
				))}
			</div>
			{linkedinId && (
				<div className="mt-4 text-sm text-gray-500">
					For the full work history, please see my{" "}
					<a
						className="text-blue-600 underline"
						href={`https://www.linkedin.com/in/${linkedinId}`}
						rel="noopener noreferrer"
						target="_blank"
					>
						LinkedIn
					</a>
					.
				</div>
			)}
		</SectionContainer>
	);
};
