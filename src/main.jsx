import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./routes/Routes";
import { RouterProvider } from "react-router/dom";
import TimelinePageProvider from "./components/context/TimelinePageProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TimelinePageProvider>
      <RouterProvider router={router} />
    </TimelinePageProvider>
  </StrictMode>,
);
