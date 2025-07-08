/* eslint-disable @typescript-eslint/no-explicit-any */
import { CourseType } from "@/lib/constants";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SpecializationState {
  user: string;
  setUser: (value: string) => void;
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
      course: get()?.course,
      setCourse: (value) => set({ course: value }),
      sem: null,
      setSem: (value) => set({ sem: value }),
      color: get()?.color || "blue",
      setColor: (value) => set({ color: value }),
      bottomTabsEnabled: get()?.bottomTabsEnabled || true,
      setBottomTabsEnabled: (value) => set({ bottomTabsEnabled: value }),

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
