"use client";

import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const BottomTabs = () => {
  const pathname = usePathname();
  return (
    <div className="fixed md:hidden bottom-0 h-14 inset-x-0 bg-gray-100">
      <div className="flex items-center justify-start h-full">
        {navLinks.map((link) => {
          const activeLink = pathname == link.href;
          const Icon = link.icon;
          return (
            <Link
              href={link.href}
              key={link.id}
              className="w-full h-full flex items-center justify-center hover:bg-gray-200 flex-col gap-1"
            >
              <Icon
                className={cn(
                  "size-6 text-gray-500 active:scale-[0.95] transition-all",
                  activeLink && "text-sky-500"
                )}
              />
              <span
                className={cn(
                  "text-[10px] font-medium text-gray-500",
                  activeLink && "text-sky-500"
                )}
              >
                {link.title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
