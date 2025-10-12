import { useState, cloneElement, isValidElement } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export function AnimatedButton({
  children,
  secondaryChildren,
  className,
  onClick,
  ariaLabel,
}: {
  children: React.ReactNode;
  secondaryChildren?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  ariaLabel: string;
}) {
  const [isShowingSecondary, setIsShowingSecondary] = useState(false);

  const clonedChildren = isValidElement(children)
    ? cloneElement(children, {
        className: cn(className, (children.props as any).className),
      } as any)
    : children;

  const clonedSecondaryChildren =
    secondaryChildren && isValidElement(secondaryChildren)
      ? cloneElement(secondaryChildren, {
          className: cn(className, (secondaryChildren.props as any).className),
        } as any)
      : secondaryChildren;

  return (
    <motion.button
      tabIndex={0}
      aria-label={ariaLabel}
      className={cn(
        "group flex shrink-0 cursor-pointer items-center justify-center",
        className
      )}
      onClick={() => {
        if (!isShowingSecondary) {
          setIsShowingSecondary(!isShowingSecondary);
          onClick?.();
          setTimeout(() => {
            setIsShowingSecondary(false);
          }, 1000);
        }
      }}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        {isShowingSecondary ? (
          <motion.div
            key="secondary"
            initial={{ opacity: 0, scale: 0.2, filter: "blur(2px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.2, filter: "blur(2px)" }}
          >
            {clonedSecondaryChildren}
          </motion.div>
        ) : (
          <motion.div
            key="primary"
            initial={{ opacity: 0, scale: 0.2, filter: "blur(2px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.2, filter: "blur(2px)" }}
          >
            {clonedChildren}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
