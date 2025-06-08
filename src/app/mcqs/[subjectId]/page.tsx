"use client";

import { useDataGetters } from "@/hooks/use-data-getters";
import { redirect, useParams } from "next/navigation";

const CodePage = () => {
  const { getFlashCards } = useDataGetters();
  const flashCards = getFlashCards();

  const { subjectId } = useParams();
  const subject = flashCards.find(({ key }) => key == subjectId);
  return redirect(`/mcqs/${subjectId}/${subject?.units[0]?.key}`);
};

export default CodePage;
