import ComponentLayout from "./ComponentLayout";
import { AnimatedButton } from "../../../registry/default/ui/animated-button/animated-button";
import { Copy, Check } from "lucide-react";

export default function CopyButtonDocs() {
  const installCode =
    "bunx --bun shadcn@latest add https://ui.bartoszbak.org/r/animated-button.json";
  const usageCode = `import { AnimatedButton } from '@/components/ui/animated-button'
import { Copy, Check } from 'lucide-react'

<AnimatedButton
  className='size-4.5'
  secondaryChildren={<Check />}
  ariaLabel='Copy'
>
  <Copy className='size-4' />
</AnimatedButton>`;

  const apiReference = [
    { prop: "className", type: "string", default: "-" },
    { prop: "children", type: "React.ReactNode", default: "-" },
    { prop: "secondaryChildren", type: "React.ReactNode", default: "-" },
    { prop: "onClick", type: "() => void", default: "-" },
    { prop: "ariaLabel", type: "string", default: "-" },
  ];

  return (
    <ComponentLayout
      componentName="Copy Button"
      description="A button that smoothly transitions between it's two child states."
      installCode={installCode}
      usageCode={usageCode}
      apiReference={apiReference}
      frameScale="160"
      previewChildren={
        <>
          <AnimatedButton
            className="size-6"
            secondaryChildren={<Check />}
            ariaLabel="Copy"
          >
            <Copy className="size-5" />
          </AnimatedButton>
        </>
      }
    />
  );
}
