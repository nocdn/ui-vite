export default function GetStartedView() {
  return (
    <div>
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
    </div>
  );
}
