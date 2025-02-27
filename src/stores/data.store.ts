import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SpecializationState {
  specialization: string | null;
  setSpecialization: (value: string) => void;
  division: string | null;
  setDivision: (value: string) => void;
}

export const useDataStore = create<SpecializationState>()(
  persist(
    (set, get) => ({
      specialization: get()?.specialization, // Default state
      setSpecialization: (value) => set({ specialization: value }),
      division: get()?.division, // Default state
      setDivision: (value) => set({ division: value }),
    }),
    {
      name: "client-data", // Key for localStorage
    }
  )
);
