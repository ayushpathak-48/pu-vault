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
    (set) => ({
      specialization: null, // Default state
      setSpecialization: (value) => set({ specialization: value }),
      division: null, // Default state
      setDivision: (value) => set({ division: value }),
    }),
    {
      name: "client-data", // Key for localStorage
    }
  )
);
