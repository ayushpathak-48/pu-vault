"use client";

import React, { useState } from "react";
import {
  ytVideoCategories,
  ytVideos,
} from "@/lib/constants/sem-2/yt-tutorials.constant";
import {
  Video,
  Play,
  Search,
  ExternalLink,
  Sparkles,
  Globe,
  Tv,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function YouTubeTutorialsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeVideo, setActiveVideo] = useState<{
    title: string;
    videoId: string;
  } | null>(null);

  const filteredVideos = ytVideos.filter((video) => {
    const matchesCategory =
      selectedCategory === "all" ||
      video.categories.includes(selectedCategory);

    const matchesSearch =
      !searchQuery.trim() ||
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.channel?.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-6 space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-red-500/10 via-rose-500/5 to-transparent border border-red-500/20 shadow-xs">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-600 dark:text-red-400 uppercase flex items-center gap-1">
              <Tv className="size-3" /> Curated Video Library
            </span>
          </div>
          <h1 className="text-2xl font-bold text-foreground">
            YouTube Video Tutorials
          </h1>
          <p className="text-xs text-muted-foreground max-w-xl">
            High-yield programming tutorials, complete roadmaps, and conceptual explanations aligned with the Parul University MCA & MScIT curriculum.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            placeholder="Search topic or channel..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-10 rounded-xl bg-background border-border/70 text-xs shadow-xs"
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
              "px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border",
              selectedCategory === cat.key
                ? "bg-primary text-primary-foreground border-primary shadow-xs"
                : "bg-card border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/40",
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Videos Grid */}
      {filteredVideos.length === 0 ? (
        <div className="p-12 text-center rounded-2xl border border-dashed border-border/80 bg-muted/20 space-y-2">
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
            className="rounded-lg text-xs mt-2"
          >
            Reset Filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredVideos.map((video) => (
            <div
              key={video.key}
              className="group flex flex-col rounded-2xl bg-card border border-border/70 overflow-hidden shadow-xs hover:shadow-md hover:border-primary/40 transition-all duration-300"
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
                  <div className="size-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="size-5 fill-white ml-0.5" />
                  </div>
                </div>

                {video.language && (
                  <span className="absolute bottom-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded bg-black/80 text-white backdrop-blur-xs">
                    {video.language}
                  </span>
                )}
              </div>

              {/* Video Info */}
              <div className="p-4 flex flex-col flex-1 justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <span className="font-semibold text-primary truncate">
                      {video.channel || "YouTube"}
                    </span>
                  </div>
                  <h3
                    className="font-bold text-sm text-foreground line-clamp-2 group-hover:text-primary transition-colors cursor-pointer"
                    onClick={() =>
                      setActiveVideo({
                        title: video.title,
                        videoId: video.videoId,
                      })
                    }
                  >
                    {video.title}
                  </h3>
                </div>

                <div className="pt-2 border-t border-border/40 flex items-center justify-between">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() =>
                      setActiveVideo({
                        title: video.title,
                        videoId: video.videoId,
                      })
                    }
                    className="rounded-lg h-8 text-xs font-semibold gap-1.5 text-primary hover:text-primary/80"
                  >
                    <Play className="size-3 fill-primary" /> Watch Video
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant="ghost"
                    className="rounded-lg size-8 p-0 text-muted-foreground hover:text-foreground"
                  >
                    <a
                      href={video.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open on YouTube"
                    >
                      <ExternalLink className="size-3.5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Embedded Video Dialog Player */}
      <Dialog
        open={Boolean(activeVideo)}
        onOpenChange={(open) => !open && setActiveVideo(null)}
      >
        <DialogContent className="max-w-3xl w-[95vw] p-2 md:p-4 rounded-2xl bg-black border-zinc-800 text-white">
          <DialogHeader className="px-2 pt-1 pb-2">
            <DialogTitle className="text-sm md:text-base font-bold truncate">
              {activeVideo?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black">
            {activeVideo && (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.videoId}?autoplay=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-none"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
