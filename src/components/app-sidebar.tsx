"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { BookOpenText } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { SemSelectBox } from "./sem-select-box";

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup className="flex items-center w-full justify-center">
          <BookOpenText className="size-10 text-sky-700" />
        </SidebarGroup>
        <SidebarGroup>
          {navLinks.map((link) => {
            const activeLink = pathname == link.href;
            const Icon = link.icon;
            return (
              <Link
                href={link.href}
                className={cn(
                  "w-full flex items-center gap-2 py-2 px-4 font-medium rounded-sm  hover:text-sky-600 transition-all",
                  activeLink &&
                    "bg-gray-200 text-sky-600 border-l-4 border-sky-700"
                )}
                key={link.id}
              >
                <Icon className="size-5" />
                {link.title}
              </Link>
            );
          })}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>{/* <SemSelectBox /> */}</SidebarFooter>
    </Sidebar>
  );
}
