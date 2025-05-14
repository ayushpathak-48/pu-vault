import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export const VacationMode = () => {
  return (
    <div className="flex h-screen w-screen text-center items-center justify-center flex-col gap-5 p-3">
      <div className="text-xl lg:text-3xl font-bold">
        Semester khatam aur kitna padhoge.
      </div>
      <div>Milte hai NPTEL ke result ke baad </div>
      <div className="text-lg">
        tab tak <span className="text-primary">Mini Vacation</span> Enjoy karo
      </div>
      <div className="text-center space-y-1">
        <div>yaha tak aa hi gye ho to</div>
        <Button asChild>
          <Link href={"https://forms.gle/jByuyrbURZ9xQGvc6"} target="_blank">
            Feedback
          </Link>
        </Button>
        <div>Dete jaao</div>
      </div>
    </div>
  );
};
