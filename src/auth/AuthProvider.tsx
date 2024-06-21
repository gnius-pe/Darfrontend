import { useContext, createContext, useState, ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: () => boolean; // Cambiado a función que devuelve booleano
  login: (callback: () => void) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: () => false, // Función inicial que devuelve falso
  login: () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    // Inicialización basada en si existe userId en sessionStorage
    return !!sessionStorage.getItem("userId");
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
    <AuthContext.Provider value={{ isAuthenticated: () => isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

