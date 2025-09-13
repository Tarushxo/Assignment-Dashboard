import './index.css'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Dashboard } from "./screens/Dashboard/Dashboard";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Dashboard />
  </StrictMode>,
);
