import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import agrocashLogo from "@/assets/agrocash-logo.png";
import { Link } from "react-router-dom";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

const Mercado = () => {
  const commodities = [
    { name: "Soja", price: "R$ 145,20", change: 2.3, unit: "/saca 60kg" },
    { name: "Milho", price: "R$ 68,90", change: -1.5, unit: "/saca 60kg" },
    { name: "Café Arábica", price: "R$ 1.250,00", change: 0.8, unit: "/saca 60kg" },
    { name: "Trigo", price: "R$ 89,50", change: 0, unit: "/saca 60kg" },
    { name: "Algodão", price: "R$ 185,30", change: 3.2, unit: "/arroba" },
    { name: "Boi Gordo", price: "R$ 312,45", change: 1.8, unit: "/arroba" },
  ];

  const getTrendIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="h-4 w-4 text-green-600" />;
    if (change < 0) return <TrendingDown className="h-4 w-4 text-red-600" />;
    return <Minus className="h-4 w-4 text-muted-foreground" />;
  };

  const getTrendColor = (change: number) => {
    if (change > 0) return "text-green-600";
    if (change < 0) return "text-red-600";
    return "text-muted-foreground";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link to="/marketplace">
                <img src={agrocashLogo} alt="Agrocash" className="h-12 cursor-pointer" />
              </Link>
              <nav className="hidden md:flex gap-6">
                <Link to="/marketplace" className="text-muted-foreground hover:text-primary transition-colors">
                  Marketplace
                </Link>
                <Link to="/mercado" className="text-foreground hover:text-primary transition-colors font-medium">
                  Mercado
                </Link>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Cotações do Agronegócio
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Acompanhe os preços das principais commodities em tempo real
            </p>
          </div>
        </div>
      </section>

      {/* Commodities Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commodities.map((commodity) => (
            <Card key={commodity.name} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{commodity.name}</span>
                  {getTrendIcon(commodity.change)}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-3xl font-bold text-primary">
                  {commodity.price}
                </div>
                <div className="text-sm text-muted-foreground">
                  {commodity.unit}
                </div>
                <div className={`text-sm font-medium ${getTrendColor(commodity.change)}`}>
                  {commodity.change > 0 && "+"}
                  {commodity.change}%
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Última atualização: {new Date().toLocaleDateString('pt-BR')} às {new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</p>
        </div>
      </section>
    </div>
  );
};

export default Mercado;
