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
import { ToggleThemeColor } from "./toggle-theme-color";
import { SemSelectBox } from "./sem-select-box";
import { useDataStore } from "@/stores/data.store";

export function AppSidebar() {
  const pathname = usePathname();
  const sem = useDataStore((state) => state.sem);
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center flex-row justify-center gap-2">
        <Image src={"/favicon.png"} height={40} width={40} alt="Logo" />
        <div className="font-bold">Pu Vault</div>
      </SidebarHeader>
      <SidebarGroup>
        <SelectDivision />
      </SidebarGroup>
      <SidebarGroup>
        <SemSelectBox showToast />
      </SidebarGroup>
      <SidebarContent>
        <SidebarGroup>
          {navLinks.map((link) => {
            if (link?.sem && sem && !link?.sem?.includes(sem)) return;
            const activeLink =
              (link.href != "/" && pathname.startsWith(link.href)) ||
              pathname == link.href;
            const Icon = link.icon;
            return (
              <Link
                href={link.href}
                className={cn(
                  "w-full flex items-center gap-2 py-2 px-4 font-medium rounded-sm  hover:text-primary transition-all dark:text-[#ccc]",
                  activeLink &&
                    "bg-gray-200 dark:bg-[#101010] border-l-4 border-primary",
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
      <SidebarFooter className="border-t">
        <ToggleMode />
        <ToggleThemeColor />
      </SidebarFooter>
    </Sidebar>
  );
}
