import Cookies from "js-cookie";
import { createJSONStorage, atomWithStorage } from "jotai/utils";
import { ITokens } from '../types/auth.types.ts';

const cookieStorage = createJSONStorage<ITokens | null>(() => {
  return {
    getItem: () => Cookies.get("authTokens"),
    setItem: (key, value) => Cookies.set(key, value, { expires: 30 }),
    removeItem: (key) => Cookies.remove(key),
  }
})

export const authTokensAtom = atomWithStorage<ITokens | null>(
  "authTokens",
  null,
  cookieStorage,
);
