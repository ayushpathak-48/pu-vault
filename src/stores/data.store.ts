import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SpecializationState {
  specialization: string | null;
  setSpecialization: (value: string) => void;
}

export const useDataStore = create<SpecializationState>()(
  persist(
    (set) => ({
      specialization: null, // Default state
      setSpecialization: (value) => set({ specialization: value }),
    }),
    {
      name: "client-data", // Key for localStorage
    }
  )
);
