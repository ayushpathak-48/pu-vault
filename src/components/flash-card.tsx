"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { RotateCw, HelpCircle, CheckCircle } from "lucide-react";

const Flashcard = ({ front, back }: { front: string; back: string }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex justify-center h-full w-full items-center select-none">
      <div
        className="relative w-full h-full cursor-pointer min-h-[320px] max-w-md mx-auto"
        onClick={() => setFlipped(!flipped)}
      >
        <div className="flip-card h-full w-full">
          <div
            className={cn("flip-card-inner h-full w-full", flipped && "flip-card-flipped")}
          >
            {/* Front Side: Question */}
            <div className="flip-card-front h-full w-full bg-card border-2 border-border/80 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-md hover:border-primary/50 transition-colors">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-bold text-primary flex items-center gap-1 uppercase tracking-wider">
                  <HelpCircle className="size-3.5" /> Question
                </span>
                <span className="flex items-center gap-1 text-[11px] text-muted-foreground/80">
                  <RotateCw className="size-3" /> Tap to reveal answer
                </span>
              </div>

              <div className="my-auto py-4 text-center">
                <p className="text-base md:text-lg font-bold text-foreground leading-relaxed">
                  {front}
                </p>
              </div>

              <div className="text-center text-[11px] text-muted-foreground">
                PU Vault Revision Cards
              </div>
            </div>

            {/* Back Side: Answer */}
            <div className="flip-card-back h-full w-full bg-primary text-primary-foreground rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-xl">
              <div className="flex items-center justify-between text-xs text-primary-foreground/80">
                <span className="font-bold flex items-center gap-1 uppercase tracking-wider">
                  <CheckCircle className="size-3.5" /> Solution
                </span>
                <span className="flex items-center gap-1 text-[11px]">
                  <RotateCw className="size-3" /> Tap to flip back
                </span>
              </div>

              <div className="my-auto py-4 text-center overflow-y-auto max-h-[220px]">
                <p className="text-base md:text-lg font-semibold leading-relaxed">
                  {back}
                </p>
              </div>

              <div className="text-center text-[11px] text-primary-foreground/70">
                Mastered this concept? Swipe to next card.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
