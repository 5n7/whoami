import type React from "react";
import { SectionContainer } from "./SectionContainer";
import { TimelineItem } from "./TimelineItem";

interface AwardsSectionProps {
	awards: {
		title: string;
		issuer: string;
		date: string;
		description?: string;
	}[];
}

export const AwardsSection: React.FC<AwardsSectionProps> = ({ awards }) => {
	return (
		<SectionContainer title="Awards & Funding">
			<div className="space-y-2">
				{awards.map((award, index) => (
					<TimelineItem
						description={award.description}
						isLast={index === awards.length - 1}
						key={index}
						period={award.date}
						subtitle={award.issuer}
						title={award.title}
					/>
				))}
			</div>
		</SectionContainer>
	);
};
