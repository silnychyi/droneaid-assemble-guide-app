import { useEffect, useRef } from "react";
import useMainStore from "@/store/useMainStore";
import guideData from "@/guide-data.json";
import StepContent from "./StepContent";
import { motion, AnimatePresence } from "motion/react";

const GuideStep = () => {
  const { currentStep } = useMainStore();
  const { steps } = guideData;
  const step = steps[currentStep];
  const prevStepRef = useRef(currentStep);

  if (!step) return null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  useEffect(() => {
    prevStepRef.current = currentStep;
  }, [currentStep]);

  const direction = currentStep > prevStepRef.current ? 1 : -1;

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 20 : -20,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -20 : 20,
      opacity: 0,
    }),
  };

  return (
    <div className="flex flex-col gap-4">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentStep}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30, duration: 0.1 },
            opacity: { duration: 0.1 },
          }}
          className="flex flex-col gap-2"
        >
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold bg-gray-200 text-black">
              {currentStep + 1}
            </span>
            {step.title}
          </h2>
          <div className="mt-4">
            <StepContent content={step.content} />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
export default GuideStep;
