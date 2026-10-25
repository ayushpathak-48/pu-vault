"use client";

import { CourseType, navLinks, telegramBotChatIds } from "@/lib/constants";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useLayoutEffect, useMemo } from "react";
import { useSidebar } from "@/components/ui/sidebar";
import { Menu, Search, Settings } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import SearchModal from "./search-modal";
import { sendBotMessage } from "@/lib/utils";
import { useDataStore } from "@/stores/data.store";

export const Navbar = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const courseParam = searchParams.get("course") as CourseType;

  const setCourse = useDataStore((state) => state.setCourse);

  const { toggleSidebar, setOpenMobile } = useSidebar();
  const { course, sem, specialization, user } = useDataStore(
    (state) => state,
  );

  const activePageTitle = useMemo(() => {
    const currentLink = navLinks.find(
      (link) => link.href !== "/" && pathname.startsWith(link.href),
    );
    return currentLink?.title || (pathname === "/" ? "Study Materials" : "PU Vault");
  }, [pathname]);

  useEffect(() => {
    setOpenMobile(false);
  }, [pathname, setOpenMobile]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hostname === "localhost") return;

    const message = `
👀 <b>New Page View Alert!</b>

🌐 <b>Page:</b> ${pathname}
👤 <b>Name:</b> ${user?.name || "Anonymous"}
🪪 <b>Enrollment No.:</b> ${user?.enrollment || "-"}
🎓 <b>Course:</b> ${course}
📘 <b>Semester:</b> ${sem}
🧠 <b>Specialization:</b> ${specialization}
🕒 <b>Time:</b> ${new Date().toLocaleString()}
`;

    sendBotMessage({
      chatId: telegramBotChatIds.puVaultVisitorsChannel,
      message,
    });
  }, [pathname, course, sem, specialization, user]);

  useLayoutEffect(() => {
    if (courseParam && ["mca", "mscit"].includes(courseParam)) {
      setCourse(courseParam);
    }
  }, [courseParam, setCourse]);

  return (
    <header className="fixed top-0 right-0 left-0 md:left-64 z-[40] h-16 bg-white/60 dark:bg-zinc-950/60 backdrop-blur-2xl backdrop-saturate-180 border-b border-white/50 dark:border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="flex items-center justify-between h-full w-full max-w-6xl mx-auto gap-4">
        {/* Left: Mobile branding & page title */}
        <div className="flex items-center gap-3">
          <Link href={"/"} className="md:hidden flex items-center gap-2">
            <div className="size-8 rounded-xl overflow-hidden shadow-xs border border-white/60 dark:border-white/[0.1] bg-white/50 dark:bg-white/[0.06] p-0.5 flex items-center justify-center">
              <Image
                src={"/favicon.png"}
                height={28}
                width={28}
                alt="Logo"
                className="size-7 rounded-lg"
              />
            </div>
          </Link>
          <div className="flex flex-col min-w-0">
            <h1 className="font-extrabold text-base sm:text-lg md:text-2xl text-foreground tracking-tight leading-tight truncate max-w-[140px] xs:max-w-[200px] sm:max-w-none">
              {activePageTitle}
            </h1>
            <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
              <span className="uppercase font-bold text-primary px-1.5 py-0.2 rounded-md bg-primary/15 border border-primary/25">
                {course}
              </span>
              <span>•</span>
              <span className="font-medium">Semester {sem}</span>
              {specialization && (
                <>
                  <span>•</span>
                  <span className="uppercase font-semibold text-[11px] px-2 py-0.5 rounded-full bg-white/50 dark:bg-white/[0.08] border border-white/60 dark:border-white/[0.1] text-foreground tracking-wide backdrop-blur-md">
                    {specialization}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Right: Search, Quick settings, Mobile sidebar toggle */}
        <div className="flex items-center gap-2">
          {/* Desktop search bar */}
          <div className="hidden md:block">
            <SearchModal />
          </div>

          {/* Mobile search button */}
          <div className="md:hidden">
            <SearchModal
              hideShortcut
              triggerContent={
                <Button
                  variant="outline"
                  size="icon"
                  className="size-10 rounded-xl border-white/60 dark:border-white/[0.1] bg-white/50 dark:bg-white/[0.06] backdrop-blur-xl"
                >
                  <Search className="size-4 text-muted-foreground" />
                </Button>
              }
            />
          </div>

          {/* Settings shortcut button */}
          <Button
            asChild
            variant="outline"
            size="icon"
            className="size-10 rounded-xl border-white/60 dark:border-white/[0.1] bg-white/50 dark:bg-white/[0.06] backdrop-blur-xl text-muted-foreground hover:text-foreground"
          >
            <Link href="/settings" title="Settings">
              <Settings className="size-4.5" />
            </Link>
          </Button>

          {/* Mobile menu trigger */}
          <div className="md:hidden">
            <Button
              variant="outline"
              size="icon"
              className="size-10 rounded-xl border-white/60 dark:border-white/[0.1] bg-white/50 dark:bg-white/[0.06] backdrop-blur-xl"
              onClick={toggleSidebar}
              aria-label="Toggle navigation"
            >
              <Menu className="size-4.5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
