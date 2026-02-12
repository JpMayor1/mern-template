import {
  loginApi,
  logoutApi,
  refreshTokenApi,
  registerApi,
} from "@/api/auth/auth.api";
import type { AuthStoreType } from "@/types/auth/auth.type";
import { showError } from "@/utils/error/error.util";
import toast from "react-hot-toast";
import { create } from "zustand";

export const useAuthStore = create<AuthStoreType>((set) => ({
  accessToken: null,
  loading: false,

  refreshToken: async () => {
    try {
      const response = await refreshTokenApi();
      set({ accessToken: response.accessToken });
      return true;
    } catch (error) {
      console.error(error);
      set({ accessToken: null });
      return false;
    }
  },
  setAccessToken: (token) => {
    set({ accessToken: token });
  },
  setRegister: async (data) => {
    set({
      loading: true,
    });
    try {
      const response = await registerApi(data);
      toast.success(response.message);
      set({ accessToken: response.accessToken });
      return true;
    } catch (error) {
      showError(error);
      return false;
    } finally {
      set({
        loading: false,
      });
    }
  },
  setLogin: async (data) => {
    set({ loading: true });
    try {
      const response = await loginApi(data);
      toast.success(response.message);
      set({ accessToken: response.accessToken });
      return true;
    } catch (error) {
      showError(error);
      return false;
    } finally {
      set({
        loading: false,
      });
    }
  },
  logout: async () => {
    set({ loading: true });
    try {
      const response = await logoutApi();
      toast.success(response.message);
      set({ accessToken: null });
      return true;
    } catch (error) {
      console.error(error);
      showError(error);
      return false;
    } finally {
      set({ loading: false });
    }
  },
  setClearToken: () => {
    set({ accessToken: null });
  },
}));
