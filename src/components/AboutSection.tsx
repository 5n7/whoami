import React from "react";
import { SectionContainer } from "./SectionContainer";

interface AboutSectionProps {
  content: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ content }) => {
  return (
    <SectionContainer title="About Me">
      <p className="leading-relaxed text-gray-700">{content}</p>
    </SectionContainer>
  );
};
