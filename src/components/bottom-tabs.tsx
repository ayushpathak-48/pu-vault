"use client";

import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Fragment } from "react";
export const BottomTabs = () => {
  const pathname = usePathname();
  return (
    <div className="z-[40] fixed md:hidden bottom-0 h-14 inset-x-0 bg-gray-100">
      <div className="flex items-center justify-start h-full">
        {navLinks.map((link) => {
          const activeLink =
            (link.href != "" && pathname.startsWith(link.href)) ||
            pathname == link.href;
          const Icon = link.icon;
          if (link?.hideOnMobile) return;

          return (
            <Fragment key={link.id}>
              <Link
                href={link.href}
                className="w-full h-full flex items-center justify-center hover:bg-gray-200 flex-col gap-1"
              >
                <Icon
                  className={cn(
                    "size-6 text-gray-500 active:scale-[0.95] transition-all",
                    activeLink && "text-sky-500",
                  )}
                />
                <span
                  className={cn(
                    "text-[10px] truncate text-center font-medium text-gray-500",
                    activeLink && "text-sky-500",
                  )}
                >
                  {link.title}
                </span>
              </Link>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
