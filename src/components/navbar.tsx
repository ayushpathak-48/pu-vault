"use client";

import { CourseType, navLinks } from "@/lib/constants";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useLayoutEffect, useState } from "react";
import { useSidebar } from "@/components/ui/sidebar";
import { MenuIcon, SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import SearchModal from "./search-modal";
import { DataDialog } from "./modals/data-dialog";
import { cn } from "@/lib/utils";
import { useDataStore } from "@/stores/data.store";

export const Navbar = () => {
  const pathname = usePathname();
  const courseParam = useSearchParams().get("course") as CourseType;
  const divisionParam = useSearchParams().get("div");

  const setCourse = useDataStore((state) => state.setCourse);
  const setDivision = useDataStore((state) => state.setDivision);

  const { toggleSidebar, setOpenMobile } = useSidebar();

  const [activePageTitle, setActivePageTitle] = useState(
    navLinks.find((link) => link.href == pathname)?.title,
  );

  useLayoutEffect(() => {
    if (pathname.includes("/code")) {
      setActivePageTitle("Source Codes");
    } else if (pathname.includes("/flash-cards")) {
      setActivePageTitle("Flash Cards");
    } else {
      setActivePageTitle(
        () => navLinks.find((link) => link.href.includes(pathname))?.title,
      );
    }
    setOpenMobile(false);
  }, [pathname]);

  useLayoutEffect(() => {
    if (courseParam && ["mca", "mscit"].includes(courseParam)) {
      setCourse(courseParam);
    }
    if (
      divisionParam &&
      ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"].includes(
        divisionParam,
      )
    ) {
      setDivision(divisionParam);
    }
  }, [courseParam, divisionParam]);

  return (
    <>
      <div className="bg-gray-50 dark:bg-[#181818] shadow md:w-[calc(100%-16rem)] ml-auto w-full flex items-center justify-between h-16 lg:h-20 px-4 lg:px-20 py-4 lg:py-10 fixed top-0 z-[40]">
        <Link href={"/"} className="md:hidden">
          <Image src={"/favicon.png"} height={40} width={40} alt="Logo" />
        </Link>
        <div className="max-md:text-center max-md:w-full custom-heading font-semibold text-2xl lg:text-3xl">
          {activePageTitle}
        </div>
        <div className="md:hidden">
          <SearchModal
            hideShortcut
            triggerContent={
              <SearchIcon
                className={cn(
                  "size-6 text-gray-500 active:scale-[0.95] transition-all",
                )}
              />
            }
          />
        </div>
        <div className="md:hidden">
          <Button
            variant={"ghost"}
            size={"icon"}
            className="min-h-6 min-w-6 !size-6"
            onClick={toggleSidebar}
          >
            <MenuIcon className="" />
          </Button>
        </div>
        <div className="max-md:hidden">
          <SearchModal />
        </div>
      </div>
      {/* <WhatsappDialog /> */}
      <DataDialog />
    </>
  );
};
