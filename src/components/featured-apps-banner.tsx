"use client";

import { useApps } from "@/hooks/use-apps";
import { resolveAppIcon } from "@/lib/services/apps.service";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowUpRight, Sparkles, Smartphone } from "lucide-react";
import { Badge } from "./ui/badge";

export function FeaturedAppsBanner() {
  const { apps, loading } = useApps();
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

  if (!apps || apps.length === 0) return null;

  return (
    <div
      className="w-full relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/10 via-card to-primary/5 border border-primary/20 shadow-xs group h-[74px]"
      ref={emblaRef}
    >
      <div className="flex h-full touch-pan-y">
        {apps.map((app) => {
          const iconSrc = resolveAppIcon(app.iconUrl);
          const isLive = app.status === "production" || app.status === "published";

          return (
            <div key={app.id} className="min-w-0 flex-[0_0_100%] h-full relative">
              <div className="absolute inset-0 flex items-center justify-between px-3.5 md:px-5 z-10">
                <div className="flex items-center gap-3 overflow-hidden">
                  {/* Icon */}
                  <div className="relative size-11 shrink-0 rounded-xl overflow-hidden border border-border/80 bg-background shadow-xs flex items-center justify-center">
                    {iconSrc ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={iconSrc}
                        alt={`${app.appName} logo`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <Smartphone className="size-5 text-primary" />
                    )}
                  </div>

                  {/* Info */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm md:text-base font-bold text-foreground truncate">
                        {app.appName}
                      </h3>
                      <Badge
                        variant="secondary"
                        className={`text-[10px] px-1.5 py-0 rounded font-semibold ${
                          isLive
                            ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
                            : "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/20"
                        }`}
                      >
                        {isLive ? "Play Store" : "Coming Soon"}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-xs truncate max-w-md">
                      {app.tagline || app.description}
                    </p>
                  </div>
                </div>

                {/* Action CTA */}
                <Button
                  asChild
                  size="sm"
                  className="shrink-0 ml-3 rounded-xl h-8 text-xs px-3.5 font-semibold gap-1 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Link
                    href={app.playStoreUrl || "/featured-apps"}
                    target={app.playStoreUrl ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    <span>{isLive ? "Get App" : "View"}</span>
                    <ArrowUpRight className="size-3.5" />
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
