import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Contact Us | PU Vault",
  description: "Contact the PU Vault team.",
};

export default function ContactPage() {
  return (
    <div className="w-full max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 py-3.5 sm:py-6 md:py-8 space-y-3.5 sm:space-y-6">
      <div className="p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white/65 dark:bg-zinc-900/40 backdrop-blur-2xl backdrop-saturate-180 border border-white/60 dark:border-white/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.85)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)] space-y-4 sm:space-y-6">
        <div className="space-y-1.5">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
            Contact Us
          </h1>
          <p className="text-sm text-muted-foreground">
            Have questions, feedback, or suggestions? We’d love to hear from you.
          </p>
        </div>

        <Separator className="bg-white/50 dark:bg-white/[0.08]" />

        <div className="space-y-3 text-sm text-muted-foreground">
          <p className="flex items-center gap-2">
            <span>📧</span>
            <span className="font-semibold text-foreground">Email:</span>
            <a
              href="mailto:ayush010pathak@gmail.com"
              className="text-primary hover:underline font-medium"
            >
              ayush010pathak@gmail.com
            </a>
          </p>
          <p className="flex items-center gap-2">
            <span>🌐</span>
            <span className="font-semibold text-foreground">Website:</span>
            <span className="font-medium">https://pu-vault.vercel.app</span>
          </p>
        </div>

        <Separator className="bg-white/50 dark:bg-white/[0.08]" />

        <p className="text-xs text-muted-foreground">
          We usually review queries and respond within 24–48 hours.
        </p>
      </div>
    </div>
  );
}
