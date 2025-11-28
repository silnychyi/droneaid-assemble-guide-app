import { create } from "zustand";
import guideData from "@/guide-data.json";

const maxStep = guideData.steps.length - 1;

const useMainStore = create((set) => ({
  currentStep: 0,
  showOverview: false,
  setCurrentStep: (step) => set({ currentStep: step }),
  nextStep: () =>
    set((state) => ({
      currentStep: Math.min(maxStep, state.currentStep + 1),
    })),
  previousStep: () =>
    set((state) => ({
      currentStep: Math.max(0, state.currentStep - 1),
    })),
  setStep: (step) => set({ currentStep: step }),
  openOverview: () => set({ showOverview: true }),
  closeOverview: () => set({ showOverview: false }),
}));

export default useMainStore;
