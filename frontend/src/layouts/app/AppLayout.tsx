import { useAuthStore } from "@/stores/auth/auth.store";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AppLayout = () => {
  const refreshToken = useAuthStore((state) => state.refreshToken);

  const navigate = useNavigate();

  useEffect(() => {
    const initialize = async () => {
      const success = await refreshToken();
      if (!success) return navigate("/");
      navigate("/home");
    };
    initialize();
  }, []);

  return <Outlet />;
};

export default AppLayout;
