"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

export const WhatsappButton = ({ setOpen }: { setOpen: any }) => {
  const handleWhatsappClick = () => {
    localStorage.setItem("whatsappDialogClosed-27-07", "true");
    setOpen(false);
    window
      .open("https://chat.whatsapp.com/D88Nxz3agYV7or3fbUR9zc", "_blank")
      ?.focus();
  };
  return (
    <Button onClick={handleWhatsappClick}>
      <Image
        src={"/icons/whatsapp.png"}
        alt="Whatsapp"
        height={20}
        width={20}
        className="size-5"
      />{" "}
      Join Now
    </Button>
  );
};
