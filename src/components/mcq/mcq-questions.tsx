/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import McqCard from "./mcq-card";
import StatisticsContainer from "./mcq-statistics-container";
import { Button } from "../ui/button";
import { RotateCcw, Send, CheckCircle2 } from "lucide-react";

const AllMcqQuestions = ({ allMcqs }: { allMcqs: any }) => {
  const [selectedOptions, setSelectedOptions] = useState<any>({});
  const [stats, setStats] = useState({
    total_ques: 0,
    correct_options: 0,
    incorrect_options: 0,
    unAttempted: 0,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onOptionSelect = (que: any, i: any, type = "single") => {
    if (type === "single") {
      setSelectedOptions({ ...selectedOptions, [que.id]: i });
    } else if (type === "multiple") {
      const prevSelectedOptions = selectedOptions[que.id] || [];
      let updatedOptions = [];
      if (prevSelectedOptions.includes(i)) {
        updatedOptions = prevSelectedOptions.filter(
          (option: any) => option !== i,
        );
      } else {
        updatedOptions = [...prevSelectedOptions, i];
      }
      setSelectedOptions({ ...selectedOptions, [que.id]: updatedOptions });
    }
  };

  const handleSubmitQuiz = () => {
    const unAttempted = allMcqs.length - Object.keys(selectedOptions).length;
    const correctOptions = allMcqs.filter((que: any) => {
      if (Array.isArray(que.correct_option)) {
        const selectedOpts = selectedOptions[que.id] || [];
        if (selectedOpts.length !== que.correct_option.length) return false;
        return que.correct_option.every((opt: any) =>
          selectedOpts.includes(opt),
        );
      }
      return que.correct_option === selectedOptions[que.id];
    });
    const incorrectOptions =
      allMcqs.length - correctOptions.length - unAttempted;
    const statsData = {
      total_ques: allMcqs.length,
      correct_options: correctOptions.length,
      incorrect_options: incorrectOptions,
      unAttempted: unAttempted,
    };
    setStats(statsData);
    setIsSubmitted(true);
    document
      .getElementById("top-of-page")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleRetakeQuiz = () => {
    setSelectedOptions({});
    setIsSubmitted(false);
    document
      .getElementById("top-of-page")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full flex flex-col gap-6" id="top-of-page">
      {isSubmitted && <StatisticsContainer stats={stats} />}

      <div className="w-full flex flex-col gap-4">
        {allMcqs.map((que: any, index: number) => (
          <McqCard
            key={que.id}
            que={que}
            index={index}
            isSeeSolution={isSubmitted}
            isSubmitted={isSubmitted}
            onOptionSelect={onOptionSelect}
            selectedOptions={selectedOptions}
          />
        ))}
      </div>

      {/* Sticky Action Footer */}
      <div className="sticky bottom-16 md:bottom-4 z-20 w-full p-4 rounded-2xl bg-card/90 backdrop-blur-md border border-border/80 shadow-lg flex items-center justify-between gap-4">
        <div className="text-xs text-muted-foreground font-semibold">
          {Object.keys(selectedOptions).length} of {allMcqs.length} answered
        </div>

        <div className="flex items-center gap-2">
          {!isSubmitted ? (
            <Button
              onClick={handleSubmitQuiz}
              className="rounded-xl font-bold shadow-sm gap-2"
            >
              <Send className="size-4" />
              Submit Quiz
            </Button>
          ) : (
            <Button
              onClick={handleRetakeQuiz}
              variant="outline"
              className="rounded-xl font-bold gap-2"
            >
              <RotateCcw className="size-4" />
              Retake Quiz
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllMcqQuestions;
