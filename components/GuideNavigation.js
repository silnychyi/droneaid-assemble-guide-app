import { motion } from "motion/react";
import useMainStore from "@/store/useMainStore";
import guideData from "@/guide-data.json";

const GuideNavigation = () => {
  const { nextStep, previousStep, currentStep } = useMainStore();
  const { steps } = guideData;
  const totalSteps = steps.length;
  const isLastStep = currentStep === totalSteps - 1;
  const isFirstStep = currentStep === 0;

  return (
    <nav className="fixed bottom-0 left-0 right-0 p-4 bg-white">
      <div className="flex justify-between max-w-2xl mx-auto gap-4">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: isFirstStep ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          onClick={previousStep}
          className={`btn-primary w-full ${isFirstStep ? "opacity-0" : ""}`}
        >
          Back
        </motion.button>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: isLastStep ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          onClick={nextStep}
          className={`btn-primary w-full ${isLastStep ? "opacity-0" : ""}`}
        >
          Next step
        </motion.button>
      </div>
    </nav>
  );
};
export default GuideNavigation;
