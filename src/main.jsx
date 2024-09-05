import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routers from "./router/Routers";
import World from "./World";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <World/>
    <RouterProvider router={Routers} />
  </StrictMode>
);
