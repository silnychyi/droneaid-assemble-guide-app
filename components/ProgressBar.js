import useMainStore from "@/store/useMainStore";
import guideData from "@/guide-data.json";
import { motion } from "motion/react";

const ProgressBar = () => {
  const { currentStep, openOverview } = useMainStore();
  const { steps } = guideData;
  const totalSteps = steps.length;
  const progress = Math.min(
    100,
    Math.max(5, ((currentStep + 1) / totalSteps) * 100)
  );

  return (
    <div className="fixed top-0 left-0 right-0 px-4 py-1 bg-white z-10">
      <div className="max-w-2xl mx-auto flex items-center gap-4">
        <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-yellow rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          />
        </div>
        <button
          onClick={openOverview}
          className="shrink-0 px-2 py-3 hover:bg-gray-100 transition-colors w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"
          aria-label="Open step overview"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default ProgressBar;
