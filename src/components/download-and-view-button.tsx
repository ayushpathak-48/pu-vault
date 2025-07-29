import { downloadFile } from "@/lib/utils";
import { ArrowDownToLine, Loader } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";

export const DownloadAndViewButton = ({
  href,
  variant = "default",
}: {
  href: string;
  variant?: "default" | "ghost";
}) => {
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    setLoading(true);
    downloadFile(href)
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  };
  return (
    <div className="flex items-center gap-1">
      <Button
        variant={variant}
        onClick={handleDownload}
        size={"sm"}
        className="size-8"
        disabled={loading}
      >
        {loading ? <Loader className="animate-spin" /> : <ArrowDownToLine />}
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
