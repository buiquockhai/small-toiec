import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "@page/_router";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
