import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Index, { loader as clientsLoader } from "./pages/Index";
import Create, { action as newClientAction } from "./pages/Create";
import Edit, { loader as editClientLoader, action as editClientAction } from "./pages/Edit";
import ErrorPage from "./components/ErrorPage";
import { action as removeClientAction } from "./components/Client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientsLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/clients/new",
        element: <Create />,
        action: newClientAction,
        errorElement: <ErrorPage />
      },
      {
        path: "/clients/edit/:id",
        element: <Edit />,
        loader: editClientLoader,
        action: editClientAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "/clients/:id",
        action: removeClientAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
