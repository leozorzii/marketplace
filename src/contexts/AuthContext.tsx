import React, { createContext, useState, useContext, ReactNode } from 'react';

// 1. Defina os tipos para o usuário e o contexto
type UserRole = 'Gestor' | 'Consultor' | 'Cliente' | null;

interface AuthState {
    isAuthenticated: boolean;
    role: UserRole;
}

interface AuthContextType extends AuthState {
    login: (role: UserRole) => void;
    logout: () => void;
}

// Valores iniciais (Usuário deslogado)
const initialAuthState: AuthState = {
    isAuthenticated: false,
    role: null,
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 2. Crie o Provedor (Provider)
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Simulamos que o Gestor está logado para testes
    const [auth, setAuth] = useState<AuthState>({
        isAuthenticated: true,
        role: 'Gestor', // <-- SIMULAÇÃO: Mude para 'null' para começar deslogado
    });

    const login = (role: UserRole) => {
        setAuth({ isAuthenticated: true, role });
        // Em um projeto real, aqui você salvaria o token no localStorage
    };

    const logout = () => {
        setAuth(initialAuthState);
        // Em um projeto real, aqui você removeria o token do localStorage
    };

    return (
        <AuthContext.Provider value={{ ...auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// 3. Crie um Hook customizado para usar o contexto
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    return context;
};