import type { AccountType } from "../account/account.type";

export type AuthStoreType = {
  accessToken: string | null;
  loading: boolean;

  refreshToken: () => Promise<boolean>;
  setAccessToken: (token: string | null) => void;
  setRegister: (data: Partial<AccountType>) => Promise<boolean>;
  setLogin: (data: Partial<AccountType>) => Promise<boolean>;
  logout: () => Promise<boolean>;
  setClearToken: () => void;
};
