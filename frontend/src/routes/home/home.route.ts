import HomeLayout from "@/layouts/home/HomeLayout";
import HomePage from "@/pages/home/HomePage";
import type { RouteObject } from "react-router";

export const homeRoutes: RouteObject = {
  path: "home",
  Component: HomeLayout,
  children: [
    {
      index: true,
      Component: HomePage,
    },
  ],
};
