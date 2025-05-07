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
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SelectDivision } from "./select-division";
import InstallPWAButton from "./install-app-btn";
import { ToggleMode } from "./toggle-mode";

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center flex-row justify-center gap-2">
        <Image src={"/favicon.png"} height={40} width={40} alt="Logo" />
        <div className="font-bold">Pu Vault</div>
      </SidebarHeader>
      <SidebarGroup>
        <SelectDivision />
      </SidebarGroup>
      <SidebarContent>
        <SidebarGroup>
          {navLinks.map((link) => {
            const activeLink =
              (link.href != "/" && pathname.startsWith(link.href)) ||
              pathname == link.href;
            const Icon = link.icon;
            return (
              <Link
                href={link.href}
                className={cn(
                  "w-full flex items-center gap-2 py-2 px-4 font-medium rounded-sm  hover:text-sky-600 hover:dark:text-sky-700 transition-all",
                  activeLink &&
                    "bg-gray-200 dark:bg-[#101010] text-sky-600 dark:text-sky-700 border-l-4 border-sky-700 dark:border-sky-700",
                )}
                key={link.id}
              >
                <Icon className="size-5" />
                {link.title}
              </Link>
            );
          })}
        </SidebarGroup>
        <SidebarGroup>
          <InstallPWAButton />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <ToggleMode />
      </SidebarFooter>
    </Sidebar>
  );
}
