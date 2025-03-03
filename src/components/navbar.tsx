"use client";

import { navLinks } from "@/lib/constants";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useLayoutEffect, useState } from "react";
import { useSidebar } from "@/components/ui/sidebar";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";

export const Navbar = () => {
  const pathname = usePathname();
  const { toggleSidebar } = useSidebar();

  const [activePageTitle, setActivePageTitle] = useState(
    navLinks.find((link) => link.href == pathname)?.title
  );

  useLayoutEffect(() => {
    console.log({ pathname });
    if (pathname.includes("/code/")) {
      setActivePageTitle("Source Codes");
    } else {
      setActivePageTitle(
        () => navLinks.find((link) => link.href.includes(pathname))?.title
      );
    }
  }, [pathname]);

  return (
    <div className="bg-gray-50 shadow w-full flex items-center justify-between h-16 lg:h-20 px-4 lg:px-20 py-4 lg:py-10 fixed top-0 z-[40]">
      <Image
        src={"/favicon.png"}
        height={40}
        width={40}
        alt="Logo"
        className="md:hidden"
      />
      <div className="max-md:text-center max-md:w-full custom-heading font-semibold text-2xl lg:text-3xl">
        {activePageTitle}
      </div>
      <Button
        variant={"ghost"}
        size={"icon"}
        className="min-h-6 min-w-6 !size-6"
        onClick={toggleSidebar}
      >
        <MenuIcon className=" md:hidden" />
      </Button>
    </div>
  );
};
