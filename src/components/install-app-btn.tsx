"use client";

import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function InstallPWAButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault(); // Prevent the mini-infobar from appearing on mobile
      setDeferredPrompt(e);
      setIsVisible(true); // Show your custom install button
    };

    window.addEventListener("beforeinstallprompt", handler as EventListener);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handler as EventListener,
      );
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const promptEvent = deferredPrompt as any;
    promptEvent.prompt(); // Show the install prompt

    setDeferredPrompt(null);
    setIsVisible(false);
  };

  return (
    isVisible && (
      <Button
        onClick={handleInstallClick}
        className="px-4 py-2 bg-primary text-white rounded-xl shadow-lg"
      >
        Install Apk <ArrowDown />
      </Button>
    )
  );
}
