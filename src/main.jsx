import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/home/Home";
import { ApiProvider } from "./ApiProvider";
import { Notification } from "./pages/notification/Notification";
import { Favorites } from "./pages/favorites/Favorites";
import { Cart } from "./pages/cart/Cart";
import { NotFound } from "./shared/components/NotFound/NotFound";
import { HomeProvider } from "./pages/home/HomeProvider";
import { HomeTabs } from "./pages/home/components/HomeTabs/HomeTabs";
import { CoffeePage1 } from "./pages/home/components/HomeTabs/components/CoffeePage1/CoffeePage1.jsx";
import { CoffeePage2 } from "./pages/home/components/HomeTabs/components/CoffeePage2/CoffeePage2.jsx";
import { CoffeePage3 } from "./pages/home/components/HomeTabs/components/CoffeePage3/CoffeePage3.jsx";

const router = createBrowserRouter([
  {
    element: <ApiProvider />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "notification",
        element: <Notification />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    element: <HomeProvider />,
    children: [
      {
        path: "/",
        element: <HomeTabs />,
      },
      {
        path: "product/1",
        element: <CoffeePage1 />,
      },
      {
        path: "product/2",
        element: <CoffeePage2 />,
      },
      {
        path: "product/3",
        element: <CoffeePage3 />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
