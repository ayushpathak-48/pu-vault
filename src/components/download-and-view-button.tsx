import { downloadFile } from "@/lib/utils";
import { ArrowDownToLine } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export const DownloadAndViewButton = ({
  href,
  variant = "default",
}: {
  href: string;
  variant?: "default" | "ghost";
}) => {
  return (
    <div className="flex items-center gap-1">
      <Button
        variant={variant}
        onClick={() => downloadFile(href)}
        size={"sm"}
        className="size-8"
      >
        <ArrowDownToLine />
      </Button>
      <Button className="" variant={variant} asChild size={"sm"}>
        <Link
          href={href}
          target="_blank"
          className={variant == "ghost" ? "text-primary" : ""}
        >
          View
        </Link>
      </Button>
    </div>
  );
};
