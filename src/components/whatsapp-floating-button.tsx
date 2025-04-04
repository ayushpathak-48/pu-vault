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
    <div className="fixed bottom-16 right-5 lg:bottom-10 lg:right-10">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Link
              target="_blank"
              href={`https://chat.whatsapp.com/D88Nxz3agYV7or3fbUR9zc`}
            >
              <Image
                src={"/icons/whatsapp.png"}
                alt="Whatsapp"
                height={40}
                width={40}
                className="size-10 animate-pulse"
              />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <div>Join Whatsapp Community for updates</div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
