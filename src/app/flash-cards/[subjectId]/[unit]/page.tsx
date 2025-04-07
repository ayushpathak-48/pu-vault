import React from "react";
import CodePageClient from "./client";
import { flashCards } from "@/lib/constants/flash-cards.constant";

export async function generateStaticParams() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const paths: any = [];

  flashCards.forEach((card) => {
    card.units.forEach((unit) => {
      paths.push({
        subjectId: card.key,
        unit: unit?.key,
      });
    });
  });

  return paths;
}

const page = async () => {
  return <CodePageClient />;
};

export default page;
