import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export const WhatsappButton = () => {
  return (
    <Button asChild>
      <Link
        target="_blank"
        href={`https://chat.whatsapp.com/D88Nxz3agYV7or3fbUR9zc`}
      >
        <Image
          src={"/icons/whatsapp.png"}
          alt="Whatsapp"
          height={20}
          width={20}
          className="size-5"
        />{" "}
        Join Now
      </Link>
    </Button>
  );
};
