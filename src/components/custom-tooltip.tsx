import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export const CustomTooltip = ({
  children,
  content,
  contentClass = "",
}: {
  children: React.ReactNode;
  content: React.ReactNode;
  contentClass?: string;
}) => {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent className={contentClass}>{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
