"use client";

import { CustomErrorPage } from "@/components/custom-error-page";
import { useDataGetters } from "@/hooks/use-data-getters";
import { ArrowRight, ListTodo, BookOpen, Layers } from "lucide-react";
import { useDataStore } from "@/stores/data.store";
import Link from "next/link";
import React from "react";

const McqsPage = () => {
  const { getMCQs } = useDataGetters();
  const mcqs = getMCQs();
  const course = useDataStore((state) => state.course);
  const specialization = useDataStore((state) => state.specialization);
  const sem = useDataStore((state) => state.sem);

  if (!mcqs || mcqs.length === 0) {
    return <CustomErrorPage errorText="MCQs not available for this semester yet" />;
  }

  const activeSubjects = mcqs.filter(
    (subject) =>
      (!subject?.specialization || specialization === subject?.specialization) &&
      (!subject?.course || subject?.course === course),
  );

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-6 space-y-6">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 via-cyan-500/5 to-transparent border border-blue-500/20 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-600 dark:text-blue-400 uppercase flex items-center gap-1">
              <ListTodo className="size-3" /> Online Mock Quiz
            </span>
            <span className="text-xs text-muted-foreground">
              Semester {sem}
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            MCQ Practice Questions
          </h1>
          <p className="text-xs md:text-sm text-muted-foreground max-w-lg leading-relaxed">
            Unit-wise multiple choice questions with instant answer evaluation, score statistics, and comprehensive topic reviews.
          </p>
        </div>
      </div>

      {/* Subject Quizzes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {activeSubjects.map((subject) => {
          const totalQuestions = subject.units.reduce(
            (acc, u) => acc + (u.all_mcqs?.length || 0),
            0,
          );
          return (
            <Link
              key={subject.key}
              href={`/mcqs/${subject.key}/${subject.units[0].key}`}
            >
              <div className="p-4 rounded-2xl bg-card border border-border/70 hover:border-blue-500/40 shadow-xs hover:shadow-md transition-all flex items-center justify-between gap-4 group">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="size-11 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Layers className="size-5" />
                  </div>
                  <div className="min-w-0 space-y-0.5">
                    <h2 className="text-sm md:text-base font-bold text-foreground group-hover:text-primary transition-colors truncate">
                      {subject.subject_name}
                    </h2>
                    <span className="text-xs text-muted-foreground">
                      {subject.units.length} Units • {totalQuestions} Questions
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

export default McqsPage;
