import AuthLayout from "@/layouts/auth/AuthLayout";
import LoginPage from "@/pages/auth/login/LoginPage";
import RegisterPage from "@/pages/auth/register/RegisterPage";
import type { RouteObject } from "react-router";

export const authRoutes: RouteObject = {
  path: "auth",
  Component: AuthLayout,
  children: [
    {
      index: true,
      Component: LoginPage,
    },
    {
      path: "login",
      Component: LoginPage,
    },
    {
      path: "register",
      Component: RegisterPage,
    },
  ],
};
