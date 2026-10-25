import { redirect } from "next/navigation";
import { sem2FlashCards } from "@/lib/constants/sem-2/flash-cards.constant";
import { sem3FlashCards } from "@/lib/constants/sem-3/flash-cards.constant";

interface FlashCardsSubjectPageProps {
  params: Promise<{ subjectId: string }>;
}

export default async function FlashCardsSubjectRedirectPage({ params }: FlashCardsSubjectPageProps) {
  const { subjectId } = await params;

  const allSubjects = [
    ...sem2FlashCards,
    ...sem3FlashCards,
  ];

  const subject = allSubjects.find((s) => s.key === subjectId);
  const firstUnit = subject?.units?.[0];

  if (!firstUnit?.key) {
    redirect("/flash-cards");
  }

  redirect(`/flash-cards/${subjectId}/${firstUnit.key}`);
}
