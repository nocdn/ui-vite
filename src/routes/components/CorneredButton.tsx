import ComponentLayout from "./ComponentLayout";
import { Check } from "lucide-react";
import { CorneredButton } from "../../../registry/default/ui/cornered-button/cornered-button";

export default function CorneredButtonDocs() {
  const installCode =
    "bunx --bun shadcn@latest add https://ui.bartoszbak.org/r/cornered-button.json";
  const usageCode = `import { CorneredButton } from '@/components/ui/cornered-button'

<CorneredButton
  cornerColor='red'
  cornerSize={7}
  borderWidth={2}
  className='font-mono cursor-pointer'
>
  NEXT
</CorneredButton>`;

  const apiReference = [
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
    { prop: "cornerColor", type: "string", default: "hsl(var(--border))" },
    {
      prop: "type",
      type: '"button" | "submit" | "reset"',
      default: '"button"',
    },
    { prop: "className", type: "string", default: "-" },
    { prop: "style", type: "React.CSSProperties", default: "-" },
    { prop: "children", type: "React.ReactNode", default: "-" },
  ];

  return (
    <ComponentLayout
      componentName="Cornered Button"
      description="This is a button, inspired by @aliszu, with a border and darker corners. Customiseable with props, adheres to shadcn/ui styling with accessibility in mind, with button semantics and keyboard navigation."
      installCode={installCode}
      usageCode={usageCode}
      apiReference={apiReference}
      frameScale="160"
      previewChildren={
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
      }
    />
  );
}
