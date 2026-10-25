"use client";

import { useApps } from "@/hooks/use-apps";
import { resolveAppIcon } from "@/lib/services/apps.service";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowUpRight, Smartphone } from "lucide-react";
import { Badge } from "./ui/badge";

export function FeaturedAppsBanner() {
  const { apps } = useApps();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const interval = setInterval(() => {
      scrollNext();
    }, 5500);
    return () => clearInterval(interval);
  }, [scrollNext]);

  // STRICT: Only show apps that are currently live on Google Play Store (exclude coming soon)
  const playStoreApps = (apps || []).filter(
    (app) =>
      (app.status === "production" || app.status === "published") &&
      Boolean(app.playStoreUrl),
  );

  if (playStoreApps.length === 0) return null;

  return (
    <div
      className="w-full relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white/60 dark:bg-zinc-900/40 backdrop-blur-2xl backdrop-saturate-180 border border-white/60 dark:border-white/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.85)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)] group h-[4.5rem] sm:h-20"
      ref={emblaRef}
    >
      <div className="flex h-full touch-pan-y">
        {playStoreApps.map((app) => {
          const iconSrc = resolveAppIcon(app.iconUrl);
          const isLive = app.status === "production" || app.status === "published";

          return (
            <div key={app.id} className="min-w-0 flex-[0_0_100%] h-full relative">
              <div className="absolute inset-0 flex items-center justify-between px-3 sm:px-4 md:px-6 z-10 gap-2">
                <div className="flex items-center gap-2.5 sm:gap-3.5 overflow-hidden min-w-0">
                  {/* Icon */}
                  <div className="relative size-10 sm:size-12 shrink-0 rounded-xl sm:rounded-2xl overflow-hidden border border-white/60 dark:border-white/[0.1] bg-white/70 dark:bg-black/40 backdrop-blur-md shadow-2xs flex items-center justify-center p-0.5">
                    {iconSrc ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={iconSrc}
                        alt={`${app.appName} logo`}
                        className="w-full h-full object-cover rounded-lg sm:rounded-xl"
                        loading="lazy"
                      />
                    ) : (
                      <Smartphone className="size-4 sm:size-5 text-primary" />
                    )}
                  </div>

                  {/* Info */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <h3 className="text-xs sm:text-base font-extrabold text-foreground tracking-tight truncate">
                        {app.appName}
                      </h3>
                      <Badge
                        variant="secondary"
                        className="hidden xs:inline-flex text-[10px] px-1.5 py-0.2 sm:px-2 sm:py-0.5 rounded-full font-bold backdrop-blur-md bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25 shrink-0"
                      >
                        Play Store
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-[11px] sm:text-xs truncate max-w-md">
                      {app.tagline || app.description}
                    </p>
                  </div>
                </div>

                {/* Action CTA */}
                <Button
                  asChild
                  size="sm"
                  className="shrink-0 ml-1.5 sm:ml-3 rounded-lg sm:rounded-xl h-8 sm:h-10 text-[11px] sm:text-xs px-2.5 sm:px-4 font-bold gap-1 sm:gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90 shadow-xs"
                >
                  <Link
                    href={app.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Get App</span>
                    <ArrowUpRight className="size-3 sm:size-3.5" />
                  </Link>
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
