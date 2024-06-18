import { useContext, createContext, useState, ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (callback: () => void) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const storedUserId = sessionStorage.getItem("userId");
    return storedUserId ? true : false;
  });

  const login = (callback: () => void) => {
    setIsAuthenticated(true);
    callback();
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("userInfo");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
