import React from "react";

type SpinnerVariant = "normal" | "small" | "tiny";

export function Spinner({
  color = "hsl(var(--border))",
  size = 20,
  variant = "normal",
  speed = 1,
}: {
  color?: string;
  size?: number;
  variant?: SpinnerVariant;
  speed?: number;
}) {
  const configByVariant: Record<
    SpinnerVariant,
    {
      count: number;
      barWidthPct: number;
      barHeightPct: number;
      /** The base distance for the bars from the center, used for scaling. */
      baseTranslatePct: number;
    }
  > = {
    normal: {
      count: 12,
      barWidthPct: 24,
      barHeightPct: 8,
      baseTranslatePct: 146,
    },
    small: {
      count: 8,
      barWidthPct: 28,
      barHeightPct: 10,
      baseTranslatePct: 146,
    },
    tiny: {
      count: 8,
      barWidthPct: 32,
      barHeightPct: 11,
      baseTranslatePct: 120,
    },
  };

  const { count, barWidthPct, barHeightPct, baseTranslatePct } =
    configByVariant[variant];

  // --- Dynamic Translation Logic ---
  // The goal is to scale the distance of the bars from the center based on the spinner's size.
  const DEFAULT_SIZE = 20;

  // 1. A multiplier is calculated by normalizing the current size against the default size.
  //    This makes the scaling proportional (at size=20, multiplier=1).
  //    The multiplier is clamped to a realistic range to prevent visual glitches at extreme sizes.
  const sizeMultiplier = Math.max(0.75, Math.min(2.5, size / DEFAULT_SIZE));

  // 2. The final translation is the variant's base value scaled by the multiplier.
  const translatePct = baseTranslatePct * sizeMultiplier;

  const items = Array(count).fill(0);
  const clampedSpeed = Math.max(0.1, speed);
  const baseDuration = 1.2;
  const totalDuration = baseDuration / clampedSpeed;
  const step = totalDuration / count;

  return (
    <div
      className="h-[var(--spinner-size,20px)] w-[var(--spinner-size,20px)]"
      style={
        {
          "--spinner-size": `${size}px`,
          "--spinner-color": color,
        } as React.CSSProperties
      }
    >
      <div className="relative top-1/2 left-1/2 h-full w-full">
        {items.map((_, i) => {
          const angle = i * (360 / count);
          const delay = -totalDuration + i * step;
          return (
            <div
              key={`spinner-bar-${i}`}
              className={`absolute left-[-10%] top-[-3.9%] rounded-[6px] bg-[var(--spinner-color)]`}
              style={
                {
                  height: `${barHeightPct}%`,
                  width: `${barWidthPct}%`,
                  transform: `rotate(${angle}deg) translate(${translatePct}%)`,
                  animationDelay: `${delay}s`,
                  animationName: "spinner-fade",
                  animationTimingFunction: "linear",
                  animationIterationCount: "infinite",
                  animationDuration: `${totalDuration}s`,
                } as React.CSSProperties
              }
            />
          );
        })}
      </div>
      <style>{`@keyframes spinner-fade { 0% { opacity: 1; } 100% { opacity: 0.15; } }`}</style>
    </div>
  );
}
