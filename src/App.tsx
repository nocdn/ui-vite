import { ArrowUpRight, Search } from "lucide-react";
import { useQueryState } from "nuqs";
import GetStartedView from "./views/GetStarted";
import ComponentDoc from "./views/ComponentDoc";

function App() {
  const [selectedItem, setSelectedItem] = useQueryState("selectedItem", {
    defaultValue: "Installation",
  });

  return (
    <>
      <div className="sticky top-0 z-10 bg-white h-14 flex items-center gap-6 px-5 text-sm font-inter antialiased font-[430] border-b border-gray-950/5">
        {/* <img src={logo} alt="logo" className="size-5.5" /> */}
        <p className="mr-auto">nocdn/ui</p>
        <div className="flex items-center gap-3 bg-gray-950/2 border border-gray-950/5 pl-2 pr-2.5 py-1.25 rounded-full cursor-pointer">
          <Search size={14} />
          <p className="text-xs">⌘ + K</p>
        </div>
        <p className="cursor-pointer">Docs</p>
        <p className="cursor-pointer">Components</p>
        <p className="flex items-center gap-1 cursor-pointer">
          Source{" "}
          <ArrowUpRight
            size={16}
            strokeWidth={2.15}
            className="translate-y-[1px]"
          />
        </p>
      </div>
      <div className="grid grid-cols-[290px_40px_1fr] w-full h-[calc(100vh-3.5rem)]">
        <div id="sidebar" className="px-5 pt-5 overflow-y-auto bg-white">
          <div className="flex flex-col gap-8">
            {/* Getting Started Section */}
            <div className="flex flex-col">
              <h3 className="font-jetbrains-mono text-[12px] leading-6 text-gray-500 mb-2 tracking-widest font-medium">
                GETTING STARTED
              </h3>
              <div className="flex flex-col gap-2 border-l border-gray-950/5">
                <button
                  onMouseDown={() => setSelectedItem("Installation")}
                  className={`text-left text-[14px] leading-6 font-inter pl-3 border-l cursor-pointer ${
                    selectedItem === "Installation"
                      ? "font-[550] border-gray-950/90 text-gray-950"
                      : "font-normal border-transparent text-gray-950/60"
                  }`}
                >
                  Installation
                </button>
                <button
                  onMouseDown={() => setSelectedItem("Compatibility")}
                  className={`text-left text-[14px] leading-6 font-inter pl-3 border-l cursor-pointer ${
                    selectedItem === "Compatibility"
                      ? "font-[550] border-gray-950/90 text-gray-950"
                      : "font-normal border-transparent text-gray-600"
                  }`}
                >
                  Compatibility
                </button>
                <button
                  onMouseDown={() => setSelectedItem("Upgrade guide")}
                  className={`text-left text-[14px] leading-6 font-inter pl-3 border-l cursor-pointer ${
                    selectedItem === "Upgrade guide"
                      ? "font-[550] border-gray-950/90 text-gray-950"
                      : "font-normal border-transparent text-gray-600"
                  }`}
                >
                  Upgrade guide
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
                  onMouseDown={() => setSelectedItem("Cornered Button")}
                  className={`text-left text-[14px] leading-6 font-inter pl-3 border-l cursor-pointer ${
                    selectedItem === "Cornered Button"
                      ? "font-[550] border-gray-950/90 text-gray-950"
                      : "font-normal border-transparent text-gray-600"
                  }`}
                >
                  Cornered Button
                </button>
                <button
                  onMouseDown={() => setSelectedItem("Animated Spinner")}
                  className={`text-left text-[14px] leading-6 font-inter pl-3 border-l cursor-pointer ${
                    selectedItem === "Animated Spinner"
                      ? "font-[550] border-gray-950/90 text-gray-950"
                      : "font-normal border-transparent text-gray-600"
                  }`}
                >
                  Animated Spinner
                </button>
                <button
                  onMouseDown={() => setSelectedItem("Reasoning Traces")}
                  className={`text-left text-[14px] leading-6 font-inter pl-3 border-l cursor-pointer ${
                    selectedItem === "Reasoning Traces"
                      ? "font-[550] border-gray-950/90 text-gray-950"
                      : "font-normal border-transparent text-gray-600"
                  }`}
                >
                  Reasoning Traces
                </button>
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="font-jetbrains-mono text-[12px] leading-6 text-gray-500 mb-2 tracking-widest font-medium">
                UPDATED PLANNED
              </h3>
              <div className="flex flex-col gap-2 border-l border-gray-950/5">
                <button
                  onMouseDown={() => setSelectedItem("Get in touch")}
                  className={`text-left text-[14px] leading-6 font-inter pl-3 border-l cursor-pointer ${
                    selectedItem === "Get in touch"
                      ? "font-[550] border-gray-950/90 text-gray-950"
                      : "font-normal border-transparent text-gray-600"
                  }`}
                >
                  Get in touch
                </button>
                <button
                  onMouseDown={() => setSelectedItem("Contributing")}
                  className={`text-left text-[14px] leading-6 font-inter pl-3 border-l cursor-pointer ${
                    selectedItem === "Contributing"
                      ? "font-[550] border-gray-950/90 text-gray-950"
                      : "font-normal border-transparent text-gray-600"
                  }`}
                >
                  Contributing
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-2 row-span-5 row-start-1 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10"></div>
        <div
          id="content"
          className="px-14 pt-10 overflow-y-auto bg-white overscroll-contain"
        >
          {selectedItem === "Installation" ? (
            <GetStartedView />
          ) : selectedItem === "Cornered Button" ? (
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
            />
          ) : selectedItem === "Animated Spinner" ? (
            <ComponentDoc
              componentName="Animated Spinner"
              description="A spinner (also called loader, throbber) element, inspired by the iOS default spinner. Used to indicate a loading state."
              installCode="bunx --bun shadcn@latest add https://ui.bartoszbak.org/r/spinner.json"
              usageCode={`import { Spinner } from '@/components/ui/spinner'

<Spinner />`}
              apiReference={[
                { prop: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
              ]}
            />
          ) : selectedItem === "Reasoning Traces" ? (
            <ComponentDoc
              componentName="Reasoning Traces"
              description="A component that displays reasoning traces (thoughts), for a large language model."
              comingSoon={true}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}

export default App;
