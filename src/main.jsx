import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import "./index.css";
import App from "./App";  
import { RouterProvider } from "react-router-dom";
import Routers from "./router/Routers";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Routers}/>
  </StrictMode>
);
