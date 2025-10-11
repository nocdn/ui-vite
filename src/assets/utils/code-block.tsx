"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedCircularButton } from "./AnimatedButton";

interface CodeBlockProps {
  code: string;
  language?: string;
  theme?: "light" | "dark";
  showLineNumbers?: boolean;
  filename?: string;
  className?: string;
  wrap?: boolean;
}

export function CodeBlock({
  code,
  language = "tsx",
  theme = "dark",
  showLineNumbers = true,
  filename,
  className,
  wrap = true,
}: CodeBlockProps) {
  const [_copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split("\n");

  // Simple syntax highlighting for common patterns
  const highlightSyntax = (line: string) => {
    const tokens: { text: string; type: string }[] = [];
    let remaining = line;

    // Patterns for syntax highlighting
    const patterns = [
      { regex: /(\/\/.*$)/, type: "comment" },
      { regex: /('use client'|'use server')/, type: "directive" },
      {
        regex:
          /\b(import|export|from|const|let|var|function|return|if|else|for|while|class|interface|type|async|await|new|try|catch|throw)\b/,
        type: "keyword",
      },
      { regex: /\b(true|false|null|undefined)\b/, type: "boolean" },
      { regex: /\b(\d+)\b/, type: "number" },
      { regex: /(['"`])((?:\\.|(?!\1)[^\\])*)\1/, type: "string" },
      {
        regex: /([<>{}()[\];,.]|=>|===|==|!==|!=|&&|\|\||[+\-*/%=])/,
        type: "operator",
      },
      { regex: /\b([A-Z][a-zA-Z0-9]*)\b/, type: "component" },
      {
        regex: /\b(useState|useEffect|useCallback|useMemo|useRef|useContext)\b/,
        type: "hook",
      },
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

  return (
    <div
      className={cn(
        "relative rounded-lg overflow-hidden border font-jetbrains-mono text-sm",
        theme === "dark"
          ? "bg-[#0a0a0a] border-[#2a2a2a] text-[#e4e4e7]"
          : "bg-[#fafafa81] border-[#e5e5e5] text-[#18181b]",
        className
      )}
    >
      {/* Header with filename and copy button */}
      <div
        className={cn(
          "flex items-center justify-between pl-4 pr-3 py-1.5 border-b",
          theme === "dark"
            ? "border-[#2a2a2a] bg-[#0f0f0f]"
            : "border-[#e5e5e5] bg-[#FAFBFB]"
        )}
      >
        <div className="flex items-center gap-2">
          {filename && (
            <span
              className={cn(
                "text-xs font-medium font-jetbrains-mono",
                theme === "dark" ? "text-[#a1a1aa]" : "text-[#71717a]"
              )}
            >
              {filename}
            </span>
          )}
          {language && (
            <span
              className={cn(
                "text-xs px-2 py-0.5 rounded font-jetbrains-mono",
                theme === "dark"
                  ? "bg-[#1a1a1a] text-[#71717a]"
                  : "bg-[#e5e5e5] text-[#52525b]"
              )}
            >
              {language}
            </span>
          )}
        </div>

        <AnimatedCircularButton
          ariaLabel="Copy code"
          onClick={handleCopy}
          secondaryChildren={<Check className="h-4 w-4" />}
        >
          <Copy className="size-3.5" />
        </AnimatedCircularButton>
      </div>

      {/* Code content */}
      <div className="overflow-x-auto">
        <div className="p-4">
          <pre
            className={
              wrap ? "whitespace-pre-wrap break-words" : "whitespace-pre"
            }
          >
            {lines.map((line, lineIndex) => {
              const tokens = highlightSyntax(line);
              return (
                <div key={lineIndex} className="flex">
                  {showLineNumbers && (
                    <span
                      className={cn(
                        "select-none inline-block w-3.5 text-right mr-4 flex-shrink-0",
                        theme === "dark" ? "text-[#3f3f46]" : "text-[#a1a1aa]"
                      )}
                    >
                      {lineIndex + 1}
                    </span>
                  )}
                  <code className="flex-1">
                    {tokens.map((token, tokenIndex) => (
                      <span
                        key={tokenIndex}
                        className={cn(
                          token.type === "keyword" &&
                            (theme === "dark"
                              ? "text-[#c084fc]"
                              : "text-[#9333ea]"),
                          token.type === "string" &&
                            (theme === "dark"
                              ? "text-[#4ade80]"
                              : "text-[#16a34a]"),
                          token.type === "comment" &&
                            (theme === "dark"
                              ? "text-[#71717a]"
                              : "text-[#a1a1aa]"),
                          token.type === "number" &&
                            (theme === "dark"
                              ? "text-[#fb923c]"
                              : "text-[#ea580c]"),
                          token.type === "boolean" &&
                            (theme === "dark"
                              ? "text-[#fb923c]"
                              : "text-[#ea580c]"),
                          token.type === "component" &&
                            (theme === "dark"
                              ? "text-[#60a5fa]"
                              : "text-[#2563eb]"),
                          token.type === "hook" &&
                            (theme === "dark"
                              ? "text-[#f472b6]"
                              : "text-[#db2777]"),
                          token.type === "directive" &&
                            (theme === "dark"
                              ? "text-[#a78bfa]"
                              : "text-[#7c3aed]"),
                          token.type === "operator" &&
                            (theme === "dark"
                              ? "text-[#e4e4e7]"
                              : "text-[#3f3f46]")
                        )}
                      >
                        {token.text}
                      </span>
                    ))}
                  </code>
                </div>
              );
            })}
          </pre>
        </div>
      </div>
    </div>
  );
}
