import { nptelAllWeeksAnswers } from "@/lib/constants/nptel-answers.constant";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'NPTEL Assignment Answers - Pu-Vault',
  description: 'Access a comprehensive collection of NPTEL assignment answers for various subjects and courses. Enhance your learning with our detailed solutions designed to help students excel in their studies.',
}


const page = () => {
  return (
    <div className="p-5 flex flex-col gap-10 w-full">
      <div className="flex flex-col gap-4">
        {nptelAllWeeksAnswers.map((week) => (
          <Link key={week.key} href={`/nptel-assignment-answers/${week.key}`}>
            <div className="flex group border border-transparent hover:text-primary hover:border-primary/50 cursor-pointer items-center justify-between bg-gray-100 dark:bg-[#181818] p-4 rounded-lg">
              <h2 className="text-base md:text-lg font-medium hover:text-primary transition-all">
                {week.title}
              </h2>
              <ArrowRight className="group-hover:-translate-x-1 transition-all" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
