import type React from "react";
import { SectionContainer } from "./SectionContainer";
import { TimelineItem } from "./TimelineItem";

interface PublicationsSectionProps {
	publications: {
		title: string;
		publisher: string;
		date: string;
		link?: string;
	}[];
}

export const PublicationsSection: React.FC<PublicationsSectionProps> = ({ publications }) => {
	return (
		<SectionContainer title="Publications">
			<div className="space-y-2">
				{publications.map((pub, index) => (
					<TimelineItem
						isLast={index === publications.length - 1}
						key={index}
						period={pub.date}
						subtitle={pub.publisher}
						title={pub.title}
						titleLink={pub.link}
					/>
				))}
			</div>
		</SectionContainer>
	);
};
