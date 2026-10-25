import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Calendar, Calculator, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
          Error 404
        </div>

        {/* Big Code */}
        <div className="space-y-2">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-foreground">
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
            <Link href="/time-table">
              <Calendar className="size-4 mr-2" /> Time Table
            </Link>
          </Button>
        </div>

        {/* Popular Shortcuts */}
        <div className="pt-6 border-t border-border/60">
          <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">
            Popular Shortcuts
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link
              href="/attendance-calculator"
              className="text-xs px-3 py-1.5 rounded-lg bg-card border border-border/70 hover:border-primary/50 text-foreground transition-all flex items-center gap-1.5"
            >
              <Calculator className="size-3.5 text-primary" /> Attendance Calculator
            </Link>
            <Link
              href="/code"
              className="text-xs px-3 py-1.5 rounded-lg bg-card border border-border/70 hover:border-primary/50 text-foreground transition-all"
            >
              Practical Codes
            </Link>
            <Link
              href="/mcqs"
              className="text-xs px-3 py-1.5 rounded-lg bg-card border border-border/70 hover:border-primary/50 text-foreground transition-all"
            >
              MCQ Practice
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
