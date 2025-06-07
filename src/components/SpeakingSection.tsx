import React from "react";
import { SectionContainer } from "./SectionContainer";
import { TimelineItem } from "./TimelineItem";

interface SpeakingSectionProps {
  presentations: {
    [key: string]: {
      title: string;
      event: string;
      date: string;
      materialLink?: string;
      eventLink?: string;
    }[];
  };
}

function toTitleCase(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1).replace(/([A-Z])/g, " $1");
}

export const SpeakingSection: React.FC<SpeakingSectionProps> = ({ presentations }) => {
  return (
    <SectionContainer title="Presentations">
      {Object.entries(presentations).map(([category, talks]) => (
        <div className="mb-8" key={category}>
          <h3 className="mb-4 text-base font-semibold">{toTitleCase(category)} Presentations</h3>
          <div className="space-y-4">
            {talks.map((talk, index) => (
              <TimelineItem
                key={index}
                title={talk.title}
                subtitle={talk.event}
                period={talk.date}
                isLast={index === talks.length - 1}
                titleLink={talk.materialLink}
                subtitleLink={talk.eventLink}
              />
            ))}
          </div>
        </div>
      ))}
    </SectionContainer>
  );
};
