import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Privacy Policy | PU Vault",
  description: "Privacy Policy explaining how PU Vault collects and uses data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-6">
      <div className="p-6 md:p-8 rounded-3xl bg-white/65 dark:bg-zinc-900/40 backdrop-blur-2xl backdrop-saturate-180 border border-white/60 dark:border-white/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.85)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)] space-y-6">
        <div className="space-y-1.5">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground">
            At <strong>PU Vault</strong>, we respect your privacy and are committed to protecting your personal data.
          </p>
        </div>

        <Separator className="bg-white/50 dark:bg-white/[0.08]" />

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-foreground">Information We Collect</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We may collect personal details such as name, email address, academic information, and usage analytics to improve our services.
          </p>
        </section>

        <Separator className="bg-white/50 dark:bg-white/[0.08]" />

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-foreground">How We Use Your Data</h2>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1.5 leading-relaxed">
            <li>Improve platform functionality and resource discovery</li>
            <li>Analyze usage patterns and optimize load times</li>
            <li>Maintain security, privacy, and performance standards</li>
            <li>Comply with applicable legal requirements</li>
          </ul>
        </section>

        <Separator className="bg-white/50 dark:bg-white/[0.08]" />

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-foreground">Cookies &amp; Ads</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            PU Vault may use cookies, including third-party cookies such as Google AdSense, to personalize content and ads.
          </p>
        </section>

        <Separator className="bg-white/50 dark:bg-white/[0.08]" />

        <p className="text-xs text-muted-foreground">
          By using PU Vault, you consent to this Privacy Policy.
        </p>
      </div>
    </div>
  );
}
