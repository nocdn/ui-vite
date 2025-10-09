import { TerminalCodeBlock } from "../assets/utils/terminal-code-block";

export default function GetStartedView() {
  return (
    <div className="max-w-4xl">
      <p className="font-jetbrains-mono text-[12px] leading-6 tracking-widest text-gray-600">
        INSTALLATION
      </p>
      <p className="font-geist text-3xl leading-6 font-medium mt-3">
        Installing the components
      </p>
      <p className="mt-6 font-inter text-gray-700 leading-7">
        The components use a shadcn/ui registry to distribute them, so you will
        need to install the shadcn/ui package first. Check the official{" "}
        <span className="font-medium text-blue-700">
          <a
            href="https://ui.shadcn.com/docs/installation"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation page
          </a>
        </span>{" "}
        for your preferred framework.
      </p>
      <p className="mt-6 font-inter text-gray-700 leading-7">
        Once shadcn is configured for your environment, you can install each
        component through the shadcn command line like so:
      </p>
      <TerminalCodeBlock
        code="bunx --bun shadcn@latest add https://ui.bartoszbak.org/r/cornered-button.json"
        theme="light"
        className="mt-6"
      />
      <p className="mt-6 font-inter text-gray-700 leading-7">
        This will install the cornered button component, which you can check out
        in more detail here:{" "}
        <span className="font-medium text-blue-700">
          <a
            href="http://localhost:5173/?selectedItem=Cornered+Button"
            target="_blank"
            rel="noopener noreferrer"
          >
            cornered button
          </a>
        </span>
        .
      </p>
    </div>
  );
}
