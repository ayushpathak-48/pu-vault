import { interviewQuestions } from "@/lib/constants/sem-2/interviewQuestions.constant";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Interview Questions - Pu-Vault',
  description: 'Access a curated collection of interview questions for various subjects and courses. Prepare effectively with our comprehensive question bank designed to help students excel in their interviews.',
}

const SoftwareLinksPage = () => {
  return (
    <div className="p-5 flex flex-col gap-10 w-full">
      <div className="flex flex-col gap-4">
        {interviewQuestions.map((software) => (
          <div
            key={software.id}
            className="flex items-center justify-between bg-gray-100 dark:bg-[#181818] p-4 rounded-lg"
          >
            <Link href={software.href}>
              <h2 className="text-lg font-medium hover:text-primary transition-all">
                {software.title}
              </h2>
            </Link>
            <Link
              href={software.href}
              target="_blank"
              className="font-medium primary"
            >
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoftwareLinksPage;
