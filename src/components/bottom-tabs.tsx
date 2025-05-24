"use client";

import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useDataStore } from "@/stores/data.store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Fragment } from "react";
export const BottomTabs = () => {
  const pathname = usePathname();
  const bottomTabsEnabled = useDataStore((state) => state.bottomTabsEnabled);

  if (!bottomTabsEnabled) return;
  return (
    <div className="z-[40] fixed md:hidden bottom-0 h-14 inset-x-0 bg-gray-100 dark:bg-[#181818]">
      <div className="flex items-center justify-start h-full">
        {navLinks.map((link) => {
          if (link?.hideOnMobile) return;
          const activeLink =
            (link.href != "/" && pathname.startsWith(link.href)) ||
            pathname == link.href;
          const Icon = link.icon;
          return (
            <Fragment key={link.id}>
              <Link
                href={link.href}
                className="w-full h-full flex items-center justify-center hover:bg-gray-200 hover:dark:bg-gray-800 flex-col gap-1"
              >
                <Icon
                  className={cn(
                    "size-6 text-gray-500 active:scale-[0.95] transition-all",
                    activeLink && "text-primary",
                  )}
                />
                <span
                  className={cn(
                    "text-[10px] truncate text-center font-medium text-gray-500",
                    activeLink && "text-primary",
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
