import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata = {
    title: "Disclaimer | PU Vault",
    description:
        "Disclaimer for PU Vault regarding educational content, accuracy, and liability.",
};

export default function DisclaimerPage() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-10">
            <Card>
                <CardContent className="p-6 space-y-6">
                    <h1 className="text-3xl font-bold">Disclaimer</h1>

                    <p className="text-muted-foreground">
                        The information provided on <strong>PU Vault</strong> is for general
                        educational and informational purposes only.
                    </p>

                    <Separator />

                    <section>
                        <h2 className="text-xl font-semibold mb-2">
                            Educational Purpose Only
                        </h2>
                        <p className="text-muted-foreground">
                            All notes, resources, materials, and content available on this
                            platform are shared strictly for educational purposes. PU Vault
                            does not guarantee completeness, accuracy, or reliability of any
                            content.
                        </p>
                    </section>

                    <Separator />

                    <section>
                        <h2 className="text-xl font-semibold mb-2">
                            User-Generated Content
                        </h2>
                        <p className="text-muted-foreground">
                            Some content on PU Vault may be uploaded or contributed by users.
                            PU Vault does not claim ownership of such content and is not
                            responsible for its accuracy or legality.
                        </p>
                    </section>

                    <Separator />

                    <section>
                        <h2 className="text-xl font-semibold mb-2">
                            Copyright & Fair Use
                        </h2>
                        <p className="text-muted-foreground">
                            If any content unintentionally violates copyright laws, please
                            contact us. We will promptly review and remove the content if
                            necessary.
                        </p>
                    </section>

                    <Separator />

                    <section>
                        <h2 className="text-xl font-semibold mb-2">
                            Limitation of Liability
                        </h2>
                        <p className="text-muted-foreground">
                            PU Vault shall not be held liable for any losses, damages, or issues
                            arising from the use of this website or reliance on its content.
                        </p>
                    </section>

                    <Separator />

                    <p className="text-sm text-muted-foreground">
                        By using PU Vault, you agree to this disclaimer.
                    </p>
                </CardContent>
            </Card>
        </main>
    );
}
