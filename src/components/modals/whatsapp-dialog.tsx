"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BellRing } from "lucide-react";

export const WhatsappDialog = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const whatsappDialogClosed = localStorage.getItem(
      "whatsappDialogClosed-21-03-2026",
    );
    if (!whatsappDialogClosed) {
      setOpen(true);
    }
  }, []);

  const handleJoin = () => {
    localStorage.setItem("whatsappDialogClosed-21-03-2026", "true");
    setOpen(false);
    window
      .open("https://chat.whatsapp.com/D88Nxz3agYV7or3fbUR9zc", "_blank")
      ?.focus();
  };

  const handleDismiss = () => {
    localStorage.setItem("whatsappDialogClosed-21-03-2026", "true");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md w-[92vw] rounded-2xl p-6 border shadow-2xl">
        <DialogHeader className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="relative size-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
              <Image
                src={"/icons/whatsapp.png"}
                alt="Whatsapp"
                height={28}
                width={28}
                className="size-7"
              />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold flex items-center gap-1.5">
                PU WhatsApp Community
              </DialogTitle>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <BellRing className="size-3" /> Real-time updates & materials
              </span>
            </div>
          </div>
          <DialogDescription className="text-sm text-muted-foreground leading-relaxed">
            Never miss new lecture notes, exam schedules, assignment solutions, or practical source codes. Join thousands of Parul University students.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex-col sm:flex-row gap-2 pt-2 mt-2">
          <Button
            type="button"
            variant="ghost"
            onClick={handleDismiss}
            className="rounded-xl text-xs text-muted-foreground"
          >
            Maybe Later
          </Button>
          <Button
            onClick={handleJoin}
            className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold gap-2 shadow-sm"
          >
            <Image
              src={"/icons/whatsapp.png"}
              alt="Whatsapp"
              height={18}
              width={18}
              className="size-4"
            />
            Join Community
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
