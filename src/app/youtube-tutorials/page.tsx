"use client";

import React, { useState } from "react";
import {
  ytVideoCategories,
  ytVideos,
} from "@/lib/constants/sem-2/yt-tutorials.constant";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Search,
  Video,
  Play,
  ExternalLink,
  Tv,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface YtVideoItem {
  key: string;
  title: string;
  link: string;
  videoId: string;
  categories: string[];
  channel: string;
  language: string;
}

export default function YouTubeTutorialsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeVideo, setActiveVideo] = useState<{
    title: string;
    videoId: string;
  } | null>(null);

  const filteredVideos = (ytVideos as YtVideoItem[]).filter((video) => {
    // Category match
    if (
      selectedCategory !== "all" &&
      !video.categories?.includes(selectedCategory)
    ) {
      return false;
    }

    // Search query match
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      const titleMatch = video.title.toLowerCase().includes(q);
      const channelMatch = (video.channel || "").toLowerCase().includes(q);
      return titleMatch || channelMatch;
    }

    return true;
  });

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-6 space-y-6">
      {/* Header Glass Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 md:p-7 rounded-3xl bg-white/60 dark:bg-zinc-900/40 backdrop-blur-2xl backdrop-saturate-180 border border-white/60 dark:border-white/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.85)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)]">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-600 dark:text-red-400 border border-red-500/25 uppercase flex items-center gap-1 backdrop-blur-md">
              <Tv className="size-3" /> Curated Video Library
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
            YouTube Video Tutorials
          </h1>
          <p className="text-xs md:text-sm text-muted-foreground max-w-xl leading-relaxed">
            High-yield programming tutorials, complete roadmaps, and conceptual explanations aligned with the Parul University MCA &amp; MScIT curriculum.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            placeholder="Search topic or channel..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-10 rounded-xl bg-white/50 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/60 dark:border-white/[0.1] text-xs shadow-xs"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center overflow-x-auto gap-2 pb-1 scrollbar-none">
        {ytVideoCategories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key)}
            className={cn(
              "px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border backdrop-blur-md",
              selectedCategory === cat.key
                ? "bg-primary text-primary-foreground border-primary/40 shadow-xs"
                : "bg-white/50 dark:bg-white/[0.06] border-white/60 dark:border-white/[0.1] text-muted-foreground hover:text-foreground hover:bg-white/70",
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Videos Grid */}
      {filteredVideos.length === 0 ? (
        <div className="p-12 text-center rounded-3xl border border-dashed border-white/60 dark:border-white/[0.1] bg-white/40 dark:bg-zinc-900/30 backdrop-blur-md space-y-2">
          <Video className="size-8 mx-auto text-muted-foreground" />
          <h3 className="font-semibold text-sm">No tutorials found</h3>
          <p className="text-xs text-muted-foreground">
            Try a different search query or select &quot;All Tutorials&quot;.
          </p>
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="rounded-xl text-xs mt-2"
          >
            Reset Filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredVideos.map((video) => (
            <div
              key={video.key}
              className="group flex flex-col rounded-3xl bg-white/65 dark:bg-zinc-900/40 backdrop-blur-xl backdrop-saturate-150 border border-white/60 dark:border-white/[0.08] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.7)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-xl hover:-translate-y-1 hover:border-primary/40 transition-all duration-300"
            >
              {/* Thumbnail Container */}
              <div
                onClick={() =>
                  setActiveVideo({ title: video.title, videoId: video.videoId })
                }
                className="relative aspect-video w-full bg-black/90 overflow-hidden cursor-pointer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="size-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform backdrop-blur-xs">
                    <Play className="size-5 fill-white ml-0.5" />
                  </div>
                </div>

                {video.language && (
                  <span className="absolute bottom-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/80 text-white backdrop-blur-md border border-white/20">
                    {video.language}
                  </span>
                )}
              </div>

              {/* Video Info */}
              <div className="p-5 flex flex-col flex-1 justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                    <span className="font-semibold text-primary truncate">
                      {video.channel}
                    </span>
                    <span className="capitalize px-2 py-0.5 rounded-full bg-white/50 dark:bg-white/[0.06] border border-white/50 dark:border-white/[0.08] backdrop-blur-md">
                      {video.categories?.[0] || "Tutorial"}
                    </span>
                  </div>
                  <h3
                    onClick={() =>
                      setActiveVideo({ title: video.title, videoId: video.videoId })
                    }
                    className="font-bold text-sm text-foreground line-clamp-2 cursor-pointer group-hover:text-primary transition-colors leading-snug"
                  >
                    {video.title}
                  </h3>
                </div>

                {/* Bottom actions */}
                <div className="pt-2 border-t border-white/40 dark:border-white/[0.06] flex items-center justify-between">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() =>
                      setActiveVideo({ title: video.title, videoId: video.videoId })
                    }
                    className="h-8 text-xs font-semibold px-2.5 rounded-xl gap-1"
                  >
                    <Play className="size-3 text-red-500 fill-red-500" />
                    Watch Video
                  </Button>

                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                    className="h-8 text-xs px-2.5 rounded-xl gap-1 text-muted-foreground hover:text-foreground border-white/60 dark:border-white/[0.1] bg-white/50 dark:bg-white/[0.04]"
                  >
                    <a
                      href={`https://www.youtube.com/watch?v=${video.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>YouTube</span>
                      <ExternalLink className="size-3" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Embedded Video Player Dialog */}
      <Dialog
        open={Boolean(activeVideo)}
        onOpenChange={(isOpen) => !isOpen && setActiveVideo(null)}
      >
        <DialogContent className="max-w-4xl w-[95vw] p-0 overflow-hidden rounded-3xl border border-white/60 dark:border-white/[0.1] bg-black/90 backdrop-blur-2xl">
          <DialogHeader className="p-4 bg-white/10 dark:bg-zinc-950/40 backdrop-blur-md border-b border-white/10">
            <DialogTitle className="text-sm md:text-base font-bold text-white truncate pr-8">
              {activeVideo?.title}
            </DialogTitle>
          </DialogHeader>

          <div className="relative aspect-video w-full bg-black">
            {activeVideo && (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.videoId}?autoplay=1`}
                title={activeVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
