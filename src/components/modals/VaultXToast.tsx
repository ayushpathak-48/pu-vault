"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Link as LinkIcon, Lock, FolderOpen, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "vault_x_toast_shows";
const MAX_SHOWS = 5;
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.vaultx.vault_x";

export function VaultXToast() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    // Read show count
    const shows = parseInt(localStorage.getItem(STORAGE_KEY) || "0", 10);
    const wasClicked = localStorage.getItem("vault_x_clicked") === "true";

    if (shows < MAX_SHOWS && !wasClicked) {
      // Delay slightly so it doesn't clash with initial load and other dialogs
      const timer = setTimeout(() => {
        setIsVisible(true);
        localStorage.setItem(STORAGE_KEY, (shows + 1).toString());
      }, 3000); // 3-second delay

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleDownload = () => {
    localStorage.setItem("vault_x_clicked", "true");
    window.open(PLAY_STORE_URL, "_blank");
    setIsVisible(false);
  };

  if (!hasMounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
          exit={{ opacity: 0, y: -20, scale: 0.95, x: 20 }}
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
          className="fixed top-4 right-4 z-[100] w-[calc(100vw-32px)] sm:w-[380px] overflow-hidden bg-card border border-border shadow-2xl rounded-2xl p-4 text-card-foreground flex flex-col"
        >
          {/* Premium Top Accent Gradient Line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500" />

          <div className="flex items-start gap-3 mt-1">
            {/* Icon Wrapper */}
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
              <Lock className="w-5 h-5 text-white" />
            </div>

            {/* Text Content */}
            <div className="flex-1 min-w-0 pr-5">
              <h4 className="font-bold text-base tracking-tight flex items-center gap-1.5 text-foreground">
                Vault X
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-medium bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
                  Featured App
                </span>
              </h4>
              <p className="text-muted-foreground text-xs sm:text-[13px] mt-1 leading-snug font-medium">
                Securely store and organize your important links in a private, local safe. Totally offline, private, and secure.
              </p>
            </div>

            {/* Custom Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Small Highlights */}
          <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-medium">
            <span className="flex items-center gap-1 bg-muted/50 px-2 py-1 rounded-md border border-border/50 text-muted-foreground">
              <LinkIcon className="w-3 h-3 text-violet-500" /> Save Links
            </span>
            <span className="flex items-center gap-1 bg-muted/50 px-2 py-1 rounded-md border border-border/50 text-muted-foreground">
              <Lock className="w-3 h-3 text-fuchsia-500" /> Private Safe
            </span>
            <span className="flex items-center gap-1 bg-muted/50 px-2 py-1 rounded-md border border-border/50 text-muted-foreground">
              <FolderOpen className="w-3 h-3 text-pink-500" /> Categorize
            </span>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex items-center gap-2.5 w-full">
            <Button
              size="sm"
              className="flex-1 bg-violet-600 hover:bg-violet-700 text-white font-semibold transition-all shadow-sm hover:shadow active:scale-[0.98]"
              onClick={handleDownload}
            >
              Download App <ExternalLink className="ml-1.5 w-3.5 h-3.5" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="text-xs text-muted-foreground hover:text-foreground hover:bg-muted/50"
              onClick={handleClose}
            >
              Dismiss
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
