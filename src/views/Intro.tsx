export default function IntroView() {
  return (
    <div className="max-w-4xl">
      <p className="font-jetbrains-mono font-semibold text-[12px] leading-6 tracking-widest text-gray-600">
        INTRODUCTION
      </p>
      <p className="font-geist text-3xl leading-6 font-medium mt-3">
        Introduction to nocdn/ui
      </p>
      <p className="mt-6 font-inter text-gray-700 leading-7">
        This is a collection of quite simple components, but ones that aren't
        usually found in your typical shadcn, OriginUI, Hero UI, etc UI
        libraries (no shade to those, they're great).
      </p>
      <p className="mt-6 font-inter text-gray-700 leading-7">
        I use these components, or variations of them quite often in my own
        projects, so adding them to a shadcn registry is also quite helpful for
        me.
      </p>
      <p className="mt-6 font-inter text-gray-700 leading-7">
        Feel free to look around, use them in your own projects, and contribute
        to the library if you'd like. You can find a list of the components in
        the sidebar, but if you are not familiar with UI libraries, I recommend
        reading the{" "}
        <span className="font-medium text-blue-700">
          <a href="/?item=installation" rel="noopener noreferrer">
            installation guide
          </a>
        </span>
        .
      </p>
    </div>
  );
}
