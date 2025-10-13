export default function CompatibilityView() {
  return (
    <div className="max-w-4xl">
      <p className="font-jetbrains-mono font-semibold text-[12px] leading-6 tracking-widest text-gray-600">
        COMPATIBILITY
      </p>
      <p className="font-geist text-3xl leading-6 font-medium mt-3">
        Compatibility
      </p>
      <p className="mt-6 font-inter text-gray-700 leading-7">
        The components are compatible with the following technologies:
      </p>
      <ul className="mt-6 font-inter text-gray-700 leading-7">
        <li>React 18+</li>
        <li>TypeScript 5.3+</li>
        <li>Tailwind CSS 4.x</li>
      </ul>
      <p className="mt-6 font-inter text-gray-700 leading-7">
        The code also assumes that you are using the{" "}
        <span className="font-semibold font-ibm-plex-mono text-sm bg-gray-100 rounded-sm px-1.5 py-1 text-blue-700">
          @ → src
        </span>{" "}
        alias for the bundler.
      </p>
      <p className="font-jetbrains-mono font-semibold text-[12px] leading-6 tracking-widest text-gray-600 mt-6">
        SSR AND ANIMATIONS
      </p>
      <p className="mt-6 font-inter text-gray-700 leading-7">
        Motion works server-side, but initial mount transitions can flash; if
        needed, disable initial animations on first paint or gate with hydration
        checks.
      </p>
      <p className="font-jetbrains-mono font-semibold text-[12px] leading-6 tracking-widest text-gray-600 mt-6">
        TROUBLESHOOTING
      </p>
      <p className="mt-6 font-inter text-gray-700 leading-7">
        <p>
          <span className="font-medium">Module not found '@/lib/utils'</span> →
          check your bundler alias config and that cn util is resolvable.
        </p>
        <p>
          <span className="font-medium">Types not found</span> → ensure
          TypeScript is 5.3+ and skipLibCheck is true or libs are installed.
        </p>
      </p>
    </div>
  );
}
