"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { navLinks, NavLinkItem } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SelectDivision } from "./select-division";
import { ToggleMode } from "./toggle-mode";
import { ToggleThemeColor } from "./toggle-theme-color";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { useDataStore } from "@/stores/data.store";
import { FeedbackFloatingDialog } from "./feedback-dialog-button";
import { Button } from "./ui/button";
import { MessageSquarePlus, Sparkles } from "lucide-react";

export function AppSidebar() {
  const pathname = usePathname();
  const sem = useDataStore((state) => state.sem);
  const setSem = useDataStore((state) => state.setSem);

  const categories: { key: NavLinkItem["category"]; label: string }[] = [
    { key: "academics", label: "Academics" },
    { key: "practice", label: "Practice & Prep" },
    { key: "campus", label: "Campus & Utilities" },
    { key: "explore", label: "Explore & Extras" },
  ];

  return (
    <Sidebar className="border-r border-border/60 bg-sidebar/95 backdrop-blur-md">
      {/* Brand Header */}
      <SidebarHeader className="p-4 pb-2 border-b border-border/40">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative size-10 rounded-xl overflow-hidden shadow-md group-hover:scale-105 transition-transform bg-primary/10 p-1 flex items-center justify-center">
            <Image
              src={"/favicon.png"}
              height={36}
              width={36}
              alt="PU Vault"
              className="size-8 object-contain"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-lg tracking-tight text-foreground">
                PU Vault
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-primary/15 text-primary">
                PRO
              </span>
            </div>
            <span className="text-[11px] text-muted-foreground font-medium">
              Student Resource Hub
            </span>
          </div>
        </Link>
      </SidebarHeader>

      {/* Academic Config Section */}
      <div className="p-3 pb-1 space-y-2 border-b border-border/40 bg-muted/20">
        <div>
          <SelectDivision />
        </div>
        {sem && (
          <div className="flex items-center justify-between px-1 py-1">
            <span className="text-xs font-semibold text-muted-foreground">
              Semester
            </span>
            <ToggleGroup
              type="single"
              variant="default"
              value={sem.toString()}
              onValueChange={(value) =>
                value !== "" ? setSem(parseInt(value)) : ""
              }
              className="gap-1 bg-background/80 p-0.5 rounded-lg border border-border/50"
            >
              {[1, 2, 3, 4].map((s) => (
                <ToggleGroupItem
                  key={s}
                  value={s.toString()}
                  aria-label={`Semester ${s}`}
                  className={cn(
                    "size-7 text-xs font-semibold rounded-md transition-all",
                    sem === s
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {s}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
        )}
      </div>

      {/* Categorized Navigation */}
      <SidebarContent className="px-2 py-3 space-y-4">
        {categories.map((cat) => {
          const links = navLinks.filter((l) => {
            if (l.category !== cat.key) return false;
            if (l.sem && sem && !l.sem.includes(sem)) return false;
            return true;
          });

          if (links.length === 0) return null;

          return (
            <SidebarGroup key={cat.key} className="p-0">
              <SidebarGroupLabel className="text-[11px] uppercase tracking-wider font-bold text-muted-foreground/80 px-2 py-1 mb-1">
                {cat.label}
              </SidebarGroupLabel>
              <div className="space-y-0.5">
                {links.map((link) => {
                  const activeLink =
                    (link.href !== "/" && pathname.startsWith(link.href)) ||
                    pathname === link.href;
                  const Icon = link.icon;

                  return (
                    <Link
                      href={link.href}
                      key={link.id}
                      className={cn(
                        "w-full flex items-center justify-between py-2 px-3 font-medium rounded-xl transition-all text-sm group",
                        activeLink
                          ? "bg-primary/10 text-primary font-semibold shadow-sm"
                          : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
                      )}
                      {...(link.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon
                          className={cn(
                            "size-4 shrink-0 transition-transform group-hover:scale-110",
                            activeLink
                              ? "text-primary"
                              : "text-muted-foreground group-hover:text-foreground",
                          )}
                        />
                        <span>{link.title}</span>
                      </div>
                      {link.href === "/featured-apps" && (
                        <span className="flex items-center gap-0.5 text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400">
                          <Sparkles className="size-2.5" /> New
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </SidebarGroup>
          );
        })}

        {/* Feedback Action */}
        <SidebarGroup className="p-0 pt-2">
          <FeedbackFloatingDialog
            trigger={
              <Button
                variant="outline"
                className="w-full justify-start gap-2.5 rounded-xl border-dashed border-border/80 hover:border-primary/50 text-sm font-medium text-muted-foreground hover:text-foreground h-9 px-3"
              >
                <MessageSquarePlus className="size-4 text-primary" />
                <span>Submit Feedback</span>
              </Button>
            }
          />
        </SidebarGroup>
      </SidebarContent>

      {/* Footer Customization Controls */}
      <SidebarFooter className="border-t border-border/40 p-3 bg-muted/20 space-y-2">
        <div className="flex items-center justify-between gap-2">
          <ToggleMode />
          <ToggleThemeColor />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
