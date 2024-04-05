import { useContext, createContext, useState } from "react";

interface AuthProviderProps {
    children: React.ReactNode;
}

const AuthContext = createContext<{
    isAuthenticated: boolean;
}>({
    isAuthenticated: false, 
});

export function AuthProvider({ children }: AuthProviderProps) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
        const storedIsAuthenticated = localStorage.getItem("isAuthenticated");
        return storedIsAuthenticated ? JSON.parse(storedIsAuthenticated) : false;
      });
  
    const login = (callback:() => void ) => {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', "true");
        callback();
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("isAuthenticated");
      };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>

    );
}

export const useAuth = () => useContext(AuthContext);
