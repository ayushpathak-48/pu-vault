import { practicalCodes } from "@/lib/constants/codes.constant";
import { redirect } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CodePage = async ({ params }: { params: any }) => {
  const { subjectId } = params;
  const practicalSubject = practicalCodes.find(({ key }) => key == subjectId);
  return redirect(`/code/${subjectId}/${practicalSubject?.practicals[0].key}`);
};

export default CodePage;
