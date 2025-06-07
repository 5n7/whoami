import React from "react";
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
            key={index}
            title={pub.title}
            subtitle={pub.publisher}
            period={pub.date}
            isLast={index === publications.length - 1}
            titleLink={pub.link}
          />
        ))}
      </div>
    </SectionContainer>
  );
};
