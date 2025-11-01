import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import agrocashLogo from "@/assets/agrocash-logo.png";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface SignInPageProps {
  heroImageSrc: string;
  onSignIn: (event: React.FormEvent<HTMLFormElement>) => void;
  onGoogleSignIn: () => void;
  onResetPassword: () => void;
  onCreateAccount: () => void;
}

export const SignInPage = ({
  heroImageSrc,
  onSignIn,
  onGoogleSignIn,
  onResetPassword,
  onCreateAccount,
}: SignInPageProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Hero Image & Testimonials */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-primary overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImageSrc})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-primary/50" />
        </div>
        
        <div className="relative z-10 flex flex-col justify-center items-center p-12 w-full">
          <div className="space-y-6 text-center">
            <h1 className="text-4xl font-bold text-primary-foreground">
              Bem-vindo ao Agrocash
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Gestão e Finanças para o Agronegócio
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Sign In Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          {/* Logo/Brand */}
          <div className="text-center space-y-2">
            <div className="flex justify-center mb-6">
              <img 
                src={agrocashLogo} 
                alt="Agrocash Logo" 
                className="h-20 w-auto"
              />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Entrar</h2>
            <p className="text-muted-foreground">
              Acesse sua conta Agrocash
            </p>
          </div>

          {/* Sign In Form */}
          <form onSubmit={onSignIn} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="nome@email.com"
                  required
                  className="bg-background border-border focus:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground">
                  Senha
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    required
                    className="bg-background border-border focus:ring-primary pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                />
                <Label
                  htmlFor="remember"
                  className="text-sm text-muted-foreground cursor-pointer"
                >
                  Lembrar de mim
                </Label>
              </div>
              <button
                type="button"
                onClick={onResetPassword}
                className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Esqueceu a senha?
              </button>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6"
            >
              faça login
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-background text-muted-foreground">
                  Ou continue com
                </span>
              </div>
            </div>

            <Button
              type="button"
              onClick={onGoogleSignIn}
              variant="outline"
              className="w-full border-border hover:bg-muted py-6"
            >
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue com Google
            </Button>
          </form>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Ainda não tem uma conta?{" "}
              <button
                onClick={onCreateAccount}
                className="font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Criar conta
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
