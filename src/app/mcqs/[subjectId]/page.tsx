import { redirect } from "next/navigation";
import { sem2MCQs } from "@/lib/constants/sem-2/mcqs.constant";
import { sem3MCQs } from "@/lib/constants/sem-3/mcqs.constant";

interface McqsSubjectPageProps {
  params: Promise<{ subjectId: string }>;
}

export default async function McqsSubjectRedirectPage({ params }: McqsSubjectPageProps) {
  const { subjectId } = await params;

  const allSubjects = [
    ...sem2MCQs,
    ...sem3MCQs,
  ];

  const subject = allSubjects.find((s) => s.key === subjectId);
  const firstUnit = subject?.units?.[0];

  if (!firstUnit?.key) {
    redirect("/mcqs");
  }

  redirect(`/mcqs/${subjectId}/${firstUnit.key}`);
}
