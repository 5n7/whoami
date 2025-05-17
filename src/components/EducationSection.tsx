import React from "react";
import { SectionContainer } from "./SectionContainer";
import { TimelineItem } from "./TimelineItem";

interface EducationSectionProps {
  education: {
    degree: string;
    institution: string;
    period: string;
    description?: string;
  }[];
}

export const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  return (
    <SectionContainer title="Education">
      <div className="space-y-2">
        {education.map((edu, index) => (
          <TimelineItem
            key={index}
            title={edu.degree}
            subtitle={edu.institution}
            period={edu.period}
            description={edu.description}
            isLast={index === education.length - 1}
          />
        ))}
      </div>
    </SectionContainer>
  );
};
