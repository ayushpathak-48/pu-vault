import { flashCards } from "@/lib/constants/flash-cards.constant";
import { redirect } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CodePage = async ({ params }: { params: any }) => {
  const { subjectId } = await params;
  const subject = flashCards.find(({ key }) => key == subjectId);
  return redirect(`/flash-cards/${subjectId}/${subject?.units[0]?.key}`);
};

export default CodePage;
