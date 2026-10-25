import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Disclaimer | PU Vault",
  description:
    "Disclaimer for PU Vault regarding educational content, accuracy, and liability.",
};

export default function DisclaimerPage() {
  return (
    <div className="w-full max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 py-3.5 sm:py-6 md:py-8 space-y-3.5 sm:space-y-6">
      <div className="p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white/65 dark:bg-zinc-900/40 backdrop-blur-2xl backdrop-saturate-180 border border-white/60 dark:border-white/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.85)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)] space-y-4 sm:space-y-6">
        <div className="space-y-1.5">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
            Disclaimer
          </h1>
          <p className="text-sm text-muted-foreground">
            The information provided on <strong>PU Vault</strong> is for general educational and informational purposes only.
          </p>
        </div>

        <Separator className="bg-white/50 dark:bg-white/[0.08]" />

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-foreground">Educational Purpose Only</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            All notes, resources, materials, and content available on this platform are shared strictly for educational purposes. PU Vault does not guarantee completeness, accuracy, or reliability of any content.
          </p>
        </section>

        <Separator className="bg-white/50 dark:bg-white/[0.08]" />

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-foreground">User-Generated Content</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Some content on PU Vault may be contributed or shared by community members. PU Vault does not claim ownership of third-party intellectual property and encourages proper citation.
          </p>
        </section>

        <Separator className="bg-white/50 dark:bg-white/[0.08]" />

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-foreground">Copyright &amp; Fair Use</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            If any content unintentionally violates copyright policies, please contact us at <a href="mailto:ayush010pathak@gmail.com" className="text-primary hover:underline font-medium">ayush010pathak@gmail.com</a>. We will promptly review and take down the material.
          </p>
        </section>
      </div>
    </div>
  );
}
