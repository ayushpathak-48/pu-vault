import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
    return (
        <footer className="mt-20 w-full border-t bg-background">
            <div className="mx-auto max-w-6xl px-6 py-10">

                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                    {/* Branding */}
                    <div>
                        <h3 className="text-lg font-semibold">PU Vault</h3>
                        <p className="text-sm text-muted-foreground max-w-sm">
                            A centralized academic resource hub built for Parul University students.
                        </p>
                    </div>

                    {/* Links */}
                    <nav className="flex flex-wrap gap-4 text-sm">
                        <Link
                            href="/about"
                            className="text-muted-foreground hover:text-foreground transition"
                        >
                            About Us
                        </Link>
                        <Link
                            href="/contact"
                            className="text-muted-foreground hover:text-foreground transition"
                        >
                            Contact Us
                        </Link>
                        <Link
                            href="/privacy-policy"
                            className="text-muted-foreground hover:text-foreground transition"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="text-muted-foreground hover:text-foreground transition"
                        >
                            Terms & Conditions
                        </Link>
                    </nav>

                </div>

                <Separator className="my-6" />

                {/* Bottom */}
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} PU Vault. All rights reserved.</p>
                    <p>Built with ❤️ in India for Parul University students</p>
                </div>

            </div>
        </footer>
    );
}
