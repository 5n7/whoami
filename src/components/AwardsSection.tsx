import React from "react";
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
            key={index}
            title={award.title}
            subtitle={award.issuer}
            period={award.date}
            description={award.description}
            isLast={index === awards.length - 1}
          />
        ))}
      </div>
    </SectionContainer>
  );
};
