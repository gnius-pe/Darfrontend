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
        const storedIsAuthenticated = sessionStorage.getItem("isAuthenticated"); // Cambiar aquí
        return storedIsAuthenticated ? JSON.parse(storedIsAuthenticated) : false;
    });
  
    const login = (callback: () => void) => {
        setIsAuthenticated(true);
        sessionStorage.setItem('isAuthenticated', "true"); // Cambiar aquí
        callback();
    };

    const logout = () => {
        setIsAuthenticated(false);
        sessionStorage.removeItem("isAuthenticated"); // Cambiar aquí
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);

