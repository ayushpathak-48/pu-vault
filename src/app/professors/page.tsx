"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { professorDetails } from "@/lib/constants/professor-details.constant";
import { MailIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProfessorsPage = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="p-3 md:p-5">
      <div className="flex items-center justify-between flex-wrap gap-2 max-sm:justify-center mb-2">
        <div className="font-medium text-lg">All Professors</div>
        <Input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search Professor..."
          className="max-w-sm"
        />
      </div>
      <div className="min-h-40 flex flex-col gap-2 w-full">
        {professorDetails.filter(({ name }) =>
          name.toLowerCase().includes(searchText.toLowerCase()),
        ).length == 0 && (
            <div className="h-40 text-center flex items-center justify-center">
              No Professor Found with the name {searchText}
            </div>
          )}
        {professorDetails
          .filter(({ name }) =>
            name.toLowerCase().includes(searchText.toLowerCase()),
          )
          .map((professor) => (
            <div
              key={professor.id}
              className="flex items-center justify-between gap-2 bg-gray-100 dark:bg-[#181818] p-4 rounded-lg flex-wrap"
            >
              <h2 className="text-sm">{professor.name}</h2>
              <div className="flex items-center gap-2 justify-evenly">
                <Button variant={"outline"} size={"sm"} asChild>
                  <Link
                    href={`tel:${professor.phone}`}
                    target="_blank"
                    className="font-medium primary"
                  >
                    Call
                  </Link>
                </Button>
                <Button variant={"secondary"} size={"icon"} asChild>
                  <Link
                    href={`https://wa.me/${professor.phone}`}
                    target="_blank"
                    className="font-medium primary"
                  >
                    <Image
                      src={"/icons/whatsapp.png"}
                      height={20}
                      width={20}
                      alt="Whatsapp"
                    />
                  </Link>
                </Button>
                <Button variant={"secondary"} size={"icon"} asChild>
                  <Link
                    href={`mailto:${professor.email}`}
                    target="_blank"
                    className="font-medium primary"
                  >
                    <MailIcon />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProfessorsPage;
