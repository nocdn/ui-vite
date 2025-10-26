import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { NuqsAdapter } from "nuqs/adapters/react";
import IntroductionView from "./views/Introduction.tsx";
import InstallationView from "./views/Installation.tsx";
import CompatibilityView from "./views/Compatibility.tsx";
import Layout from "./routes/Layout.tsx";
import TickerDocs from "./routes/components/Ticker.tsx";
import CorneredButtonDocs from "./routes/components/CorneredButton.tsx";
import CopyButtonDocs from "./routes/components/CopyButton.tsx";
import CornerBannerDocs from "./routes/components/CornerBanner.tsx";
import ReasoningTracesDocs from "./routes/components/ReasoningTraces.tsx";
import TrafficLights from "./routes/recreations/TrafficLights.tsx";
import ExpandingMenu from "./routes/experiments/ExpandingMenu.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NuqsAdapter>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="introduction" element={<IntroductionView />} />
            <Route path="installation" element={<InstallationView />} />
            <Route path="compatibility" element={<CompatibilityView />} />
            <Route path="ticker" element={<TickerDocs />} />
            <Route path="cornered-button" element={<CorneredButtonDocs />} />
            <Route path="copy-button" element={<CopyButtonDocs />} />
            <Route path="corner-banner" element={<CornerBannerDocs />} />
            <Route path="reasoning-traces" element={<ReasoningTracesDocs />} />
            <Route path="traffic-lights" element={<TrafficLights />} />
            <Route path="expanding-menu" element={<ExpandingMenu />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </NuqsAdapter>
  </StrictMode>
);
