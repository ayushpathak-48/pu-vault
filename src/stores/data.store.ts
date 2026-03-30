/* eslint-disable @typescript-eslint/no-explicit-any */
import { CourseType } from "@/lib/constants";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type UserType = { name: string; enrollment: string };
export type ProjectMemberType = {
  name: string;
  enrollment: string;
  mobile: string;
  program: string;
};

export type ProjectType = {
  s_no: number;
  members: Array<ProjectMemberType>;
  project_title: string;
  project_description: string;
  front_end: string;
  back_end: string;
};
export type ProjectDetailsType = {
  company_name: string;
  address: string;
  website: string;
  contact: string;
  mentor: string;
  internal_guide: string;
  projects: Array<ProjectType>;
};

export type ExamDetailsType = {
  "Group ID": string;
  Members: [
    {
      Name: string;
      Enrollment: string;
    },
  ];
  Project_Title: string;
  "Reporting Time": string;
  "External Examiner": string;
};

interface SpecializationState {
  user: UserType;
  setUser: (value: UserType) => void;
  specialization: string;
  setSpecialization: (value: string) => void;
  division: string;
  setDivision: (value: string) => void;
  course: CourseType;
  setCourse: (value: CourseType) => void;
  sem: number | null;
  setSem: (value: number) => void;
  color: string;
  setColor: (value: string) => void;
  bottomTabsEnabled: boolean;
  setBottomTabsEnabled: (value: boolean) => void;
  projectDetails: ProjectDetailsType[] | null;
  setProjectDetails: (value: ProjectDetailsType[]) => void;
  examDetails: ExamDetailsType[] | null;
  setExamDetails: (value: ExamDetailsType[]) => void;
  hydrated: boolean; // NEW state to track hydration
}

export const useDataStore = create<SpecializationState>()(
  persist(
    (set, get) => ({
      user: get()?.user,
      setUser: (value) => set({ user: value }),
      specialization: get()?.specialization || "ai",
      setSpecialization: (value) => set({ specialization: value }),
      division: get()?.division || "div_a",
      setDivision: (value) => set({ division: value }),
      course: get()?.course || "mca",
      setCourse: (value) => set({ course: value }),
      sem: get()?.sem || 3,
      setSem: (value) => set({ sem: value }),
      color: get()?.color || "blue",
      setColor: (value) => set({ color: value }),
      bottomTabsEnabled: get()?.bottomTabsEnabled || true,
      setBottomTabsEnabled: (value) => set({ bottomTabsEnabled: value }),
      projectDetails: get()?.projectDetails || null,
      setProjectDetails: (value) => set({ projectDetails: value }),
      examDetails: get()?.examDetails || null,
      setExamDetails: (value) => set({ examDetails: value }),
      hydrated: false,
    }),
    {
      name: "client-data",
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hydrated = true;
        }
      },
    },
  ),
);
