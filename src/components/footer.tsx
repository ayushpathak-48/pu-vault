import Link from "next/link";
import { Heart, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10">

          {/* Brand & Description */}
          <div className="md:col-span-2 lg:col-span-2 flex flex-col gap-4">
            <h3 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              PU Vault
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[90%]">
              The ultimate resource hub for Parul University students. Access study materials, previous year papers, attendance calculators, and essential tools to ace your academics.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-foreground">Resources</h4>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li><Link href="/assignments" className="hover:text-primary transition-colors">Assignments</Link></li>
              <li><Link href="/placement-materials" className="hover:text-primary transition-colors">Placement Materials</Link></li>
              <li><Link href="/attendance-calculator" className="hover:text-primary transition-colors">Attendance Calculator</Link></li>
              <li><Link href="/mcqs" className="hover:text-primary transition-colors">MCQs Practice</Link></li>
            </ul>
          </div>

          {/* Legal & Info */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Promotion / Sponsors */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-foreground">Other Products</h4>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li>
                <a href="https://samast.pro/?utm_source=pu_vault&utm_medium=footer&utm_campaign=cross_promotion" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1 w-fit">
                  samast.pro
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
          <p>© {currentYear} PU Vault. All rights reserved.</p>
          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" />
            <span>by</span>
            <a href="https://ap-kk-apps.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline">
              Aayush & Karan
            </a>
            <span className="hidden sm:inline">for Parul University students</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
