import { useMemo, useState, useContext, createContext } from "react";
import { FC, Dispatch, SetStateAction, PropsWithChildren } from "react";

interface IContext {
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext<IContext>({} as IContext);
export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const value = useMemo(
    () => ({
      isAuth,
      setIsAuth,
    }),
    [isAuth]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
