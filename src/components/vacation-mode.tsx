import React from "react";
import { Button } from "./ui/button";

export const VacationMode = () => {
  return (
    <div className="flex h-screen w-screen text-center items-center justify-center flex-col gap-5 p-3">
      <div className="text-xl lg:text-3xl font-bold">
        Semester Khatam aur kitna padhoge.
      </div>
      <div>Milte hai NPTEL ke result ke baad </div>
      <div className="text-lg">
        tab tak <span className="text-primary">Mini Vacation</span> Enjoy karo
      </div>
      <div className="text-center space-y-1">
        <div>yaha tak aa hi gye ho to</div>
        <Button>Feedback </Button>
        <div>Dete jaao</div>
      </div>
    </div>
  );
};
