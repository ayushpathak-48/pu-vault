import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata = {
    title: "Terms & Conditions | PU Vault",
    description: "Terms and conditions for using PU Vault.",
};

export default function TermsPage() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-10">
            <Card>
                <CardContent className="p-6 space-y-6">
                    <h1 className="text-3xl font-bold">Terms & Conditions</h1>

                    <p className="text-muted-foreground">
                        By using <strong>PU Vault</strong>, you agree to the following terms.
                    </p>

                    <Separator />

                    <section>
                        <h2 className="text-xl font-semibold mb-2">Usage Rules</h2>
                        <p className="text-muted-foreground">
                            You must use this platform responsibly and only for lawful
                            purposes.
                        </p>
                    </section>

                    <Separator />

                    <section>
                        <h2 className="text-xl font-semibold mb-2">
                            Intellectual Property
                        </h2>
                        <p className="text-muted-foreground">
                            All content on PU Vault belongs to PU Vault unless stated otherwise.
                        </p>
                    </section>

                    <Separator />

                    <section>
                        <h2 className="text-xl font-semibold mb-2">Limitation of Liability</h2>
                        <p className="text-muted-foreground">
                            PU Vault is not responsible for inaccuracies or losses arising from
                            use of the platform.
                        </p>
                    </section>

                    <Separator />

                    <p className="text-sm text-muted-foreground">
                        Terms may be updated anytime without prior notice.
                    </p>
                </CardContent>
            </Card>
        </main>
    );
}
