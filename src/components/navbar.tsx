"use client";

import { navLinks } from "@/lib/constants";
import { usePathname } from "next/navigation";
import React, { useLayoutEffect, useState } from "react";

export const Navbar = () => {
  const pathname = usePathname();
  const [activePage, setActivePage] = useState(
    navLinks.find((link) => link.href == pathname)
  );

  useLayoutEffect(() => {
    if (pathname != activePage?.href) {
      setActivePage(() => navLinks.find((link) => link.href == pathname));
    }
  }, [pathname]);

  return (
    <div className="shadow w-full flex items-center h-16 lg:h-20 px-4 lg:px-20 py-4 lg:py-10">
      <div className="custom-heading font-semibold text-2xl lg:text-3xl">
        {activePage?.title}
      </div>
    </div>
  );
};
