import { Metadata } from "next";
import { Suspense } from "react";
import Home from "./home-client";
import { LoaderCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "PU Vault | Parul University Student Portal",
  description:
    "Parul University MCA sem 1, 2 and 3 all materials, assignments, notes, source codes and more.",
};

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="w-full min-h-[50vh] flex items-center justify-center">
          <LoaderCircle className="animate-spin size-8 text-primary" />
        </div>
      }
    >
      <Home />
    </Suspense>
  );
}
