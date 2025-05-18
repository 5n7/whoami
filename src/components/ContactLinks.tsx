import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
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
        href={`mailto:${contacts.email}`}
        className="rounded-full bg-gray-100 p-3 text-2xl transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
        aria-label="Email"
      >
        <MdEmail />
      </Link>
      <Link
        href={`https://github.com/${contacts.github}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-gray-100 p-3 text-2xl transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
        aria-label="GitHub"
      >
        <FaGithub />
      </Link>
      <Link
        href={`https://www.linkedin.com/in/${contacts.linkedin}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-gray-100 p-3 text-2xl transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </Link>
      <Link
        href={`https://speakerdeck.com/${contacts.speakerdeck}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-gray-100 p-3 text-2xl transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
        aria-label="Speaker Deck"
      >
        <SiSpeakerdeck />
      </Link>
    </section>
  );
};
