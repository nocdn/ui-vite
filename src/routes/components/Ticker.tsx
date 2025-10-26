import { useEffect, useState } from "react";
import ComponentLayout from "./ComponentLayout";
import { Ticker } from "../../../registry/default/ui/ticker/ticker";

export default function TickerDocs() {
  const installCode =
    "bunx --bun shadcn@latest add https://ui.bartoszbak.org/r/ticker.json";
  const usageCode = `import { Ticker } from '@/components/ui/ticker'

<Ticker text="Shawshank Redemption (1994)" />`;

  const apiReference = [
    { prop: "className", type: "string", default: "-" },
    { prop: "text", type: "string", default: "-" },
  ];

  const texts = [
    "Shawshank Redemption (1994)",
    "Rye Lane (2023)",
    "Fight Club (1999)",
    "Hijack (2023)",
    "Snowden (2016)",
    "About Time (2013)",
  ];
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 1500);
    return () => clearInterval(id);
  }, []);

  return (
    <ComponentLayout
      componentName="Animated Ticker"
      description="A status ticker that animates nicely when changed."
      installCode={installCode}
      usageCode={usageCode}
      apiReference={apiReference}
      frameScale="160"
      previewChildren={
        <div className="flex flex-col justify-center items-center">
          <Ticker text={texts[currentIndex]} />
        </div>
      }
    />
  );
}
