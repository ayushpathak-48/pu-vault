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
// import InstallPWAButton from "./install-app-btn";
import { ToggleMode } from "./toggle-mode";
import { ToggleThemeColor } from "./toggle-theme-color";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { useDataStore } from "@/stores/data.store";

export function AppSidebar() {
  const pathname = usePathname();
  const sem = useDataStore((state) => state.sem);
  const setSem = useDataStore((state) => state.setSem);
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center flex-row justify-center gap-2">
        <Image src={"/favicon.png"} height={40} width={40} alt="Logo" />
        <div className="font-bold">Pu Vault</div>
      </SidebarHeader>
      <SidebarGroup>
        <SelectDivision />
      </SidebarGroup>
      {sem && (
        <SidebarGroup className="flex-row flex items-center justify-between">
          <div className="font-medium pl-2">Semester</div>
          <ToggleGroup
            type="single"
            variant="default"
            onValueChange={(value) => value ? setSem(parseInt(value):"")}
            value={sem.toString()}
          >
            <ToggleGroupItem
              value="1"
              aria-label="Semester 1"
              className={cn(
                "!border-gray-500 border",
                sem == 1 && "!bg-primary/100 !text-primary-foreground"
              )}
            >
              1
            </ToggleGroupItem>

            <ToggleGroupItem
              value="2"
              aria-label="Semester 2"
              className={cn(
                "!border-gray-500 border",
                sem == 2 && "!bg-primary/100 !text-primary-foreground"
              )}
            >
              2
            </ToggleGroupItem>

            <ToggleGroupItem
              value="3"
              aria-label="Semester 3"
              className={cn(
                "!border-gray-500 border",
                sem == 3 && "!bg-primary/100 !text-primary-foreground"
              )}
            >
              3
            </ToggleGroupItem>
          </ToggleGroup>
        </SidebarGroup>
      )}
      <SidebarContent>
        <SidebarGroup>
          {navLinks.map((link) => {
            // if (link?.sem && sem && !link?.sem?.includes(sem)) return;
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
                    "bg-gray-200 dark:bg-[#101010] border-l-4 border-primary"
                )}
                key={link.id}
              >
                <Icon className="size-5" />
                {link.title}
              </Link>
            );
          })}
        </SidebarGroup>
        {/* <SidebarGroup>
          <InstallPWAButton />
        </SidebarGroup> */}
      </SidebarContent>
      <SidebarFooter className="border-t">
        <ToggleMode />
        <ToggleThemeColor />
      </SidebarFooter>
    </Sidebar>
  );
}
