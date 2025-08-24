import Link from "next/link";
import type React from "react";
import { FaCamera, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiSpeakerdeck } from "react-icons/si";

interface ContactLinksProps {
	contacts: {
		email: string;
		github: string;
		linkedin: string;
		speakerdeck: string;
	};
}

export const ContactLinks: React.FC<ContactLinksProps> = ({ contacts }) => {
	return (
		<section className="flex flex-wrap justify-center gap-4">
			<Link
				aria-label="Email"
				className="rounded-full bg-gray-100 p-3 text-2xl transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
				href={`mailto:${contacts.email}`}
			>
				<MdEmail />
			</Link>
			<Link
				aria-label="GitHub"
				className="rounded-full bg-gray-100 p-3 text-2xl transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
				href={`https://github.com/${contacts.github}`}
				rel="noopener noreferrer"
				target="_blank"
			>
				<FaGithub />
			</Link>
			<Link
				aria-label="LinkedIn"
				className="rounded-full bg-gray-100 p-3 text-2xl transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
				href={`https://www.linkedin.com/in/${contacts.linkedin}`}
				rel="noopener noreferrer"
				target="_blank"
			>
				<FaLinkedin />
			</Link>
			<Link
				aria-label="Speaker Deck"
				className="rounded-full bg-gray-100 p-3 text-2xl transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
				href={`https://speakerdeck.com/${contacts.speakerdeck}`}
				rel="noopener noreferrer"
				target="_blank"
			>
				<SiSpeakerdeck />
			</Link>
			<Link
				aria-label="Photography"
				className="rounded-full bg-gray-100 p-3 text-2xl transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
				href="/photography"
			>
				<FaCamera />
			</Link>
		</section>
	);
};
