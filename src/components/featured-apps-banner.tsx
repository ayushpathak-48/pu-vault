"use client";

import { featuredApps } from "@/lib/constants";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import useEmblaCarousel from "embla-carousel-react";

export function FeaturedAppsBanner() {
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
    }, 5000);
    return () => clearInterval(interval);
  }, [scrollNext]);

  if (!featuredApps || featuredApps.length === 0) return null;

  return (
    <div 
      className="w-full relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-50/80 via-white to-cyan-50/80 dark:from-zinc-900 dark:via-zinc-950 dark:to-black border shadow-sm group h-[70px]" 
      ref={emblaRef}
    >
      <div className="flex h-full touch-pan-y">
        {featuredApps.map((app) => (
          <div key={app.id} className="min-w-0 flex-[0_0_100%] h-full relative">
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-between px-4 z-10">
              <div className="flex items-center gap-3 overflow-hidden">
                {app.logoImage && (
                  <div className="relative w-10 h-10 shrink-0 rounded-lg overflow-hidden border bg-muted/30">
                    <Image
                      src={app.logoImage}
                      alt={`${app.name} logo`}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm md:text-base font-bold text-foreground truncate">
                      {app.name}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-xs truncate">
                    {app.description}
                  </p>
                </div>
              </div>

              <Button
                asChild
                size="sm"
                variant="secondary"
                className="shrink-0 ml-4 rounded-full h-8 text-xs px-4 font-semibold"
              >
                <Link href={app.href} target="_blank">
                  View
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
