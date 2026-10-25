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
import { SelectSpecialization } from "./select-specialization";
import { ToggleMode } from "./toggle-mode";
import { ToggleThemeColor } from "./toggle-theme-color";
import { useDataStore } from "@/stores/data.store";
import { FeedbackFloatingDialog } from "./feedback-dialog-button";
import { MessageSquarePlus, Sparkles, ExternalLink } from "lucide-react";

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
    <Sidebar className="border-r border-white/50 dark:border-white/[0.08] bg-white/60 dark:bg-zinc-950/60 backdrop-blur-2xl backdrop-saturate-180 select-none">
      {/* Brand Header */}
      <SidebarHeader className="h-16 px-4 flex flex-row items-center border-b border-white/50 dark:border-white/[0.08] shrink-0">
        <Link href="/" className="flex items-center gap-2.5 group w-full">
          <div className="relative size-9 rounded-xl overflow-hidden shadow-xs group-hover:scale-105 transition-transform bg-white/50 dark:bg-white/[0.06] border border-white/60 dark:border-white/[0.1] p-1 flex items-center justify-center shrink-0">
            <Image
              src={"/favicon.png"}
              height={32}
              width={32}
              alt="PU Vault"
              className="size-7 object-contain"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base tracking-tight text-foreground truncate">
                PU Vault
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-primary/15 text-primary border border-primary/20 shrink-0">
                PRO
              </span>
            </div>
            <span className="text-[10px] text-muted-foreground font-medium truncate">
              Student Resource Hub
            </span>
          </div>
        </Link>
      </SidebarHeader>

      {/* Academic Configuration Widget */}
      <div className="p-3 space-y-2.5 border-b border-white/40 dark:border-white/[0.06] bg-white/30 dark:bg-white/[0.02] shrink-0">
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-muted-foreground/80 uppercase tracking-wider block px-1">
            Specialization Track
          </span>
          <SelectSpecialization />
        </div>

        {sem && (
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-muted-foreground/80 uppercase tracking-wider block px-1">
              Semester
            </span>
            <div className="w-full grid grid-cols-4 gap-1 p-1 rounded-xl bg-white/40 dark:bg-zinc-900/40 border border-white/50 dark:border-white/[0.08] backdrop-blur-md">
              {[1, 2, 3, 4].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSem(s)}
                  className={cn(
                    "h-7 rounded-lg text-xs font-bold transition-all flex items-center justify-center cursor-pointer border",
                    sem === s
                      ? "bg-primary text-primary-foreground shadow-xs border-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:bg-white/40 dark:hover:bg-white/[0.06]",
                  )}
                >
                  Sem {s}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Categorized Navigation */}
      <SidebarContent className="px-3 py-3 space-y-4 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-white/20 dark:scrollbar-thumb-white/[0.08]">
        {categories.map((cat) => {
          const links = navLinks.filter((l) => {
            if (l.category !== cat.key) return false;
            if (l.sem && sem && !l.sem.includes(sem)) return false;
            return true;
          });

          if (links.length === 0) return null;

          return (
            <SidebarGroup key={cat.key} className="p-0">
              <SidebarGroupLabel className="text-[11px] uppercase tracking-wider font-extrabold text-muted-foreground/60 px-2 py-1 mb-1 block">
                {cat.label}
              </SidebarGroupLabel>
              <div className="space-y-1">
                {links.map((link) => {
                  const activeLink =
                    (link.href !== "/" && pathname.startsWith(link.href)) ||
                    pathname === link.href;
                  const Icon = link.icon;
                  const isExternal = link.href.startsWith("http");

                  return (
                    <Link
                      href={link.href}
                      key={link.id}
                      className={cn(
                        "w-full flex items-center justify-between h-9 px-3 font-medium rounded-xl transition-all duration-150 text-[13px] group border select-none relative",
                        activeLink
                          ? "bg-primary/15 text-primary font-bold shadow-xs border-primary/25 backdrop-blur-md before:absolute before:left-0 before:top-2 before:bottom-2 before:w-1 before:bg-primary before:rounded-r-full"
                          : "border-transparent text-muted-foreground hover:bg-black/[0.04] dark:hover:bg-white/[0.06] hover:text-foreground hover:border-black/[0.04] dark:hover:border-white/[0.06]",
                      )}
                      {...(isExternal
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <Icon
                          className={cn(
                            "size-4 shrink-0 transition-colors",
                            activeLink
                              ? "text-primary"
                              : "text-muted-foreground group-hover:text-foreground",
                          )}
                        />
                        <span className="truncate">{link.title}</span>
                      </div>

                      {link.href === "/featured-apps" ? (
                        <span className="flex items-center gap-0.5 text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/20 shrink-0">
                          <Sparkles className="size-2.5" /> New
                        </span>
                      ) : isExternal ? (
                        <ExternalLink className="size-3 opacity-40 group-hover:opacity-80 transition-opacity shrink-0" />
                      ) : null}
                    </Link>
                  );
                })}
              </div>
            </SidebarGroup>
          );
        })}

        {/* Feedback Quick Action */}
        <SidebarGroup className="p-0 pt-2">
          <FeedbackFloatingDialog
            trigger={
              <button
                type="button"
                className="w-full flex items-center justify-between h-9 px-3 rounded-xl border border-white/50 dark:border-white/[0.08] bg-white/30 dark:bg-white/[0.03] backdrop-blur-md hover:bg-white/60 dark:hover:bg-white/[0.08] hover:border-primary/40 text-[13px] font-medium text-muted-foreground hover:text-foreground transition-all cursor-pointer group shadow-2xs"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <MessageSquarePlus className="size-4 text-primary shrink-0" />
                  <span className="truncate">Submit Feedback</span>
                </div>
              </button>
            }
          />
        </SidebarGroup>
      </SidebarContent>

      {/* Footer Customization Controls */}
      <SidebarFooter className="border-t border-white/50 dark:border-white/[0.08] p-3.5 bg-white/30 dark:bg-white/[0.02] space-y-2.5 overflow-hidden shrink-0">
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-muted-foreground/80 uppercase tracking-wider block px-1">
            Appearance
          </span>
          <ToggleMode />
        </div>
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-muted-foreground/80 uppercase tracking-wider block px-1">
            Accent Theme
          </span>
          <ToggleThemeColor />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
