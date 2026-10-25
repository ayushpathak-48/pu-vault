"use client";

import { CustomErrorPage } from "@/components/custom-error-page";
import { useDataGetters } from "@/hooks/use-data-getters";
import { useDataStore } from "@/stores/data.store";
import { ArrowRight, SquareAsterisk, Layers } from "lucide-react";
import Link from "next/link";
import React from "react";

const FlashCardsPage = () => {
  const specialization = useDataStore((state) => state.specialization);
  const course = useDataStore((state) => state.course);
  const sem = useDataStore((state) => state.sem);

  const { getFlashCards } = useDataGetters();
  const flashCards = getFlashCards();

  if (!flashCards || flashCards.length === 0) {
    return <CustomErrorPage errorText="Flashcards not available for this semester yet" />;
  }

  const activeSubjects = flashCards.filter(
    (subject) =>
      (!subject?.specialization || specialization === subject?.specialization) &&
      (!subject?.course || subject?.course === course),
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-6 md:space-y-8">
      {/* Header Glass Banner */}
      <div className="p-6 md:p-7 rounded-3xl bg-white/60 dark:bg-zinc-900/40 backdrop-blur-2xl backdrop-saturate-180 border border-white/60 dark:border-white/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.85)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/20 uppercase flex items-center gap-1 backdrop-blur-md">
              <SquareAsterisk className="size-3" /> Quick Revision
            </span>
            <span className="text-xs text-muted-foreground font-medium">
              Semester {sem}
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
            Subject Flashcards
          </h1>
          <p className="text-xs md:text-sm text-muted-foreground max-w-lg leading-relaxed">
            Fast spaced-repetition cards to memorize key definitions, syntax rules, algorithms, and viva concepts before exams.
          </p>
        </div>
      </div>

      {/* Subjects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {activeSubjects.map((subject) => {
          const totalCards = subject.units.reduce(
            (acc, u) => acc + (u.cards?.length || 0),
            0,
          );
          return (
            <Link
              key={subject.key}
              href={`/flash-cards/${subject.key}/${subject.units[0].key}`}
            >
              <div className="p-5 rounded-3xl bg-white/65 dark:bg-zinc-900/40 backdrop-blur-xl backdrop-saturate-150 border border-white/60 dark:border-white/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.7)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-primary/50 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-between gap-4 group">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="size-12 rounded-2xl bg-primary/10 text-primary border border-primary/20 backdrop-blur-md flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Layers className="size-5" />
                  </div>
                  <div className="min-w-0 space-y-0.5">
                    <h2 className="text-base font-bold text-foreground group-hover:text-primary transition-colors truncate">
                      {subject.subject_name}
                    </h2>
                    <span className="text-xs text-muted-foreground font-medium">
                      {subject.units.length} Units • {totalCards} Cards
                    </span>
                  </div>
                </div>

                <ArrowRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FlashCardsPage;
