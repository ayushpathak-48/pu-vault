import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "About Us | PU Vault",
  description: "Learn more about PU Vault and our mission.",
};

export default function AboutPage() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-6">
      <div className="p-6 md:p-8 rounded-3xl bg-white/65 dark:bg-zinc-900/40 backdrop-blur-2xl backdrop-saturate-180 border border-white/60 dark:border-white/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.85)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)] space-y-6">
        <div className="space-y-1.5">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
            About PU Vault
          </h1>
          <p className="text-sm text-muted-foreground">
            The open-access student academic portal for Parul University.
          </p>
        </div>

        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            <strong className="text-foreground">PU Vault</strong> is an academic resource platform designed
            specifically for Parul University students.
          </p>

          <Separator className="bg-white/50 dark:bg-white/[0.08]" />

          <p>
            Our mission is to centralize notes, study materials, and academic
            tools into one reliable platform that saves students time and boosts
            productivity.
          </p>

          <Separator className="bg-white/50 dark:bg-white/[0.08]" />

          <p>
            Built by students and developers, PU Vault focuses on real academic
            needs, clean design, and fast access to information.
          </p>
        </div>
      </div>
    </div>
  );
}
