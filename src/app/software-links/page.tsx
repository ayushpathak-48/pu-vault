import { softwareLinks } from "@/lib/constants";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Software Links - Pu-Vault',
  description: 'Access a comprehensive collection of software download links for various tools and applications. Enhance your productivity with our curated list of essential software resources.',
};

const SoftwareLinksPage = () => {
  return (
    <div className="p-5 flex flex-col gap-10 w-full">
      <h2 className="text-xl font-semibold ">All Softwares Links</h2>
      <div className="flex flex-col gap-4">
        {softwareLinks.map((software) => (
          <div
            key={software.id}
            className="flex items-center justify-between bg-gray-100 dark:bg-[#181818] p-4 rounded-lg"
          >
            <h2>{software.title}</h2>
            <Link
              href={software.link}
              target="_blank"
              className="font-medium primary"
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
