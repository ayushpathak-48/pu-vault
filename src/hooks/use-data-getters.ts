import { sem2Assignments } from "@/lib/constants/sem-2/assignments.constant";
import { sem3Assignments } from "@/lib/constants/sem-3/assignment.constant";
import { useDataStore } from "@/stores/data.store";
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
import { sem2MCQs } from "@/lib/constants/sem-2/mcqs.constant";
import { sem3MCQs } from "@/lib/constants/sem-3/mcqs.constant";
import { sem2TimeTable } from "@/lib/constants/sem-2/time-table.constant";
import { sem3TimeTable } from "@/lib/constants/sem-3/time-table.constant";

export const useDataGetters = () => {
  const sem = useDataStore((state) => state.sem);
  const division = useDataStore((state) => state.division);

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

  // Get Specialization constant
  const getSpecializationMaterials = () => {
    if (sem === 2) return sem2specializationMaterials;
    if (sem === 3) return sem3specializationMaterials;
    return [];
  };

  const getMessageFormats = ({
    gender,
    type,
    date,
    slot,
    time,
    areYouPresent,
    reason,
  }: {
    gender: "male" | "female";
    type: "whatsapp" | "email";
    date: string;
    slot: string;
    reason: string;
    time: string;
    areYouPresent: boolean;
  }) => {
    if (type == "email")
      return `Respected ${gender == "female" ? "Ma'am" : "Sir"},

I hope you are doing well.

I would like to bring to your attention that I was marked absent for the ${slot} slot on (${date}, ${time}). ${
        areYouPresent ? "However, I was present in that lecture." : ""
      }

${reason ? `Reason: The reason I was absent because ${reason}` : ""}

Details:

Name: Aayush Pathak 

Enrollment No.: 2405112120135

Division: ${division}

Semester: MCA Sem-${sem}

Kindly request you to update the attendance accordingly.
Thank you for your understanding and support.

Best regards,
Aayush Pathak`;

    if (type == "whatsapp")
      return `Hello ${gender == "female" ? "Ma'am" : "Sir"},
I was marked absent today in the ${slot} slot (${time}), ${
        areYouPresent ? "However, I was present in that lecture." : ""
      }

${reason ? `Reason: The reason I was absent because ${reason}` : ""}

Date: ${date}
Name: Kacha Karan
Enrollment: 2405112120073
Division: ${division}, MCA Sem-${sem}

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
