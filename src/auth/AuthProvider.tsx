import { useContext, createContext, useState, useEffect } from "react";

interface AuthProvideProps{
    children: React.ReactNode;
}

const AuthContext = createContext({
    isAuthenticated: false,
});

export function AuthProvider({children}: AuthProvideProps){
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
    <AuthContext.Provider value={{isAuthenticated}}>
        {children}
    </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);