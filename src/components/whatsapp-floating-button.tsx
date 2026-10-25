import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export const WhatsappFloatingButton = () => {
  return (
    <div className="fixed bottom-20 right-5 lg:bottom-10 lg:right-10 z-40">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://chat.whatsapp.com/D88Nxz3agYV7or3fbUR9zc"
              className="size-11 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all group"
            >
              <Image
                src={"/icons/whatsapp.png"}
                alt="Whatsapp"
                height={28}
                width={28}
                className="size-7 group-hover:scale-110 transition-transform"
              />
            </Link>
          </TooltipTrigger>
          <TooltipContent side="left" className="text-xs">
            <span>Join WhatsApp Student Community</span>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
