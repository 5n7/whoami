import { AboutSection } from "@/components/AboutSection";
import { AwardsSection } from "@/components/AwardsSection";
import { BasicInfoSection } from "@/components/BasicInfoSection";
import { ContactLinks } from "@/components/ContactLinks";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProfileHeader } from "@/components/ProfileHeader";
import { PublicationsSection } from "@/components/PublicationsSection";
import { SpeakingSection } from "@/components/SpeakingSection";
import { profileData } from "@/data/profile";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center space-y-8 py-8">
			<ProfileHeader imageUrl={profileData.imageUrl} name={profileData.name} title={profileData.title} />
			<AboutSection content={profileData.about} />
			<BasicInfoSection info={profileData.basicInfo} />
			<ExperienceSection experiences={profileData.professionalExperiences} linkedinId={profileData.contacts.linkedin} />
			<EducationSection education={profileData.education} />
			<SpeakingSection presentations={profileData.presentations} />
			<PublicationsSection publications={profileData.publications} />
			<AwardsSection awards={profileData.awards} />
			<ContactLinks contacts={profileData.contacts} />

			{/* Footer */}
			<footer className="mt-6 text-center text-xs text-gray-400">
				<p>© {new Date().getFullYear()} - Shunta Komatsu</p>
			</footer>
		</div>
	);
}
