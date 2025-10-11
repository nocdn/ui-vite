import { TerminalCodeBlock } from "@/assets/utils/terminal-code-block";
import { CodeBlock } from "@/assets/utils/code-block";

export default function ComponentDoc({
  componentName = "Component Name",
  description = "Displays a button or a component that looks like a button.",
  installCode = "bunx --bun shadcn@latest add https://ui.bartoszbak.org/r/cornered-button.json",
  usageCode = 'import { CorneredButton } from \'@/components/ui/cornered-button\'\n\n<CorneredButton\n  cornerColor="red"\n  cornerSize={7}\n  borderWidth={2}\n  className="font-mono cursor-pointer"\n>\n  NEXT\n</CorneredButton>',
  apiReference,
  previewChildren,
  comingSoon = false,
}: {
  componentName: string;
  description: string;
  installCode?: string;
  usageCode?: string;
  apiReference?: {
    prop: string;
    type: string;
    default: string;
  }[];
  previewChildren?: React.ReactNode;
  comingSoon?: boolean;
}) {
  return (
    <div className="max-w-3xl pb-12">
      <p
        className={`font-jetbrains-mono text-[12px] leading-6 tracking-widest ${
          comingSoon ? "text-blue-600" : "text-gray-600"
        } font-semibold`}
      >
        {comingSoon ? "COMING SOON" : "COMPONENTS"}
      </p>
      <p className="font-geist text-3xl leading-6 font-medium mt-3">
        {componentName}
      </p>
      <p className="mt-6 font-geist text-[#737373] leading-7 font-[420]">
        {description}
      </p>
      {!comingSoon && (
        <>
          <div className="flex flex-col gap-4 mt-12">
            <div className="flex items-center gap-4 font-geist text-[16px] *:cursor-pointer font-medium">
              <p>Preview</p>
              <p className="opacity-60">Code</p>
            </div>
            <div
              id="frame"
              className="rounded-lg max-w-3xl h-96 border border-gray-200 p-1 bg-gray-50/50 mb-3"
            >
              <div className="rounded-[7px] w-full h-full border bg-white border-gray-200 grid place-items-center">
                <div className="flex items-center gap-10 scale-160">
                  {previewChildren}
                </div>
              </div>
            </div>
          </div>
          <p className="mt-6 font-jetbrains-mono text-[12px] leading-6 tracking-widest text-gray-600 font-semibold">
            INSTALLATION:
          </p>
          <TerminalCodeBlock
            code={installCode}
            theme="light"
            className="mt-4"
          />
          <p className="mt-6 font-jetbrains-mono text-[12px] leading-6 tracking-widest text-gray-600 font-semibold">
            USAGE:
          </p>
          <CodeBlock code={usageCode} theme="light" className="mt-4" />
          {apiReference && (
            <>
              <p className="mt-6 font-jetbrains-mono text-[12px] leading-6 tracking-widest text-gray-600 font-semibold">
                PROPS:
              </p>
              <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-100/40 border-b border-gray-200">
                    <tr>
                      <th className="text-left px-4 py-3 font-inter text-[14px] font-medium text-gray-950">
                        Prop
                      </th>
                      <th className="text-left px-4 py-3 font-inter text-[14px] font-medium text-gray-950">
                        Type
                      </th>
                      <th className="text-left px-4 py-3 font-inter text-[14px] font-medium text-gray-950">
                        Default
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {apiReference.map((item, index) => (
                      <tr
                        key={item.prop}
                        className={
                          index !== apiReference.length - 1
                            ? "border-b border-gray-200"
                            : ""
                        }
                      >
                        <td className="px-4 py-3 font-geist-mono text-[14px] text-[#2B67EB]">
                          {item.prop}
                        </td>
                        <td className="px-4 py-3 font-geist-mono text-[14px]">
                          {item.type}
                        </td>
                        <td className="px-4 py-3 font-geist-mono text-[14px]">
                          {item.default}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
