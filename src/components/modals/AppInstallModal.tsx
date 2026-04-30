"use client";

import React, { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "motion/react";
import { X, ShieldCheck, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "trusttracker_modal_seen";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.trusttracker.trust_tracker_flutter"; // Replace with actual link

/**
 * AppInstallModal component
 * Production-grade one-time notification modal to promote TrustTracker.
 */
export function AppInstallModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    // Check if user has already seen the modal
    const hasSeen = localStorage.getItem(STORAGE_KEY);

    if (!hasSeen) {
      // Show modal after a 2-second delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
        // Track modal shown event
        console.log("Analytics: modal_shown");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem(STORAGE_KEY, "true");
  };

  const handleDownload = () => {
    // Track download click event
    console.log("Analytics: download_clicked");
    window.open(PLAY_STORE_URL, "_blank");
    handleClose();
  };

  if (!hasMounted) return null;

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            {/* Backdrop Blur Overlay */}
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
              />
            </Dialog.Overlay>

            {/* Modal Content */}
            <Dialog.Content asChild>
              <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{
                    type: "spring",
                    damping: 25,
                    stiffness: 300,
                    duration: 0.3
                  }}
                  className={cn(
                    "relative w-[92vw] sm:w-full sm:max-w-[420px] overflow-hidden",
                    "bg-background border border-border shadow-2xl",
                    "rounded-[16px] sm:rounded-[12px] p-0 flex flex-col items-center text-center",
                    "max-h-[90vh] overflow-y-auto"
                  )}
                  role="dialog"
                  aria-labelledby="modal-title"
                  aria-describedby="modal-description"
                >
                  {/* Decorative Header Gradient */}
                  <div className="w-full h-24 sm:h-28 bg-gradient-to-br from-primary/20 via-primary/5 to-background flex items-center justify-center relative flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-primary flex items-center justify-center shadow-[0_8px_30px_rgb(var(--primary)_/_20%)] transform -rotate-2">
                      <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12 text-primary-foreground" />
                    </div>
                    
                    {/* Close Button */}
                    <Dialog.Close asChild>
                      <button 
                        onClick={handleClose}
                        className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full bg-background/50 hover:bg-background/80 transition-colors border border-border/50 text-muted-foreground hover:text-foreground group"
                        aria-label="Close modal"
                      >
                        <X className="w-4 h-4 transition-transform group-hover:rotate-90" />
                      </button>
                    </Dialog.Close>
                  </div>

                  {/* Content Body */}
                  <div className="px-5 sm:px-8 pt-6 sm:pt-8 pb-8 sm:pb-10 flex flex-col items-center w-full">
                    <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 text-center">
                      <h2 
                        id="modal-title" 
                        className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground"
                      >
                        TrustTracker
                      </h2>
                      <p 
                        id="modal-description" 
                        className="text-primary font-bold text-[10px] sm:text-sm tracking-widest uppercase px-2"
                      >
                        Control finances & trust tracking
                      </p>
                    </div>

                    <p className="text-muted-foreground text-sm sm:text-[15px] leading-relaxed mb-6 sm:mb-8 max-w-[320px]">
                      Try our new app to track expenses, manage financial trust, and stay fully in control of your money.
                      <span className="block mt-2 font-medium text-foreground/80 text-sm sm:text-base">Simple, secure, and built for transparency.</span>
                    </p>

                    {/* Feature Highlights */}
                    <div className="w-full space-y-2.5 sm:space-y-3 mb-8 sm:mb-10 text-left px-2 sm:px-0">
                      {[
                        "Track expenses effortlessly",
                        "Monitor trust & shared finances",
                        "Get clear insights, anytime"
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 text-[13px] sm:text-sm text-foreground/90 font-medium">
                          <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary/10 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary" />
                          </div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3 sm:space-y-4 w-full">
                      <Button 
                        onClick={handleDownload}
                        size="lg"
                        className="w-full h-11 sm:h-12 bg-primary text-primary-foreground font-bold rounded-lg shadow-[0_4px_14px_0_rgb(var(--primary)_/_30%)] hover:shadow-[0_6px_20px_rgb(var(--primary)_/_40%)] transition-all active:scale-[0.98] flex items-center justify-center gap-2 sm:gap-3 relative overflow-hidden group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
                        <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                        <span className="text-sm sm:text-base">Download Now on Play Store</span>
                      </Button>
                      
                      <button 
                        onClick={handleClose}
                        className="w-full py-1 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors font-medium decoration-primary/30 hover:underline underline-offset-4"
                      >
                        Maybe later
                      </button>
                    </div>
                  </div>

                  {/* Trust Badge / Footer */}
                  <div className="w-full px-4 py-3 sm:py-4 bg-muted/30 border-t border-border flex items-center justify-center gap-2 mt-auto flex-shrink-0">
                    <ShieldCheck className="w-3 sm:h-3.5 text-muted-foreground/60" />
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-muted-foreground/60 font-bold">
                      Your Financial Trust Partner
                    </span>
                  </div>
                </motion.div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
