import { TerminalCodeBlock } from "@/assets/utils/terminal-code-block";
import { CodeBlock } from "@/assets/utils/code-block";

export default function ComponentDoc({
  componentName = "Component Name",
  description = "Displays a button or a component that looks like a button.",
}: {
  componentName: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl pb-24">
      <p className="font-jetbrains-mono text-[12px] leading-6 tracking-widest text-gray-600 font-semibold">
        COMPONENTS
      </p>
      <p className="font-geist text-3xl leading-6 font-medium mt-3">
        {componentName}
      </p>
      <p className="mt-6 font-geist text-[#737373] leading-7 font-[420]">
        {description}
      </p>
      <div className="flex flex-col gap-4 mt-12">
        <div className="flex items-center gap-4 font-geist text-[16px] *:cursor-pointer font-medium">
          <p>Preview</p>
          <p className="opacity-60">Code</p>
        </div>
        <div
          id="frame"
          className="rounded-lg max-w-2xl h-96 border border-gray-200 p-1 bg-gray-50/50 mb-3"
        >
          <div className="rounded-[7px] w-full h-full border border-gray-200 bg-white grid place-items-center">
            <div className="flex items-center gap-10 scale-150"></div>
          </div>
        </div>
      </div>
      <p className="mt-6 font-jetbrains-mono text-[12px] leading-6 tracking-widest text-gray-600 font-semibold">
        INSTALLATION:
      </p>
      <TerminalCodeBlock
        code="bunx --bun shadcn@latest add https://ui.bartoszbak.org/r/cornered-button.json"
        theme="light"
        className="mt-4"
      />
      <p className="mt-6 font-jetbrains-mono text-[12px] leading-6 tracking-widest text-gray-600 font-semibold">
        USAGE:
      </p>
      <CodeBlock
        code={`import { CorneredButton } from '@/components/ui/cornered-button'

<CorneredButton
  cornerColor="red"
  cornerSize={7}
  borderWidth={2}
  className="font-mono cursor-pointer"
>
  NEXT
</CorneredButton>`}
        theme="light"
        className="mt-4"
      />

      <p className="mt-6 font-jetbrains-mono text-[12px] leading-6 tracking-widest text-gray-600 font-semibold">
        API REFERENCE:
      </p>
    </div>
  );
}
