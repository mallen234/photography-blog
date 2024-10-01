import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const places = ["Sep_23", "Mar_23", "Aug_24"];
const routes = places.map((place) => ({
  path: place,
  element: <App linkName={place} places={places} />,
}));

const router = createBrowserRouter([
  ...routes,
  {
    path: "/",
    element: <App linkName="" places={places} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
