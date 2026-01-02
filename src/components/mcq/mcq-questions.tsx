/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import McqCard from "./mcq-card";
import StatisticsContainer from "./mcq-statistics-container";
import { Button } from "../ui/button";

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
    if (type == "single")
      setSelectedOptions({ ...selectedOptions, [que.id]: i });
    else if (type == "multiple") {
      const prevSelectedOptions = selectedOptions[que.id] || [];
      let updatedOptions = [];
      if (prevSelectedOptions.includes(i)) {
        updatedOptions = prevSelectedOptions.filter((option: any) => option !== i);
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
        return que.correct_option.every((opt: any) => selectedOpts.includes(opt));
      }
      return que.correct_option == selectedOptions[que.id];
    });
    const incorrectOptions =
      allMcqs?.length - correctOptions?.length - unAttempted;
    const statsData = {
      total_ques: allMcqs?.length,
      correct_options: correctOptions?.length,
      incorrect_options: incorrectOptions,
      unAttempted: unAttempted,
    };
    setStats(statsData);
    setIsSubmitted(true);
    document
      .getElementById("top-of-page")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full flex flex-col gap-8" id="top-of-page">
      {isSubmitted ? <StatisticsContainer stats={stats} /> : <></>}
      <div className="w-full flex flex-col gap-2">
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
      <div className="w-full flex items-center justify-between p-2 px-5 bg-white dark:bg-gray-800">
        {/* <div>Practice Questions</div> */}
        <div className="flex items-center justify-center gap-2">
          {!isSubmitted ? (
            <Button onClick={handleSubmitQuiz} size={"sm"}>
              Submit
            </Button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllMcqQuestions;
