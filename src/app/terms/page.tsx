import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Terms & Conditions | PU Vault",
  description: "Terms and conditions for using PU Vault.",
};

export default function TermsPage() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-6">
      <div className="p-6 md:p-8 rounded-3xl bg-white/65 dark:bg-zinc-900/40 backdrop-blur-2xl backdrop-saturate-180 border border-white/60 dark:border-white/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.85)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)] space-y-6">
        <div className="space-y-1.5">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm text-muted-foreground">
            By accessing or using <strong>PU Vault</strong>, you agree to comply with and be bound by the following terms.
          </p>
        </div>

        <Separator className="bg-white/50 dark:bg-white/[0.08]" />

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-foreground">Usage Rules</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            You must use this platform responsibly and solely for lawful academic and personal educational study purposes.
          </p>
        </section>

        <Separator className="bg-white/50 dark:bg-white/[0.08]" />

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-foreground">Intellectual Property</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            All original platform software, UI elements, and curated resources belong to PU Vault and respective authors unless otherwise credited.
          </p>
        </section>

        <Separator className="bg-white/50 dark:bg-white/[0.08]" />

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-foreground">Limitation of Liability</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            PU Vault provides resources &quot;as is&quot; and is not responsible for academic discrepancies, syllabus alterations, or examination outcomes.
          </p>
        </section>

        <Separator className="bg-white/50 dark:bg-white/[0.08]" />

        <p className="text-xs text-muted-foreground">
          Terms may be revised periodically without prior notification.
        </p>
      </div>
    </div>
  );
}
