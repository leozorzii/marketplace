// src/App.tsx (Código Atualizado)

import { Suspense } from "react";
import { Routes, Route, Link, Navigate, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Marketplace from "./pages/Marketplace";
import Mercado from "./pages/Mercado";
import Blog from "./pages/Blog";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
// Importações adicionadas
import { AuthProvider, useAuth } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute'; // Seu guarda de rota

// Componente Navbar atualizado para usar o logout
function Navbar() {
 const { logout } = useAuth(); // Pega a função de logout do contexto
 const location = useLocation();

 // Mostra navbar apenas se a rota for diferente da raiz (login)
 const showNavbar = location.pathname !== "/"; // Mudamos a lógica para ser mais inclusiva

 if (!showNavbar) return null;

 return (
 <nav className="p-4 bg-white shadow flex gap-4">
   <Link to="/marketplace" className="font-semibold">
    Marketplace
   </Link>
      {/* Botão Sair chama a função logout e redireciona para a raiz */}
  <Link to="/" onClick={logout} className="ml-auto text-blue-600 hover:underline">
      Sair
  </Link>
  </nav> );
}

export function AppRoutes() { // Componente extraído para usar o AuthContext
    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />

            <main className="p-6">
                <Suspense fallback={<p>Carregando…</p>}>
                    <Routes>
                        {/* Rota Pública - Login */}
                        <Route path="/" element={<Index />} />

                        {/* Rotas Abertas (Após Login) */}
                        <Route path="/marketplace" element={<Marketplace />} />
                        <Route path="/mercado" element={<Mercado />} />
                        <Route path="/blog" element={<Blog />} />

                        {/* ======================================================= */}
                        {/* ROTA EXCLUSIVA DO GESTOR (PROTEGIDA POR ROLE)           */}
                        {/* ======================================================= */}
                        <Route
                            element={<ProtectedRoute allowedRoles={['Gestor']} />}
                        >
                            <Route path="/admin" element={<AdminDashboard />} />
                        </Route>

                        {/* Fallback 404 */}
                        <Route path="/404" element={<NotFound />} />
                        <Route path="*" element={<Navigate to="/404" replace />} />
                    </Routes>
                </Suspense>
            </main>
        </div>
    );
}

// Função principal que envolve tudo com o Provider
export default function App() {
    return (
        <AuthProvider>
            <AppRoutes />
        </AuthProvider>
    );
}