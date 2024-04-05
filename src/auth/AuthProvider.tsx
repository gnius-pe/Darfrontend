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
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    console.log(isAuthenticated);
  
    const login = (isAuthenticated: boolean) => {
        setIsAuthenticated(isAuthenticated);
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>

    );
}

export const useAuth = () => useContext(AuthContext);
