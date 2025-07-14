"use client";

import {
  AlertDialog,
  AlertDialogAction,
  // AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { WhatsappButton } from "../WhatsappButton";
import Image from "next/image";
import { useEffect, useState } from "react";

export const WhatsappDialog = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const whatsappDialogClosed = localStorage.getItem("whatsappDialogClosed2");
    if (!whatsappDialogClosed) {
      setOpen(true);
    }
  }, []);

  const handleCloseClick = () => {
    localStorage.setItem("whatsappDialogClosed2", "true");
    setOpen(false);
  };

  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="max-md:max-w-[93%] rounded-md">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-1">
            <Image
              src={"/icons/whatsapp.png"}
              alt="Whatsapp"
              height={20}
              width={20}
              className="size-5"
            />
            Whatsapp Community
          </AlertDialogTitle>
          <AlertDialogDescription>
            Join whatsapp community for getting updates. Never miss any new
            feature,updates,material.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleCloseClick}>
            Already Joined
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <WhatsappButton />
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
