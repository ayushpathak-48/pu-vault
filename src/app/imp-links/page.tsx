import { impLinks } from "@/lib/constants";
import Link from "next/link";
import React from "react";

const SoftwareLinksPage = () => {
  return (
    <div className="p-5 flex flex-col gap-10 w-full">
      <div className="flex flex-col gap-4">
        {impLinks.map((link) => (
          <div
            key={link.id}
            className="flex items-center justify-between bg-gray-100 dark:bg-[#181818] p-4 rounded-lg"
          >
            <Link target="_blank" href={link.href}>
              <h2 className="text-base md:text-lg font-medium hover:text-primary transition-all">
                {link.title}
              </h2>
            </Link>
            <Link
              href={link.href}
              target="_blank"
              className="font-medium primary"
            >
              Open
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoftwareLinksPage;
