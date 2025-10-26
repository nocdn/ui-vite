import { ArrowUpRight, Search } from "lucide-react";
import { Outlet } from "react-router";
import { NavLink } from "react-router";

export default function Layout() {
  return (
    <>
      <div className="sticky top-0 z-10 bg-gray-50/35 h-14 flex items-center gap-6 px-5 text-sm font-inter antialiased font-[430] border-b border-gray-950/5">
        <NavLink className="mr-auto cursor-pointer group" to="/introduction">
          nocdn
          <span className="group-hover:mx-1.5 mx-0.5 transition-all duration-200 ease-[cubic-bezier(0.19,1,0.22,1)]">
            /
          </span>
          ui
        </NavLink>
        <div className="flex items-center gap-3 bg-gray-950/2 border border-gray-950/5 pl-2 pr-2.5 py-1.25 rounded-full cursor-pointer">
          <Search size={14} />
          <p className="text-xs">⌘ + K</p>
        </div>
        <NavLink className="cursor-pointer" to="/installation">
          Docs
        </NavLink>
        <NavLink className="cursor-pointer" to="/cornered-button">
          Components
        </NavLink>
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
              <div className="flex flex-col gap-2 border-l border-gray-950/5 *:text-left *:text-[14px] *:leading-6 *:font-inter *:pl-3 *:cursor-pointer *:transition-[font-weight] *:duration-200 *:ease-[cubic-bezier(0.19,1,0.22,1)]">
                <NavLink
                  to="/introduction"
                  className={({ isActive }) =>
                    isActive
                      ? "relative -ml-px font-[550] border-l border-blue-800/90 text-blue-900/90"
                      : "font-normal text-gray-950/60"
                  }
                >
                  Introduction
                </NavLink>
                <NavLink
                  to="/installation"
                  className={({ isActive }) =>
                    isActive
                      ? "relative -ml-px font-[550] border-l border-blue-800/90 text-blue-900/90"
                      : "font-normal text-gray-950/60"
                  }
                >
                  Installation
                </NavLink>
                <NavLink
                  to="/compatibility"
                  className={({ isActive }) =>
                    isActive
                      ? "relative -ml-px font-[550] border-l border-blue-800/90 text-blue-900/90"
                      : "font-normal text-gray-950/60"
                  }
                >
                  Compatibility
                </NavLink>
              </div>
            </div>

            {/* Components Section */}
            <div className="flex flex-col">
              <h3 className="font-jetbrains-mono text-[12px] leading-6 text-gray-500 mb-2 tracking-widest font-medium">
                COMPONENTS
              </h3>
              <div className="flex flex-col gap-2 border-l border-gray-950/5 *:text-left *:text-[14px] *:leading-6 *:font-inter *:pl-3 *:cursor-pointer *:transition-[font-weight] *:duration-200 *:ease-[cubic-bezier(0.19,1,0.22,1)]">
                <NavLink
                  to="/cornered-button"
                  className={({ isActive }) =>
                    isActive
                      ? "relative -ml-px font-[550] border-l border-blue-800/90 text-blue-900/90"
                      : "font-normal text-gray-950/60"
                  }
                >
                  Cornered Button
                </NavLink>
                <NavLink
                  to="/ticker"
                  className={({ isActive }) =>
                    isActive
                      ? "relative -ml-px font-[550] border-l border-blue-800/90 text-blue-900/90"
                      : "font-normal text-gray-950/60"
                  }
                >
                  Animated Ticker
                </NavLink>
                <NavLink
                  to="/copy-button"
                  className={({ isActive }) =>
                    isActive
                      ? "relative -ml-px font-[550] border-l border-blue-800/90 text-blue-900/90"
                      : "font-normal text-gray-950/60"
                  }
                >
                  Copy Button
                </NavLink>
                <NavLink
                  to="/corner-banner"
                  className={({ isActive }) =>
                    isActive
                      ? "relative -ml-px font-[550] border-l border-blue-800/90 text-blue-900/90"
                      : "font-normal text-gray-950/60"
                  }
                >
                  Corner Banner
                </NavLink>
                <NavLink
                  to="/reasoning-traces"
                  className={({ isActive }) =>
                    isActive
                      ? "relative -ml-px font-[550] border-l border-blue-800/90 text-blue-900/90"
                      : "font-normal text-gray-950/60"
                  }
                >
                  Reasoning Traces
                </NavLink>
              </div>
            </div>
            {/* Experiments Section */}
            <div className="flex flex-col">
              <h3 className="font-jetbrains-mono text-[12px] leading-6 text-gray-500 mb-2 tracking-widest font-medium">
                EXPERIMENTS
              </h3>
              <div className="flex flex-col gap-2 border-l border-gray-950/5 *:text-left *:text-[14px] *:leading-6 *:font-inter *:pl-3 *:cursor-pointer *:transition-[font-weight] *:duration-200 *:ease-[cubic-bezier(0.19,1,0.22,1)]">
                <NavLink
                  to="/expanding-menu"
                  className={({ isActive }) =>
                    isActive
                      ? "relative -ml-px font-[550] border-l border-blue-800/90 text-blue-900/90"
                      : "font-normal text-gray-950/60"
                  }
                >
                  Expanding Menu
                </NavLink>
              </div>
            </div>
            {/* Recreations Section */}
            <div className="flex flex-col">
              <h3 className="font-jetbrains-mono text-[12px] leading-6 text-gray-500 mb-2 tracking-widest font-medium">
                RECREATIONS
              </h3>
              <div className="flex flex-col gap-2 border-l border-gray-950/5 *:text-left *:text-[14px] *:leading-6 *:font-inter *:pl-3 *:cursor-pointer *:transition-[font-weight] *:duration-200 *:ease-[cubic-bezier(0.19,1,0.22,1)]">
                <NavLink
                  to="/traffic-lights"
                  className={({ isActive }) =>
                    isActive
                      ? "relative -ml-px font-[550] border-l border-blue-800/90 text-blue-900/90"
                      : "font-normal text-gray-950/60"
                  }
                >
                  iPadOS Controls
                </NavLink>
              </div>
            </div>
            {/* Contact Section */}
            <div className="flex flex-col">
              <h3 className="font-jetbrains-mono text-[12px] leading-6 text-gray-500 mb-2 tracking-widest font-medium">
                CONTACT
              </h3>
              <div className="flex flex-col gap-2 border-l border-gray-950/5 *:text-left *:text-[14px] *:leading-6 *:font-inter *:pl-3 *:cursor-pointer *:transition-[font-weight] *:duration-200 *:ease-[cubic-bezier(0.19,1,0.22,1)]">
                <NavLink
                  to="/get-in-touch"
                  className={({ isActive }) =>
                    isActive
                      ? "relative -ml-px font-[550] border-l border-blue-800/90 text-blue-900/90"
                      : "font-normal text-gray-950/60"
                  }
                >
                  Get in touch
                </NavLink>
                <NavLink
                  to="/contributing"
                  className={({ isActive }) =>
                    isActive
                      ? "relative -ml-px font-[550] border-l border-blue-800/90 text-blue-900/90"
                      : "font-normal text-gray-950/60"
                  }
                >
                  Contributing
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-2 row-span-5 row-start-1 border-x border-x-(--pattern-fg) bg-gray-50/35 bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10"></div>
        <div
          id="content"
          className="px-14 pt-10 overflow-y-auto bg-gray-50/35 overscroll-contain"
        >
          <Outlet />
        </div>
      </div>
    </>
  );
}
