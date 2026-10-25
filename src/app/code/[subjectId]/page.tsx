import { redirect } from "next/navigation";
import { sem1PracticalCodes } from "@/lib/constants/sem-1/codes.constant";
import { sem2PracticalCodes } from "@/lib/constants/sem-2/codes.constant";
import { sem3PracticalCodes } from "@/lib/constants/sem-3/codes.constant";

interface CodeSubjectPageProps {
  params: Promise<{ subjectId: string }>;
}

export default async function CodeSubjectRedirectPage({ params }: CodeSubjectPageProps) {
  const { subjectId } = await params;

  const allSubjects = [
    ...sem1PracticalCodes,
    ...sem2PracticalCodes,
    ...sem3PracticalCodes,
  ];

  const practicalSubject = allSubjects.find((s) => s.key === subjectId);
  const firstPractical = practicalSubject?.practicals?.[0];

  if (!firstPractical?.key) {
    redirect("/code");
  }

  redirect(`/code/${subjectId}/${firstPractical.key}`);
}
