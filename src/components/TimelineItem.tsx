import React, { ReactNode } from "react";

interface TimelineItemProps {
  title: string;
  subtitle: string | ReactNode;
  period: string;
  description?: string | ReactNode;
  isLast?: boolean;
  link?: string;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  period,
  description,
  isLast = false,
  link,
}) => {
  return (
    <div className={`relative pl-6 ${!isLast ? "pb-6" : ""}`}>
      {/* Timeline line */}
      {!isLast && <div className="absolute top-5 left-2 h-full w-px bg-gray-300"></div>}

      {/* Timeline marker */}
      <div className="absolute top-1 left-0 h-4 w-4 rounded-sm bg-gray-900"></div>

      {/* Content */}
      <div className="ml-1">
        <div className="mb-1 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                {title}
              </a>
            ) : (
              <h3 className="text-base font-medium text-gray-900">{title}</h3>
            )}
            <p className="mt-2 pl-2 text-sm text-gray-600">{subtitle}</p>
          </div>
          <span className="mt-1 pl-2 text-xs text-gray-500 sm:mt-0">{period}</span>
        </div>

        {description && <div className="mt-1 pl-2 text-sm text-gray-700">{description}</div>}
      </div>
    </div>
  );
};
