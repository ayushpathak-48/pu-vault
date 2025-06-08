import { sem2Assignments } from "@/lib/constants/sem-2/assignments.constant";
import { sem3Assignments } from "@/lib/constants/sem-3/assignment.constant";
import { useDataStore } from "@/stores/data.store";
import { sem2PracticalCodes } from "@/lib/constants/sem-2/codes.constant";
import { sem3PracticalCodes } from "@/lib/constants/sem-3/codes.constant";
import { sem3FlashCards } from "@/lib/constants/sem-3/flash-cards.constant";
import { sem2FlashCards } from "@/lib/constants/sem-2/flash-cards.constant";
import { sem3Materials } from "@/lib/constants/sem-3/materials.constant";
import { sem2Materials } from "@/lib/constants/sem-2/materials.constant";
import { sem2MCQs } from "@/lib/constants/sem-2/mcqs.constant";
import { sem3MCQs } from "@/lib/constants/sem-3/mcqs.constant";
import { sem2TimeTable } from "@/lib/constants/sem-2/time-table.constant";
import { sem3TimeTable } from "@/lib/constants/sem-3/time-table.constant";

export const useDataGetters = () => {
  const sem = useDataStore((state) => state.sem);

  // Get materials   constant
  const getMaterials = () => {
    if (sem === 2) return sem2Materials;
    if (sem === 3) return sem3Materials;
    return [];
  };

  // Get assignment constant
  const getAssignments = () => {
    if (sem === 2) return sem2Assignments;
    if (sem === 3) return sem3Assignments;
    return [];
  };

  // Get Practical Codes Constant
  const getPracticalCodes = () => {
    if (sem === 2) return sem2PracticalCodes;
    if (sem === 3) return sem3PracticalCodes;
    return [];
  };

  // Get flashcards constant
  const getFlashCards = () => {
    if (sem === 2) return sem2FlashCards;
    if (sem === 3) return sem3FlashCards;
    return [];
  };

  // Get MCQ constant
  const getMCQs = () => {
    if (sem === 2) return sem2MCQs;
    if (sem === 3) return sem3MCQs;
    return [];
  };

  // Get TimeTable constant
  const getTimeTable = () => {
    if (sem === 2) return sem2TimeTable;
    if (sem === 3) return sem3TimeTable;
    return [];
  };

  return {
    getMaterials,
    getAssignments,
    getPracticalCodes,
    getFlashCards,
    getMCQs,
    getTimeTable,
  };
};
