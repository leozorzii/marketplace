import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import agrocashLogo from "@/assets/agrocash-logo.png";

const Marketplace = () => {
  const [cartCount] = useState(0);

  // Mock products data
  const products = [
    {
      id: 1,
      name: "Fertilizante Orgânico Premium",
      price: "R$ 89,90",
      category: "Fertilizantes",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=300&fit=crop",
      stock: "Em estoque"
    },
    {
      id: 2,
      name: "Sementes de Soja Transgênica",
      price: "R$ 245,00",
      category: "Sementes",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop",
      stock: "Em estoque"
    },
    {
      id: 3,
      name: "Equipamento de Irrigação Automático",
      price: "R$ 1.890,00",
      category: "Equipamentos",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop",
      stock: "Poucas unidades"
    },
    {
      id: 4,
      name: "Defensivo Agrícola Ecológico",
      price: "R$ 156,50",
      category: "Defensivos",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=300&fit=crop",
      stock: "Em estoque"
    },
    {
      id: 5,
      name: "Kit Ferramentas para Plantio",
      price: "R$ 329,90",
      category: "Ferramentas",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
      stock: "Em estoque"
    },
    {
      id: 6,
      name: "Adubo NPK Profissional",
      price: "R$ 198,00",
      category: "Fertilizantes",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=300&fit=crop",
      stock: "Em estoque"
    }
  ];

  const categories = ["Todos", "Consultoria", "Sementes", "Equipamentos", "Defensivos", "Ferramentas"];
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProducts = selectedCategory === "Todos" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <img src={agrocashLogo} alt="Agrocash" className="h-12" />
              <nav className="hidden md:flex gap-6">
                <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                  Marketplace
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Minhas Compras
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Vendedores
                </a>
              </nav>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-accent">
                    {cartCount}
                  </Badge>
                )}
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Marketplace do Agronegócio
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Encontre os melhores produtos para sua fazenda
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mt-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar produtos, sementes, equipamentos..."
                className="pl-12 py-6 bg-background text-foreground border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 space-y-2">
                <Badge variant="secondary" className="text-xs">
                  {product.category}
                </Badge>
                <CardTitle className="text-lg line-clamp-2">
                  {product.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {product.stock}
                </p>
                <p className="text-2xl font-bold text-primary">
                  {product.price}
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Adicionar ao Carrinho
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2025 Agrocash. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Marketplace;
