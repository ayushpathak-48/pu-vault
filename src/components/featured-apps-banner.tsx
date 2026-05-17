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
      className="w-full relative overflow-hidden rounded-xl bg-black border border-white/10 group h-[70px]" 
      ref={emblaRef}
    >
      <div className="flex h-full touch-pan-y">
        {featuredApps.map((app) => (
          <div key={app.id} className="min-w-0 flex-[0_0_100%] h-full relative">
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-between px-4 z-10">
              <div className="flex items-center gap-3 overflow-hidden">
                {app.logoImage && (
                  <div className="relative w-10 h-10 shrink-0 rounded-lg overflow-hidden border border-white/10 bg-zinc-900">
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
                    <h3 className="text-sm md:text-base font-bold text-white truncate">
                      {app.name}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-xs truncate">
                    {app.description}
                  </p>
                </div>
              </div>

              <Button
                asChild
                size="sm"
                className="shrink-0 ml-4 bg-white/10 text-white hover:bg-white/20 rounded-full h-8 text-xs px-4 backdrop-blur-sm border border-white/10 font-semibold"
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
