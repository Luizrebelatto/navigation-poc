import { createContext, useContext, useState, type ReactNode } from "react";

type AuthContextData = {
  signed: boolean;
  userName: string;
  signIn: (name: string, email: string, password: string) => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [signed, setSigned] = useState(false);
  const [userName, setUserName] = useState("");

  function signIn(name: string, email: string, password: string) {
    setUserName(name);
    setSigned(true);
  }

  function signOut() {
    setUserName("");
    setSigned(false);
  }

  return (
    <AuthContext.Provider value={{ signed, userName, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
