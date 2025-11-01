import { Suspense } from "react";
import { Routes, Route, Link, Navigate, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Marketplace from "./pages/Marketplace";
import Mercado from "./pages/Mercado";
import Blog from "./pages/Blog";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

function Navbar() {
  const location = useLocation();

  // só mostra navbar quando a rota começa com /marketplace
  const showNavbar = location.pathname.startsWith("/marketplace");

  if (!showNavbar) return null;

  return (
    <nav className="p-4 bg-white shadow flex gap-4">
      <Link to="/marketplace" className="font-semibold">
        Marketplace
      </Link>
      <Link to="/" className="ml-auto text-blue-600 hover:underline">
        Sair
      </Link>
    </nav>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="p-6">
        <Suspense fallback={<p>Carregando…</p>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/mercado" element={<Mercado />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}
