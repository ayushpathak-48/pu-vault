"use client";

import { useDataGetters } from "@/hooks/use-data-getters";
import { redirect, useParams } from "next/navigation";

const CodePage = () => {
  const { subjectId } = useParams();
  const { getFlashCards } = useDataGetters();
  const flashCards = getFlashCards();
  const subject = flashCards.find(({ key }) => key == subjectId);
  return redirect(`/flash-cards/${subjectId}/${subject?.units[0]?.key}`);
};

export default CodePage;
