import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata = {
    title: "Contact Us | PU Vault",
    description: "Contact the PU Vault team.",
};

export default function ContactPage() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-10">
            <Card>
                <CardContent className="p-6 space-y-6">
                    <h1 className="text-3xl font-bold">Contact Us</h1>

                    <p className="text-muted-foreground">
                        Have questions, feedback, or suggestions? We’d love to hear from you.
                    </p>

                    <Separator />

                    <div className="space-y-2 text-muted-foreground">
                        <p>
                            📧 Email:{" "}
                            <a
                                href="mailto:ayush010pathak@gmail.com"
                                className="text-primary underline"
                            >
                                ayush010pathak@gmail.com
                            </a>
                        </p>
                        <p>🌐 Website: https://pu-vault.vercel.app</p>
                    </div>

                    <Separator />

                    <p className="text-sm text-muted-foreground">
                        We usually respond within 24–48 hours.
                    </p>
                </CardContent>
            </Card>
        </main>
    );
}
