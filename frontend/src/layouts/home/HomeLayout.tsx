import Header from "@/components/header/Header";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div className="h-dvh w-dvw bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col">
      <Header />
      <Outlet />
    </div>
  );
}
