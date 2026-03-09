import { createContext, useContext, useState, type ReactNode } from "react";

type AuthContextData = {
  signed: boolean;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [signed, setSigned] = useState(false);

  function signIn(email: string, password: string) {
    setSigned(true);
  }

  function signOut() {
    setSigned(false);
  }

  return (
    <AuthContext.Provider value={{ signed, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
