import { cn } from "@/lib/utils";
import { useState } from "react";

const Flashcard = ({ front, back }: { front: string; back: string }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="flex justify-center h-full w-full group items-center">
      <div
        className="relative w-full h-full cursor-pointer "
        onClick={() => setFlipped(!flipped)}
      >
        <div className="flip-card h-full w-full">
          <div
            className={cn("flip-card-inner", flipped && "flip-card-flipped")}
          >
            <div className="flip-card-front h-full w-full bg-gray-50 dark:bg-[#212121] rounded-lg p-4 flex items-center justify-center text-center">
              {front}
            </div>
            <div className="flip-card-back h-full w-full bg-sky-900 rounded-lg text-white flex p-4 items-center justify-center text-center">
              {back}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
