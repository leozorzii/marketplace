import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Importe seu hook

interface ProtectedRouteProps {
    allowedRoles: string[]; // Recebe um array de cargos permitidos (ex: ['Gestor', 'Admin'])
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles }) => {
    const { isAuthenticated, role } = useAuth();

    // 1. Verifica se o usuário está logado
    if (!isAuthenticated) {
        // Redireciona para o login (rota "/") se não estiver logado
        return <Navigate to="/" replace />;
    }

    // 2. Verifica se o cargo do usuário está na lista de allowedRoles
    const isAuthorized = role && allowedRoles.includes(role);

    if (isAuthorized) {
        // Se estiver autorizado, renderiza o componente filho (o AdminDashboard)
        return <Outlet />;
    } else {
        // Se estiver logado, mas sem permissão, redireciona para o Marketplace
        // ou para uma página de "Acesso Negado"
        return <Navigate to="/marketplace" replace />;
    }
};

export default ProtectedRoute;