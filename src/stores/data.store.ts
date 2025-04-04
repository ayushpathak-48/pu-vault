import { CourseType } from "@/lib/constants";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SpecializationState {
  specialization: string;
  setSpecialization: (value: string) => void;
  division: string;
  setDivision: (value: string) => void;
  course: CourseType;
  setCourse: (value: CourseType) => void;
  hydrated: boolean; // NEW state to track hydration
}

export const useDataStore = create<SpecializationState>()(
  persist(
    (set, get) => ({
      specialization: get()?.specialization || "ai",
      setSpecialization: (value) => set({ specialization: value }),
      division: get()?.division || "div_a",
      setDivision: (value) => set({ division: value }),
      course: get()?.course,
      setCourse: (value) => set({ course: value }),
      hydrated: false, // Initially false
    }),
    {
      name: "client-data",
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hydrated = true; // Update hydration state when done
        }
      },
    },
  ),
);
