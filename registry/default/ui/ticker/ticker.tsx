import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

export function Ticker({ text }: { text: string }) {
  const [currentText, setCurrentText] = useState<string>(text);

  useEffect(() => {
    setCurrentText(text);
  }, [text]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10, filter: "blur(1px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -10, filter: "blur(1px)" }}
      className="text-sm text-gray-500 mt-1 font-jetbrains-mono font-medium mb-3 flex items-center"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText}
          initial={{ opacity: 0, filter: "blur(1px)", y: -3 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          exit={{ opacity: 0, filter: "blur(1px)", y: 3 }}
          transition={{ duration: 0.15, ease: "easeInOut" }}
          className="text-black dark:text-gray-200 ml-1.5"
        >
          {currentText}
        </motion.span>
      </AnimatePresence>
    </motion.div>
  );
}
