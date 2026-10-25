import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, BookOpen, Calculator } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full p-8 md:p-10 rounded-3xl bg-white/65 dark:bg-zinc-900/40 backdrop-blur-2xl backdrop-saturate-180 border border-white/60 dark:border-white/[0.08] shadow-[0_16px_40px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.85)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.12)] text-center space-y-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-md text-xs font-semibold">
          Error 404
        </div>

        {/* Big Code */}
        <div className="space-y-2">
          <h1 className="text-6xl md:text-7xl font-black tracking-tight text-foreground">
            4<span className="text-primary">0</span>4
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-foreground">
            Page Not Found
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
            The page or academic resource you are looking for doesn&apos;t exist, was moved, or is temporarily unavailable.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Button asChild className="rounded-xl font-semibold shadow-xs">
            <Link href="/">
              <Home className="size-4 mr-2" /> Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-xl font-medium">
            <Link href="/assignments">
              <BookOpen className="size-4 mr-2" /> Assignments
            </Link>
          </Button>
        </div>

        {/* Popular Shortcuts */}
        <div className="pt-6 border-t border-white/40 dark:border-white/[0.06]">
          <p className="text-xs font-bold text-muted-foreground mb-3 uppercase tracking-wider">
            Popular Shortcuts
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link
              href="/attendance-calculator"
              className="text-xs px-3 py-1.5 rounded-xl bg-white/50 dark:bg-white/[0.06] backdrop-blur-md border border-white/50 dark:border-white/[0.08] hover:border-primary/50 text-foreground transition-all flex items-center gap-1.5 shadow-2xs"
            >
              <Calculator className="size-3.5 text-primary" /> Attendance Calculator
            </Link>
            <Link
              href="/code"
              className="text-xs px-3 py-1.5 rounded-xl bg-white/50 dark:bg-white/[0.06] backdrop-blur-md border border-white/50 dark:border-white/[0.08] hover:border-primary/50 text-foreground transition-all shadow-2xs"
            >
              Practical Codes
            </Link>
            <Link
              href="/mcqs"
              className="text-xs px-3 py-1.5 rounded-xl bg-white/50 dark:bg-white/[0.06] backdrop-blur-md border border-white/50 dark:border-white/[0.08] hover:border-primary/50 text-foreground transition-all shadow-2xs"
            >
              MCQ Practice
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
