/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const McqCard = ({
  que,
  index,
  onOptionSelect,
  selectedOptions,
  isSeeSolution,
  isSubmitted,
}: {
  que: any;
  index: number;
  onOptionSelect: any;
  selectedOptions: any;
  isSeeSolution: boolean;
  isSubmitted: boolean;
}) => {
  const [activeTrigger, setActiveTrigger] = useState("");

  return (
    <div className="flex flex-col gap-1 border rounded">
      <div className="w-full bg-slate-200 dark:bg-[#181818] rounded-t p-2 px-4 flex items-center justify-between">
        <div className="text-sm">Question {index + 1} </div>
        {isSubmitted && (
          <div className="font-normal text-xs">
            {!selectedOptions[que.id] && "Unattempted"}
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col gap-4">
        <div className="select-none">
          <div>{que?.title}</div>
        </div>
        <div className="flex flex-col gap-3">
          {que?.options.map((option: string, i: number) => (
            <div
              key={option}
              onClick={() => {
                if (isSubmitted) return;
                onOptionSelect(que, i);
              }}
              className={`flex gap-2 items-center border rounded p-2 cursor-pointer  ${
                isSubmitted
                  ? selectedOptions[que.id] && que.correct_option == i
                    ? "border-green-500"
                    : selectedOptions[que.id] == que.correct_option &&
                      i == que.correct_option
                    ? "border-green-500"
                    : que.correct_option == i && !selectedOptions[que.id]
                    ? "border-2 border-gray-500"
                    : selectedOptions[que.id] == i
                    ? "border-red-500"
                    : ""
                  : selectedOptions[que.id] == i
                  ? "border-primary"
                  : "border-primary/10 hover:border-primary/30"
              }
              `}
            >
              <div className="border rounded-full text-xs size-5 flex items-center justify-center">
                {i == 0 ? "A" : i == 1 ? "B" : i == 2 ? "C" : "D"}
              </div>
              {option}
            </div>
          ))}
        </div>
      </div>
      {isSeeSolution ? (
        <div className="w-full bg-slate-100 dark:bg-[#181818] rounded-b px-4 flex items-center justify-between">
          <Accordion
            onValueChange={(e) => {
              setActiveTrigger(e);
            }}
            type="single"
            collapsible
          >
            <AccordionItem
              value={que.id}
              className={"border-0 hover:no-underline"}
            >
              <AccordionTrigger className="hover:no-underline [&_svg]:hidden">
                <span className="text-sm font-medium text-muted-foreground">
                  {activeTrigger != que.id ? "See Solution" : "Hide Solution"}
                </span>
              </AccordionTrigger>
              <AccordionContent>{que.solution}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default McqCard;
