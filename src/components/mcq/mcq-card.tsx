/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Checkbox } from "../ui/checkbox";

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
            {!selectedOptions[que.id] && selectedOptions[que.id] != 0 && "Unattempted"}
            {selectedOptions[que.id] == que.correct_option && "Correct Answer"}
            {Array.isArray(que.correct_option)
              ? selectedOptions[que.id]?.length == que.correct_option.length &&
                selectedOptions[que.id]?.some((ele: any) => que.correct_option.includes(ele))
                ? "Correct Answer"
                : "Wrong Answer"
              : selectedOptions[que.id] != que.correct_option
                ? "Wrong Answer"
                : ""}
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
                onOptionSelect(que, i, Array.isArray(que.correct_option) ? "multiple" : "single");
              }}
              //   className={`flex gap-2 items-center border rounded p-2 cursor-pointer  ${isSubmitted
              //     ? selectedOptions[que.id] && que.correct_option == i
              //       ? "border-green-500"
              //       : selectedOptions[que.id] == que.correct_option &&
              //         i == que.correct_option
              //         ? "border-green-500"
              //         : que.correct_option == i && !selectedOptions[que.id]
              //           ? "border-2 border-gray-500"
              //           : selectedOptions[que.id] == i
              //             ? "border-red-500"
              //             : ""
              //     : (Array.isArray(que.correct_option) ? selectedOptions[que.id]?.includes(i) : selectedOptions[que.id] == i)
              //       ? "border-primary"
              //       : "border-primary/10 hover:border-primary/30"
              //     }
              // `}


              className={`flex gap-2 items-center border rounded p-2 cursor-pointer ${isSubmitted
                  ? selectedOptions[que.id] !== undefined
                    ? selectedOptions[que.id] === i
                      ? i === que.correct_option
                        ? "border-green-500" // ✅ Correct option selected
                        : "border-red-500"   // ❌ Wrong option selected
                      : i === que.correct_option
                        ? "border-green-500" // ✅ Show correct one even if not chosen
                        : ""
                    : i === que.correct_option
                      ? "border-gray-500"   // ⚪ No selection — highlight correct answer
                      : "border-primary/10"
                  : selectedOptions[que.id] === i
                    ? "border-primary"      // ✳️ Selected (before submission)
                    : "border-primary/10 hover:border-primary/30"
                }`}

            >
              {Array.isArray(que.correct_option) && (<Checkbox id="terms" checked={selectedOptions[que.id]?.includes(i)} />)}
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
