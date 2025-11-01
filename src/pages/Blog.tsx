import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import agrocashLogo from "@/assets/agrocash-logo.png";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Como otimizar a gestão da sua fazenda",
      excerpt: "Descubra as melhores práticas para aumentar a produtividade e reduzir custos na sua propriedade rural.",
      category: "Gestão",
      date: "2025-01-15",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Tecnologia no campo: O futuro do agronegócio",
      excerpt: "Conheça as principais tecnologias que estão revolucionando a agricultura moderna.",
      category: "Tecnologia",
      date: "2025-01-12",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      title: "Sustentabilidade: Práticas para uma agricultura mais verde",
      excerpt: "Aprenda como implementar práticas sustentáveis que beneficiam o meio ambiente e sua produção.",
      category: "Sustentabilidade",
      date: "2025-01-10",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=400&fit=crop",
    },
    {
      id: 4,
      title: "Análise de solo: Por que é importante?",
      excerpt: "Entenda a importância da análise de solo para o planejamento da sua safra.",
      category: "Técnicas",
      date: "2025-01-08",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&h=400&fit=crop",
    },
    {
      id: 5,
      title: "Planejamento financeiro para produtores rurais",
      excerpt: "Dicas essenciais para organizar as finanças da sua propriedade rural.",
      category: "Finanças",
      date: "2025-01-05",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
    },
    {
      id: 6,
      title: "Controle de pragas de forma sustentável",
      excerpt: "Métodos eficazes e ecológicos para proteger suas plantações.",
      category: "Técnicas",
      date: "2025-01-03",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&h=400&fit=crop",
    },
  ];

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
                <Link to="/mercado" className="text-muted-foreground hover:text-primary transition-colors">
                  Mercado
                </Link>
                <Link to="/blog" className="text-foreground hover:text-primary transition-colors font-medium">
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
              Blog Agrocash
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Conteúdos e dicas para alavancar seu agronegócio
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader className="p-0">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 space-y-3 flex-1">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Badge variant="secondary">{post.category}</Badge>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <CardTitle className="text-lg line-clamp-2">
                  {post.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="ghost" className="w-full group">
                  Ler mais
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
