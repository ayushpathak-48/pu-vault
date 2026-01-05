import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata = {
    title: "About Us | PU Vault",
    description: "Learn more about PU Vault and our mission.",
};

export default function AboutPage() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-10">
            <Card>
                <CardContent className="p-6 space-y-6">
                    <h1 className="text-3xl font-bold">About PU Vault</h1>

                    <p className="text-muted-foreground">
                        <strong>PU Vault</strong> is an academic resource platform designed
                        specifically for Parul University students.
                    </p>

                    <Separator />

                    <p className="text-muted-foreground">
                        Our mission is to centralize notes, study materials, and academic
                        tools into one reliable platform that saves students time and boosts
                        productivity.
                    </p>

                    <Separator />

                    <p className="text-muted-foreground">
                        Built by students and developers, PU Vault focuses on real academic
                        needs, clean design, and fast access to information.
                    </p>
                </CardContent>
            </Card>
        </main>
    );
}
