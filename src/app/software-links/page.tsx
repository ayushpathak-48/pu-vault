import { softwareLinks } from "@/lib/constants";
import Link from "next/link";
import React from "react";

const SoftwareLinksPage = () => {
  return (
    <div className="p-5 flex flex-col gap-10">
      <h2 className="text-xl font-semibold ">All Softwares for Sem 2</h2>
      <div className="flex flex-col gap-4">
        {softwareLinks.map((software) => (
          <div
            key={software.id}
            className="flex items-center justify-between bg-gray-100 p-4 rounded-lg"
          >
            <h2>{software.title}</h2>
            <Link
              href={software.link}
              target="_blank"
              className="font-medium text-sky-600"
            >
              Download
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoftwareLinksPage;
