import {
  Link2,
  Unlink2,
  ArrowUpRight,
  Copy,
  MoveRight,
  Search,
  Check,
} from "lucide-react";
import { useQueryState } from "nuqs";
import InstallationView from "./views/Installation";
import ComponentDoc from "./routes/components/ComponentLayout";
import IntroductionView from "./views/Introduction";
import CompatibilityView from "./views/Compatibility";

import { CorneredButton } from "../registry/default/ui/cornered-button/cornered-button";
import { AnimatedButton } from "../registry/default/ui/animated-button/animated-button";
import { Spinner } from "../registry/default/ui/spinner/spinner";
import { Ticker } from "../registry/default/ui/ticker/ticker";
import { useEffect, useState } from "react";

function corneredButtonExample() {
  return (
    <>
      <CorneredButton
        cornerColor="red"
        cornerSize={7}
        borderWidth={2}
        className="font-jetbrains-mono cursor-pointer"
      >
        NEXT
      </CorneredButton>
      <CorneredButton
        cornerColor="gray"
        cornerSize={7}
        borderWidth={2}
        className="font-jetbrains-mono cursor-pointer"
      >
        <Check strokeWidth={2.5} className="text-gray-500" size={18} />
      </CorneredButton>
    </>
  );
}

function animatedButtonExample() {
  return (
    <div className="flex flex-col gap-4 text-[14px]">
      <div className="flex items-center gap-4 font-geist font-[430]">
        <span className="opacity-30 -translate-y-[1px]">Copy Animation</span>
        <MoveRight strokeWidth={1.25} className="opacity-20 mr-0.25" />
        <AnimatedButton
          className="size-4.5 cursor-pointer"
          secondaryChildren={<Check />}
          ariaLabel="Copy"
        >
          <Copy className="size-4" />
        </AnimatedButton>
      </div>
      <div className="flex items-center gap-4 font-geist font-[430]">
        <span className="opacity-30 -translate-y-[1px]">Link animation</span>
        <MoveRight strokeWidth={1.25} className="opacity-20 mr-0.25" />
        <AnimatedButton
          className="size-4.5 cursor-pointer"
          secondaryChildren={<Unlink2 />}
          ariaLabel="Copy"
        >
          <Link2 />
        </AnimatedButton>
      </div>
    </div>
  );
}

function spinnerExample() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Spinner color="black" size={24} />
      <Spinner color="black" variant="small" size={16} />
      <Spinner color="black" variant="tiny" size={12} />
    </div>
  );
}

function TickerExample() {
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
    <div className="flex flex-col justify-center items-center">
      <Ticker text={texts[currentIndex]} />
    </div>
  );
}

