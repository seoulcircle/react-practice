import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/layout/Layout";

import { CounterPage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "counter",
        element: <CounterPage />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
