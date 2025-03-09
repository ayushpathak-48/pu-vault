import React from "react";
import CodePageClient from "./client";

const page = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/ayushpathak-48/pu-vault-assets/refs/heads/main/code/data-communication-and-networking/pipe",
    {
      cache: "reload", // or "force-cache" for caching
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  console.log({ data: data });
  return <CodePageClient />;
};

export default page;
