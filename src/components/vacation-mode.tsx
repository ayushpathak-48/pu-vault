import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

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
      <div className="text-center space-y-3">
        <Button
          variant={"outline"}
          className="flex items-center justify-center gap-1"
          asChild
        >
          <Link
            target="_blank"
            href={`https://chat.whatsapp.com/D88Nxz3agYV7or3fbUR9zc`}
          >
            Join Official Whatsapp group for next updates
            <Image
              src={"/icons/whatsapp.png"}
              alt="Whatsapp"
              height={20}
              width={20}
              className="size-5"
            />{" "}
          </Link>
        </Button>

        <Button asChild>
          <Link href={"https://forms.gle/jByuyrbURZ9xQGvc6"} target="_blank">
            Feedback and suggestions for next sem
          </Link>
        </Button>
      </div>
    </div>
  );
};
