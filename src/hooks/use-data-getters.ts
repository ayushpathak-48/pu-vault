import { sem1Assignments } from "@/lib/constants/sem-1/assignments.constant";
import { sem2Assignments } from "@/lib/constants/sem-2/assignments.constant";
import { sem3Assignments } from "@/lib/constants/sem-3/assignment.constant";
import { useDataStore } from "@/stores/data.store";
import { sem1PracticalCodes } from "@/lib/constants/sem-1/codes.constant";
import { sem2PracticalCodes } from "@/lib/constants/sem-2/codes.constant";
import { sem3PracticalCodes } from "@/lib/constants/sem-3/codes.constant";
import { sem3FlashCards } from "@/lib/constants/sem-3/flash-cards.constant";
import { sem2FlashCards } from "@/lib/constants/sem-2/flash-cards.constant";
import {
  sem3Materials,
  sem3specializationMaterials,
} from "@/lib/constants/sem-3/materials.constant";
import {
  sem2Materials,
  sem2specializationMaterials,
} from "@/lib/constants/sem-2/materials.constant";
import {
  sem1Materials,
  sem1specializationMaterials,
} from "@/lib/constants/sem-1/materials.constant";

import { sem2MCQs } from "@/lib/constants/sem-2/mcqs.constant";
import { sem3MCQs } from "@/lib/constants/sem-3/mcqs.constant";
import { sem2TimeTable } from "@/lib/constants/sem-2/time-table.constant";
import { sem3TimeTable } from "@/lib/constants/sem-3/time-table.constant";
import { MessageGeneratorSchema } from "@/lib/schema/message-generator-schema";
import { z } from "zod";
import { format } from "date-fns";

export const useDataGetters = () => {
  const sem = useDataStore((state) => state.sem);
  const division = useDataStore((state) => state.division);

  // Get materials   constant
  const getMaterials = () => {
    if (sem === 1) return sem1Materials;
    if (sem === 2) return sem2Materials;
    if (sem === 3) return sem3Materials;
    return [];
  };

  // Get assignment constant
  const getAssignments = () => {
    if (sem === 1) return sem1Assignments;
    if (sem === 2) return sem2Assignments;
    if (sem === 3) return sem3Assignments;
    return [];
  };

  // Get Practical Codes Constant
  const getPracticalCodes = () => {
    if (sem === 1) return sem1PracticalCodes;
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

  // Get Specialization constant
  const getSpecializationMaterials = () => {
    if (sem === 1) return sem1specializationMaterials;
    if (sem === 2) return sem2specializationMaterials;
    if (sem === 3) return sem3specializationMaterials;
    return [];
  };

  const getMessageFormats = ({
    gender,
    type,
    date,
    lecture,
    time,
    is_present,
    enrollment,
    name,
    reason,
  }: z.infer<typeof MessageGeneratorSchema>) => {
    const formattedDate = format(date, "dd-MM-yyyy");
    if (type == "email")
      return `Respected ${gender == "female" ? "Ma'am" : "Sir"},

I hope you are doing well.

I would like to bring to your attention that I was marked absent for the lecture: ${lecture} on (${formattedDate}, ${time}). ${
        is_present ? "However, I was present in that lecture." : ""
      }
${reason ? `\nReason: The reason I was absent because ${reason}\n` : ""}
Details:-
Name: ${name}
Enrollment No.: ${enrollment}
Division: ${division.charAt(division.length - 1).toUpperCase()}
Semester: MCA Sem-${sem}

Kindly request you to update the attendance accordingly.
Thank you for your understanding and support.

Best regards,
${name}`;

    if (type == "whatsapp")
      return `Hello ${gender == "female" ? "Ma'am" : "Sir"},
I was marked absent in the lecture: ${lecture} (${time}), ${
        is_present ? "However, I was present in that lecture." : ""
      }
${reason ? `\nReason: The reason I was absent because ${reason}\n` : ""}
Date: ${formattedDate}
Name: ${name}
Enrollment: ${enrollment}
Division: ${division.charAt(division.length - 1).toUpperCase()}, MCA Sem-${sem}

Kindly request you to please update my attendance. Thank you!`;
    return "";
  };

  return {
    getMCQs,
    getMaterials,
    getTimeTable,
    getFlashCards,
    getAssignments,
    getPracticalCodes,
    getSpecializationMaterials,
    getMessageFormats,
  };
};
