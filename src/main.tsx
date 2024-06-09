import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import SettingsProvider from "providers/settings-provider";
import AnimationProvider from "providers/animation-provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SettingsProvider>
      <AnimationProvider>
        <App />
      </AnimationProvider>
    </SettingsProvider>
  </React.StrictMode>,
);
