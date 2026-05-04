export default function Footer() {
  return (
    <footer className="mt-10 w-full border-t bg-background">
      <div className="mx-auto max-w-6xl px-6 py-5">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} PU Vault. All rights reserved.</p>
          <p>Built with ❤️ by Aayush, Karan, and Kirtan for Parul University students</p>
        </div>
      </div>
    </footer>
  );
}
