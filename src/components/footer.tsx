import Link from "next/link";
import { Heart, GraduationCap } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/50 dark:border-white/[0.08] bg-white/50 dark:bg-zinc-950/50 backdrop-blur-2xl backdrop-saturate-180">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Brand & Description */}
          <div className="md:col-span-2 lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="size-9 rounded-xl bg-primary/10 text-primary border border-primary/20 backdrop-blur-md flex items-center justify-center font-bold shadow-2xs">
                <GraduationCap className="size-5" />
              </div>
              <h3 className="text-xl font-extrabold tracking-tight text-foreground">
                PU Vault
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[90%]">
              The premier open-access student resource portal for Parul University. Access lecture notes, lab practical codes, assignments, and attendance tools crafted for academic excellence.
            </p>
          </div>

          {/* Quick Academic Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">
              Academics
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Study Materials
                </Link>
              </li>
              <li>
                <Link href="/code" className="hover:text-primary transition-colors">
                  Practical Codes
                </Link>
              </li>
              <li>
                <Link href="/youtube-tutorials" className="hover:text-primary transition-colors">
                  Video Tutorials
                </Link>
              </li>
              <li>
                <Link href="/assignments" className="hover:text-primary transition-colors">
                  Assignments
                </Link>
              </li>
              <li>
                <Link href="/mcqs" className="hover:text-primary transition-colors">
                  MCQ Quizzes
                </Link>
              </li>
            </ul>
          </div>

          {/* Student Utilities */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">
              Utilities
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <li>
                <Link href="/attendance-calculator" className="hover:text-primary transition-colors">
                  Attendance Calculator
                </Link>
              </li>
              <li>
                <Link href="/professors" className="hover:text-primary transition-colors">
                  Faculty Contacts
                </Link>
              </li>
              <li>
                <Link href="/software-links" className="hover:text-primary transition-colors">
                  Software Downloads
                </Link>
              </li>
              <li>
                <Link href="/youtube-tutorials" className="hover:text-primary transition-colors">
                  Video Tutorials
                </Link>
              </li>
              <li>
                <Link href="/placement-materials" className="hover:text-primary transition-colors">
                  Placement Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Info & Legal */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">
              Information
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact & Support
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-primary transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/40 dark:border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground text-center md:text-left">
          <p>© {currentYear} PU Vault. Built for Parul University students.</p>
          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            <span>Maintained with</span>
            <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" />
            <span>by</span>
            <a
              href="https://samyukt.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              Samyukt
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
