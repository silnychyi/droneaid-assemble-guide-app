import { motion, AnimatePresence } from "motion/react";
import { useRef, useEffect } from "react";
import useMainStore from "@/store/useMainStore";
import guideData from "@/guide-data.json";

const NavigationOverview = () => {
  const { showOverview, closeOverview, currentStep, setStep } = useMainStore();
  const { steps } = guideData;
  const currentStepRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (showOverview && currentStepRef.current && scrollContainerRef.current) {
      // Small delay to ensure the DOM is ready
      const timeoutId = setTimeout(() => {
        const container = scrollContainerRef.current;
        const stepElement = currentStepRef.current;

        if (!container || !stepElement) return;

        const containerRect = container.getBoundingClientRect();
        const stepRect = stepElement.getBoundingClientRect();

        const startScroll = container.scrollTop;
        const stepTop = stepRect.top - containerRect.top + startScroll;
        const stepHeight = stepRect.height;
        const containerHeight = containerRect.height;
        const targetScroll = stepTop - containerHeight / 2 + stepHeight / 2;

        const distance = targetScroll - startScroll;
        const duration = 300;
        const startTime = performance.now();

        const animateScroll = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // Ease-out cubic for smooth but fast animation
          const easeProgress = 1 - Math.pow(1 - progress, 3);

          container.scrollTop = startScroll + distance * easeProgress;

          if (progress < 1) {
            requestAnimationFrame(animateScroll);
          }
        };

        requestAnimationFrame(animateScroll);
      }, 50);

      return () => clearTimeout(timeoutId);
    }
  }, [showOverview, currentStep]);

  const handleStepClick = (stepIndex) => {
    setStep(stepIndex);
    closeOverview();
  };

  const getStepClass = (stepIndex) => {
    if (stepIndex === currentStep) return "bg-blue text-white font-semibold";
    if (stepIndex < currentStep) return "bg-blue-light text-black";
    return "bg-gray-50 hover:bg-gray-100";
  };

  const getStepIndexClass = (stepIndex) => {
    if (stepIndex === currentStep || stepIndex < currentStep)
      return "bg-white text-black";
    return "bg-gray-200 text-black";
  };

  return (
    <AnimatePresence>
      {showOverview && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeOverview}
            className="fixed inset-0 bg-black/50 z-40"
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-xl shadow-2xl z-50 max-h-[80dvh] overflow-hidden flex flex-col max-w-2xl mx-auto"
          >
            <div className="flex p-3 border-b-2 border-gray-200">
              <div className="flex items-center justify-between w-full">
                <h2 className="text-xl font-bold">Steps overview</h2>
                <button
                  onClick={closeOverview}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close overview"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div
              ref={scrollContainerRef}
              className="overflow-y-auto flex-1 p-4"
            >
              <div className="max-w-2xl mx-auto space-y-2">
                {steps.map((step, index) => (
                  <button
                    key={index}
                    ref={index === currentStep ? currentStepRef : null}
                    onClick={() => handleStepClick(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all ${getStepClass(
                      index
                    )}`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm ${getStepIndexClass(
                          index
                        )}`}
                      >
                        {index + 1}
                      </span>
                      <span className="flex-1">{step.title}</span>
                      {(index === currentStep || index < currentStep) && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NavigationOverview;
