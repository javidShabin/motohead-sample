import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import UserLayout from "../layout/UserLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
