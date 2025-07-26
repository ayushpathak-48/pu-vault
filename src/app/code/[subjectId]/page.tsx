"use client";

import { useDataGetters } from "@/hooks/use-data-getters";
import { redirect, useParams } from "next/navigation";

const CodePage = () => {
  const { subjectId } = useParams();
  const { getPracticalCodes } = useDataGetters();
  const practicalCodes = getPracticalCodes();
  const practicalSubject = practicalCodes.find(({ key }) => key == subjectId);
  return redirect(`/code/${subjectId}/${practicalSubject?.practicals[0].key}`);
};

export default CodePage;
