// src/router/index.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { exampleRoutes } from "./exampleRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: exampleRoutes,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
