import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface ContactLinksProps {
  contacts: {
    email: string;
    github: string;
    linkedin: string;
  };
}

export const ContactLinks: React.FC<ContactLinksProps> = ({ contacts }) => {
  return (
    <section className="flex flex-wrap justify-center gap-4">
      <Link
        href={`mailto:${contacts.email}`}
        className="flex items-center space-x-2 rounded-full bg-gray-100 px-4 py-2 font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <span>
          <MdEmail />
        </span>
        <span>Email</span>
      </Link>
      <Link
        href={`https://github.com/${contacts.github}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 rounded-full bg-gray-100 px-4 py-2 font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <span>
          <FaGithub />
        </span>
        <span>GitHub</span>
      </Link>
      <Link
        href={`https://www.linkedin.com/in/${contacts.linkedin}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 rounded-full bg-gray-100 px-4 py-2 font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <span>
          <FaLinkedin />
        </span>
        <span>LinkedIn</span>
      </Link>
    </section>
  );
};
