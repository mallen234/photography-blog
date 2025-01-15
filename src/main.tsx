import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { navItems } from "./const.ts";

const routes = navItems.map((navItem) => ({
  path: navItem.link,
  element: <App linkName={navItem.title} places={navItems} />,
}));

const router = createBrowserRouter([
  ...routes,
  {
    path: "/",
    element: <App linkName="" places={navItems} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
