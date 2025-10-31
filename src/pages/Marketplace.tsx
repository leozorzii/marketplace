import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, User, Menu, Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import agrocashLogo from "@/assets/agrocash-logo.png";
import { QuoteRequestDialog } from "@/components/QuoteRequestDialog";

const Marketplace = () => {
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>("");

  // Serviços de consultoria
  const products = [
    {
      id: 1,
      name: "Consultoria em Gestão Agrícola",
      price: "Sob consulta",
      category: "Gestão",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=300&fit=crop",
      stock: "Disponível",
      description: "Otimize sua produção com consultoria especializada"
    },
    {
      id: 2,
      name: "Análise de Solo Completa",
      price: "Sob consulta",
      category: "Análises",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=300&fit=crop",
      stock: "Disponível",
      description: "Análise detalhada para melhor produtividade"
    },
    {
      id: 3,
      name: "Planejamento de Safra Personalizado",
      price: "Sob consulta",
      category: "Planejamento",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop",
      stock: "Disponível",
      description: "Planeje sua safra com eficiência máxima"
    },
    {
      id: 4,
      name: "Consultoria em Sustentabilidade",
      price: "Sob consulta",
      category: "Sustentabilidade",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      stock: "Disponível",
      description: "Práticas sustentáveis para seu negócio"
    },
    {
      id: 5,
      name: "Diagnóstico de Produtividade",
      price: "Sob consulta",
      category: "Análises",
      image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&h=300&fit=crop",
      stock: "Disponível",
      description: "Identifique gargalos e oportunidades"
    },
    {
      id: 6,
      name: "Consultoria Financeira Rural",
      price: "Sob consulta",
      category: "Gestão",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop",
      stock: "Disponível",
      description: "Gestão financeira especializada para o agro"
    }
  ];

  const categories = ["Todos", "Gestão", "Análises", "Planejamento", "Sustentabilidade"];
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProducts = selectedCategory === "Todos" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  // Scroll animation observer
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute('data-product-id'));
            setVisibleCards((prev) => new Set([...prev, id]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [filteredProducts]);

  const handleQuoteRequest = (productName: string) => {
    setSelectedProduct(productName);
    setQuoteDialogOpen(true);
  };

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
      <section className="bg-primary text-primary-foreground py-16 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold animate-fade-in-up">
              Consultoria Especializada em Agronegócio
            </h1>
            <p className="text-lg text-primary-foreground/90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Serviços profissionais para otimizar sua produção
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mt-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar serviços de consultoria..."
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
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => (cardRefs.current[index] = el)}
              data-product-id={product.id}
              className={`transition-all duration-700 ${
                visibleCards.has(product.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="p-0">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
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
                  <Button 
                    className="w-full transition-all hover:scale-105"
                    onClick={() => handleQuoteRequest(product.name)}
                  >
                    Solicitar Orçamento
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-12">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Sobre */}
            <div>
              <h3 className="font-bold text-lg mb-4">Sobre o Agrocash</h3>
              <p className="text-muted-foreground text-sm">
                Consultoria especializada em agronegócio, oferecendo soluções personalizadas para maximizar a produtividade e sustentabilidade do seu negócio rural.
              </p>
            </div>

            {/* Contato */}
            <div>
              <h3 className="font-bold text-lg mb-4">Contato</h3>
              <div className="space-y-3">
                <a href="mailto:contato@agrocash.com.br" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
                  <Mail className="h-4 w-4" />
                  contato@agrocash.com.br
                </a>
                <a href="tel:+5511999999999" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
                  <Phone className="h-4 w-4" />
                  (11) 99999-9999
                </a>
              </div>
            </div>

            {/* Redes Sociais */}
            <div>
              <h3 className="font-bold text-lg mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <a 
                  href="https://facebook.com/agrocash" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://instagram.com/agrocash" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com/company/agrocash" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-6 text-center text-muted-foreground text-sm">
            <p>&copy; 2025 Agrocash. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <QuoteRequestDialog
        open={quoteDialogOpen}
        onOpenChange={setQuoteDialogOpen}
        productName={selectedProduct}
      />
    </div>
  );
};

export default Marketplace;
