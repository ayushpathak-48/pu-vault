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
  const divisionParam = searchParams.get("div");

  const setCourse = useDataStore((state) => state.setCourse);
  const setDivision = useDataStore((state) => state.setDivision);

  const { toggleSidebar, setOpenMobile } = useSidebar();
  const { course, division, sem, specialization, user } = useDataStore(
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
🏫 <b>Division:</b> ${division}
📘 <b>Semester:</b> ${sem}
🧠 <b>Specialization:</b> ${specialization}
🕒 <b>Time:</b> ${new Date().toLocaleString()}
`;

    sendBotMessage({
      chatId: telegramBotChatIds.puVaultVisitorsChannel,
      message,
    });
  }, [pathname, course, division, sem, specialization, user]);

  useLayoutEffect(() => {
    if (courseParam && ["mca", "mscit"].includes(courseParam)) {
      setCourse(courseParam);
    }
    if (
      divisionParam &&
      ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"].includes(
        divisionParam,
      )
    ) {
      setDivision(divisionParam);
    }
  }, [courseParam, divisionParam, setCourse, setDivision]);

  return (
    <header className="fixed top-0 z-[40] md:w-[calc(100%-16rem)] ml-auto w-full h-16 lg:h-20 bg-white/60 dark:bg-zinc-950/60 backdrop-blur-2xl backdrop-saturate-180 border-b border-white/50 dark:border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] px-4 md:px-8 transition-colors">
      <div className="flex items-center justify-between h-full w-full gap-4">
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
          <div className="flex flex-col">
            <h1 className="font-extrabold text-lg md:text-2xl text-foreground tracking-tight leading-tight">
              {activePageTitle}
            </h1>
            <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
              <span className="uppercase font-bold text-primary px-1.5 py-0.2 rounded-md bg-primary/10 border border-primary/20">
                {course}
              </span>
              <span>•</span>
              <span className="font-medium">Semester {sem}</span>
              {division && (
                <>
                  <span>•</span>
                  <span className="font-medium">Div {division.replace("div_", "").toUpperCase()}</span>
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
                  className="size-9 rounded-xl border-white/60 dark:border-white/[0.1] bg-white/50 dark:bg-white/[0.06] backdrop-blur-xl"
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
            className="size-9 rounded-xl border-white/60 dark:border-white/[0.1] bg-white/50 dark:bg-white/[0.06] backdrop-blur-xl text-muted-foreground hover:text-foreground"
          >
            <Link href="/settings" title="Settings">
              <Settings className="size-4" />
            </Link>
          </Button>

          {/* Mobile menu trigger */}
          <div className="md:hidden">
            <Button
              variant="outline"
              size="icon"
              className="size-9 rounded-xl border-white/60 dark:border-white/[0.1] bg-white/50 dark:bg-white/[0.06] backdrop-blur-xl"
              onClick={toggleSidebar}
              aria-label="Toggle navigation"
            >
              <Menu className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
