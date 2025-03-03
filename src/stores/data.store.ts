import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SpecializationState {
  specialization: string;
  setSpecialization: (value: string) => void;
  division: string;
  setDivision: (value: string) => void;
}

export const useDataStore = create<SpecializationState>()(
  persist(
    (set, get) => ({
      specialization: get()?.specialization || "ai", // Default state
      setSpecialization: (value) => set({ specialization: value }),
      division: get()?.division || "div_a", // Default state
      setDivision: (value) => set({ division: value }),
    }),
    {
      name: "client-data", // Key for localStorage
    }
  )
);