function App() {
  const [selectedItem, setSelectedItem] = useQueryState("item", {
    defaultValue: "introduction",
  });

  return (
    <>
      <div className="sticky top-0 z-10 bg-gray-50/35 h-14 flex items-center gap-6 px-5 text-sm font-inter antialiased font-[430] border-b border-gray-950/5">
        <p
          className="mr-auto cursor-pointer group"
          onClick={() => setSelectedItem("introduction")}
        >
          nocdn
          <span className="group-hover:mx-1.5 mx-0.5 transition-all duration-200 ease-[cubic-bezier(0.19,1,0.22,1)]">
            /
          </span>
          ui
        </p>
        <div className="flex items-center gap-3 bg-gray-950/2 border border-gray-950/5 pl-2 pr-2.5 py-1.25 rounded-full cursor-pointer">
          <Search size={14} />
          <p className="text-xs">⌘ + K</p>
        </div>
        <p
          className="cursor-pointer"
          onClick={() => setSelectedItem("installation")}
        >
          Docs
        </p>
        <p
          className="cursor-pointer"
          onClick={() => setSelectedItem("cornered-button")}
        >
          Components
        </p>
        <a
          href="https://github.com/nocdn/ui-vite"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 cursor-pointer"
        >
          Source{" "}
          <ArrowUpRight
            size={16}
            strokeWidth={2.15}
            className="translate-y-[1px]"
          />
        </a>
      </div>
      <div className="grid grid-cols-[290px_40px_1fr] w-full h-[calc(100vh-3.5rem)]">
        <div id="sidebar" className="px-5 pt-5 overflow-y-auto bg-gray-50/35">
          <div className="flex flex-col gap-8">
            {/* Getting Started Section */}
            <div className="flex flex-col">
              <h3 className="font-jetbrains-mono text-[12px] leading-6 text-gray-500 mb-2 tracking-widest font-medium">
                GETTING STARTED
              </h3>
              <div className="flex flex-col gap-2 border-l border-gray-950/5">
                <button
                  onMouseDown={() => setSelectedItem("introduction")}
                  className={`text-left text-[14px] leading-6 font-inter pl-3 border-l cursor-pointer ${
                    selectedItem === "introduction"
                      ? "font-[550] border-blue-800/90 text-blue-900/90"
                      : "font-normal border-transparent text-gray-950/60"
                  }`}
                >
                  Introduction
                </button>
                <button
                  onMouseDown={() => setSelectedItem("installation")}
                  className={`text-left text-[14px] leading-6 font-inter pl-3 border-l cursor-pointer ${
                    selectedItem === "installation"
                      ? "font-[550] border-blue-800/90 text-blue-900/90"
                      : "font-normal border-transparent text-gray-950/60"
                  }`}
                >
                  Installation
                </button>
                <button
                  onMouseDown={() => setSelectedItem("compatibility")}
                  className={`text-left text-[14px] leading-6 font-inter pl-3 border-l cursor-pointer ${
                    selectedItem === "compatibility"
                      ? "font-[550] border-blue-800/90 text-blue-900/90"
                      : "font-normal border-transparent text-gray-600"
                  }`}
                >
                  Compatibility
                </button>
              </div>
            </div>

            {/* Components Section */}
            <div className="flex flex-col">
              <h3 className="font-jetbrains-mono text-[12px] leading-6 text-gray-500 mb-2 tracking-widest font-medium">
                COMPONENTS
              </h3>
              <div className="flex flex-col gap-2 border-l border-gray-950/5">
                <button
                  onMouseDown={() => setSelectedItem("cornered-button")}
                  className={`text-left text-[14px] leading-6 font-inter pl-3 border-l cursor-pointer ${
                    selectedItem === "cornered-button"
                      ? "font-[550] border-blue-800/90 text-blue-900/90"
                      : "font-normal border-transparent text-gray-600"
                  }`}
                >
                  Cornered Button
                </button>
                <button
                  onMouseDown={() => setSelectedItem("copy-button")}
                  className={`text-left text-[14px] leading-6 font-inter pl-3 border-l cursor-pointer ${
                    selectedItem === "copy-button"
                      ? "font-[550] border-blue-800/90 text-blue-900/90"
                      : "font-normal border-transparent text-gray-600"
                  }`}
                >
                  Copy Button
                </button>
                <button
                  onMouseDown={() => setSelectedItem("ticker")}
                  className={`text-left text-[14px] leading-6 font-inter pl-3 border-l cursor-pointer ${
                    selectedItem === "ticker"
                      ? "font-[550] border-blue-800/90 text-blue-900/90"
                      : "font-normal border-transparent text-gray-600"
                  }`}
                >
                  Animated Ticker
                </button>
                <button
                  onMouseDown={() => setSelectedItem("corner-banner")}
                  className={`text-left text-[14px] leading-6 font-inter pl-3 border-l cursor-pointer ${
                    selectedItem === "corner-banner"
                      ? "font-[550] border-blue-800/90 text-blue-900/90"
                      : "font-normal border-transparent text-gray-600"
                  }`}
                >
                  Corner Banner
                </button>
                <button
                  onMouseDown={() => setSelectedItem("reasoning-traces")}
                  className={`text-left text-[14px] leading-6 font-inter pl-3 border-l cursor-pointer ${
                    selectedItem === "reasoning-traces"
                      ? "font-[550] border-blue-800/90 text-blue-900/90"
                      : "font-normal border-transparent text-gray-600"
                  }`}
                >
                  Reasoning Traces
                </button>
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="font-jetbrains-mono text-[12px] leading-6 text-gray-500 mb-2 tracking-widest font-medium">
                CONTACT
              </h3>
              <div className="flex flex-col gap-2 border-l border-gray-950/5">
                <button
                  onMouseDown={() => setSelectedItem("get-in-touch")}
                  className={`text-left text-[14px] leading-6 font-inter pl-3 border-l cursor-pointer ${
                    selectedItem === "get-in-touch"
                      ? "font-[550] border-blue-800/90 text-blue-900/90"
                      : "font-normal border-transparent text-gray-600"
                  }`}
                >
                  Get in touch
                </button>
                <button
                  onMouseDown={() => setSelectedItem("contributing")}
                  className={`text-left text-[14px] leading-6 font-inter pl-3 border-l cursor-pointer ${
                    selectedItem === "contributing"
                      ? "font-[550] border-blue-800/90 text-blue-900/90"
                      : "font-normal border-transparent text-gray-600"
                  }`}
                >
                  Contributing
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-2 row-span-5 row-start-1 border-x border-x-(--pattern-fg) bg-gray-50/35 bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10"></div>
        <div
          id="content"
          className="px-14 pt-10 overflow-y-auto bg-gray-50/35 overscroll-contain"
        >
          {selectedItem === "introduction" ? (
            <IntroductionView />
          ) : selectedItem === "installation" ? (
            <InstallationView />
          ) : selectedItem === "compatibility" ? (
            <CompatibilityView />
          ) : selectedItem === "cornered-button" ? (
            <ComponentDoc
              componentName="Cornered Button"
              description="This is a button, inspired by @aliszu, with a border and darker corners. Customiseable with props, adheres to shadcn/ui styling with accessibility in mind, with button semantics and keyboard navigation."
              installCode="bunx --bun shadcn@latest add https://ui.bartoszbak.org/r/cornered-button.json"
              usageCode={`import { CorneredButton } from '@/components/ui/cornered-button'

<CorneredButton
  cornerColor='red'
  cornerSize={7}
  borderWidth={2}
  className='font-mono cursor-pointer'
  >
  NEXT
</CorneredButton>`}
              apiReference={[
                { prop: "asChild", type: "boolean", default: "false" },
                { prop: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
                {
                  prop: "variant",
                  type: '"default" | "outline" | "ghost" | "destructive"',
                  default: '"default"',
                },
                { prop: "corners", type: '"on" | "off"', default: '"on"' },
                { prop: "borderWidth", type: "number", default: "1" },
                { prop: "cornerSize", type: "number", default: "8" },
                {
                  prop: "cornerColor",
                  type: "string",
                  default: "hsl(var(--border))",
                },
                {
                  prop: "type",
                  type: '"button" | "submit" | "reset"',
                  default: '"button"',
                },
                { prop: "className", type: "string", default: "-" },
                { prop: "style", type: "React.CSSProperties", default: "-" },
                { prop: "children", type: "React.ReactNode", default: "-" },
              ]}
              previewChildren={corneredButtonExample()}
            />
          ) : selectedItem === "spinner" ? (
            <ComponentDoc
              componentName="Animated Spinner"
              description="A spinner (also called loader, throbber) element, inspired by the iOS default spinner. Used to indicate a loading state."
              installCode="bunx --bun shadcn@latest add https://ui.bartoszbak.org/r/spinner.json"
              usageCode={`import { Spinner } from '@/components/ui/spinner'

<Spinner />`}
              apiReference={[
                {
                  prop: "size",
                  type: '"normal" | "small" | "tiny"',
                  default: '"md"',
                },
              ]}
              previewChildren={spinnerExample()}
            />
          ) : selectedItem === "reasoning-traces" ? (
            <ComponentDoc
              componentName="Reasoning Traces"
              description="A component that displays reasoning traces (thoughts), for a large language model."
              comingSoon={true}
            />
          ) : selectedItem === "copy-button" ? (
            <ComponentDoc
              componentName="Copy Button"
              description="A button that smoothly transitions between it's two child states."
              installCode="bunx --bun shadcn@latest add https://ui.bartoszbak.org/r/animated-button.json"
              usageCode={`import { AnimatedButton } from '@/components/ui/animated-button'
import { Copy, Check } from 'lucide-react'

<AnimatedButton
  className='size-4.5'
  secondaryChildren={<Check />}
  ariaLabel='Copy'
>
  <Copy className='size-4' />
</AnimatedButton>`}
              apiReference={[
                { prop: "className", type: "string", default: "-" },
                { prop: "children", type: "React.ReactNode", default: "-" },
                {
                  prop: "secondaryChildren",
                  type: "React.ReactNode",
                  default: "-",
                },
                { prop: "onClick", type: "() => void", default: "-" },
                { prop: "ariaLabel", type: "string", default: "-" },
              ]}
              previewChildren={animatedButtonExample()}
              frameScale={"160"}
            />
          ) : selectedItem === "corner-banner" ? (
            <ComponentDoc
              componentName="Corner Banner"
              description="A banner that is anchored to the corner of a component. Follows accessibility guidelines."
              comingSoon={true}
            />
          ) : selectedItem === "ticker" ? (
            <ComponentDoc
              componentName="Animated Ticker"
              description="A status ticker that animates nicely when changed."
              installCode="bunx --bun shadcn@latest add https://ui.bartoszbak.org/r/ticker.json"
              usageCode={`import { Ticker } from '@/components/ui/ticker'

<Ticker text="Shawshank Redemption (1994)" />`}
              apiReference={[
                { prop: "className", type: "string", default: "-" },
                { prop: "text", type: "string", default: "-" },
              ]}
              previewChildren={<TickerExample />}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}

export default App;
