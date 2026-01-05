import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata = {
    title: "Privacy Policy | PU Vault",
    description: "Privacy Policy explaining how PU Vault collects and uses data.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-10">
            <Card>
                <CardContent className="p-6 space-y-6">
                    <h1 className="text-3xl font-bold">Privacy Policy</h1>

                    <p className="text-muted-foreground">
                        At <strong>PU Vault</strong>, we respect your privacy and are committed
                        to protecting your personal data.
                    </p>

                    <Separator />

                    <section>
                        <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
                        <p className="text-muted-foreground">
                            We may collect personal details such as name, email address,
                            academic information, and usage analytics to improve our services.
                        </p>
                    </section>

                    <Separator />

                    <section>
                        <h2 className="text-xl font-semibold mb-2">How We Use Your Data</h2>
                        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                            <li>Improve platform functionality</li>
                            <li>Analyze usage patterns</li>
                            <li>Maintain security and performance</li>
                            <li>Comply with legal requirements</li>
                        </ul>
                    </section>

                    <Separator />

                    <section>
                        <h2 className="text-xl font-semibold mb-2">Cookies & Ads</h2>
                        <p className="text-muted-foreground">
                            PU Vault may use cookies, including third-party cookies such as
                            Google AdSense, to personalize content and ads.
                        </p>
                    </section>

                    <Separator />

                    <p className="text-sm text-muted-foreground">
                        By using PU Vault, you consent to this Privacy Policy.
                    </p>
                </CardContent>
            </Card>
        </main>
    );
}
