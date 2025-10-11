"use client";

import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedCircularButton } from "./AnimatedButton";
import { type CSSProperties } from "react";

interface TerminalCodeBlockProps {
  code: string;
  theme?: "light" | "dark";
  className?: string;
}

export function TerminalCodeBlock({
  code,
  theme = "dark",
  className,
}: TerminalCodeBlockProps) {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
  };

  // Simple syntax highlighting for terminal commands
  const highlightSyntax = (text: string) => {
    const tokens: { text: string; type: string }[] = [];
    let remaining = text;

    const patterns = [
      { regex: /(#.*$)/, type: "comment" },
      {
        regex:
          /\b(npm|npx|yarn|pnpm|git|cd|ls|mkdir|rm|cp|mv|cat|echo|sudo|brew|apt|apt-get|curl|wget)\b/,
        type: "command",
      },
      {
        regex:
          /(install|add|remove|run|build|dev|start|test|init|create|clone|push|pull|commit|checkout)/,
        type: "subcommand",
      },
      { regex: /(-{1,2}[a-zA-Z0-9-]+)/, type: "flag" },
      { regex: /(['"`])((?:\\.|(?!\1)[^\\])*)\1/, type: "string" },
      { regex: /(@[a-zA-Z0-9-_/]+)/, type: "package" },
    ];

    while (remaining.length > 0) {
      let matched = false;

      for (const { regex, type } of patterns) {
        const match = remaining.match(regex);
        if (match && match.index === 0) {
          tokens.push({ text: match[0], type });
          remaining = remaining.slice(match[0].length);
          matched = true;
          break;
        }
      }

      if (!matched) {
        tokens.push({ text: remaining[0], type: "text" });
        remaining = remaining.slice(1);
      }
    }

    return tokens;
  };

  const tokens = highlightSyntax(code);

  const emptyCellStripes: CSSProperties = {
    backgroundImage: `
      linear-gradient(to right, white 0%, rgba(255,255,255,0.85) 1%, transparent 5%, transparent 95%, rgba(255,255,255,0.85) 99%, white 100%),
      linear-gradient(to bottom, white 0%, rgba(255,255,255,0.85) 1.25%, transparent 2.5%, transparent 97.5%, rgba(255,255,255,0.85) 98.75%, white 100%),
      repeating-linear-gradient(135deg, rgba(59,130,246,0.025) 0px, rgba(59,130,246,0.025) 10px, transparent 10px, transparent 20px)
    `,
    backgroundBlendMode: "normal",
  };

  return (
    <div
      className={cn(
        "group relative rounded-lg border font-jetbrains-mono w-full text-sm pl-4.5 pr-3 py-2 flex items-center justify-between gap-3",
        theme === "dark"
          ? "bg-[#1C202A] border-[#606060] text-[#e4e4e7] inset-ring inset-ring-white/5"
          : "bg-[#fafafa81] border-[#e5e5e5] text-[#18181b]",
        className
      )}
      style={emptyCellStripes}
    >
      <code className="font-jetbrains-mono flex-1 overflow-x-auto whitespace-nowrap">
        {tokens.map((token, tokenIndex) => (
          <span
            key={tokenIndex}
            className={cn(
              token.type === "command" &&
                (theme === "dark" ? "text-[#c084fc]" : "text-[#9333ea]"),
              token.type === "subcommand" &&
                (theme === "dark" ? "text-[#60a5fa]" : "text-[#2563eb]"),
              token.type === "flag" &&
                (theme === "dark" ? "text-[#4ade80]" : "text-[#16a34a]"),
              token.type === "string" &&
                (theme === "dark" ? "text-[#fbbf24]" : "text-[#d97706]"),
              token.type === "package" &&
                (theme === "dark" ? "text-[#f472b6]" : "text-[#db2777]"),
              token.type === "comment" &&
                (theme === "dark" ? "text-[#71717a]" : "text-[#a1a1aa]")
            )}
          >
            {token.text}
          </span>
        ))}
      </code>

      <AnimatedCircularButton
        ariaLabel="Copy code"
        onClick={handleCopy}
        secondaryChildren={<Check className="h-4 w-4" />}
      >
        <Copy className="size-3.5" />
      </AnimatedCircularButton>
    </div>
  );
}
