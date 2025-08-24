import type React from "react";
import { SectionContainer } from "./SectionContainer";

interface BasicInfoSectionProps {
	info: {
		label: string;
		value: string;
	}[];
}

export const BasicInfoSection: React.FC<BasicInfoSectionProps> = ({ info }) => {
	return (
		<SectionContainer title="Basic Information">
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				{info.map((item, index) => (
					<div className="border-b border-gray-200 pb-3" key={index}>
						<dt className="mb-1 text-xs tracking-wider text-gray-500 uppercase">{item.label}</dt>
						<dd className="text-base text-gray-900">{item.value}</dd>
					</div>
				))}
			</div>
		</SectionContainer>
	);
};
