import { featuredApps } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ShieldCheck } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Featured Apps | Pu Vault",
  description: "Discover our hand-picked collection of applications.",
};

export default function FeaturedAppsPage() {
  return (
    <div className="w-full min-h-[calc(100vh-5rem)] bg-background pb-20">
      {/* Header Area */}
      <div className="pt-10 pb-6 px-5 md:px-8 max-w-6xl mx-auto">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-4 transition-colors">
          <ChevronLeft className="w-4 h-4 mr-1" /> Back to Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-foreground">
          Featured Apps
        </h1>
        <p className="text-muted-foreground text-base max-w-2xl">
          Discover elegant solutions designed to boost your productivity, organize your digital life, and build better habits.
        </p>
      </div>

      {/* Grid Area */}
      <div className="px-5 md:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredApps.map((app) => (
            <div
              key={app.id}
              className="flex flex-col group bg-card border border-border/60 shadow-sm rounded-2xl overflow-hidden hover:shadow-md hover:border-border transition-all duration-300"
            >
              {/* Hero Image */}
              <Link href={app.href} target="_blank" className="relative w-full aspect-[16/9] bg-muted overflow-hidden block">
                {app.heroImage && (
                  <Image
                    src={app.heroImage}
                    alt={`${app.name} showcase`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              {/* Content Box */}
              <div className="p-4 md:p-5 flex flex-col flex-1 relative">
                {/* Logo Overlapping */}
                <div className="absolute -top-7 left-5">
                  <div className="relative w-14 h-14 shrink-0 rounded-[14px] overflow-hidden shadow-sm border-2 border-card bg-zinc-100 dark:bg-zinc-900">
                    {app.logoImage && (
                      <Image
                        src={app.logoImage}
                        alt={`${app.name} logo`}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                </div>

                <div className="mt-8 flex flex-col h-full">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex flex-col min-w-0">
                      <h2 className="text-lg font-bold tracking-tight text-foreground truncate" title={app.name}>
                        {app.name}
                      </h2>
                      <div className="flex items-center gap-1.5 mt-1 text-[11px] font-semibold text-muted-foreground">
                        <span className="flex items-center gap-0.5 text-emerald-600 dark:text-emerald-500">
                          <ShieldCheck className="w-3 h-3" /> Verified Safe
                        </span>
                      </div>
                    </div>
                    <Button
                      asChild
                      size="sm"
                      className="rounded-full px-5 font-bold shadow-sm shrink-0 bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <Link href={app.href} target="_blank">
                        Get
                      </Link>
                    </Button>
                  </div>

                  <p className="text-[13px] font-medium leading-relaxed text-muted-foreground mt-2 line-clamp-2">
                    {app.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
