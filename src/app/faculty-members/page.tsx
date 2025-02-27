"use client";

import { Input } from "@/components/ui/input";
import { facultyMembersList } from "@/lib/constants/faculty-members.constant";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const SoftwareLinksPage = () => {
  const [search, setSearch] = useState("");
  const filteredFaculties = facultyMembersList.filter(
    (faculty) =>
      !search ||
      search == "" ||
      faculty.name.toLowerCase().includes(search.toLowerCase()) ||
      faculty.phone_number.includes(search)
  );
  return (
    <div className="p-5 flex flex-col gap-10 w-full">
      {/* <h2 className="text-2xl font-semibold custom-heading text-center">
        All Assignments Link
      </h2> */}
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Faculty Members..."
      />
      {filteredFaculties.length == 0 ? (
        <div className="flex items-center justify-center">
          No Results found for <span className="font-bold">{search}</span>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {filteredFaculties.map((faculty) => (
            <div
              key={faculty.id}
              className="flex items-center justify-between bg-gray-100 p-4 rounded-lg"
            >
              {/* <Link href={`tel:${faculty.phone_number}`}> */}
              <h2 className="text-lg font-medium hover:text-sky-500 transition-all">
                {faculty.name}
              </h2>
              {/* </Link> */}
              <div className="flex items-center justify-center gap-2">
                <div className="font-medium border rounded-sm px-4 py-2">
                  {faculty.phone_number}
                </div>
                <Link
                  href={`tel:${faculty.phone_number}`}
                  target="_blank"
                  className="font-medium text-sky-800 border rounded-sm p-1"
                >
                  <Phone className="size-6" />
                </Link>
                <Link
                  href={`https://wa.me/${faculty.phone_number}`}
                  target="_blank"
                  className="font-medium text-sky-600 border rounded-sm p-1"
                >
                  <Image
                    src={"/icons/whatsapp.png"}
                    height={24}
                    width={24}
                    alt="Whatsapp"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SoftwareLinksPage;
