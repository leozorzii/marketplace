import { SignInPage } from "@/components/ui/sign-in";
import heroImage from "@/assets/agro-robot-hero.png";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Sign In submitted:", data);
    // Redirect to marketplace after login
    navigate("/marketplace");
  };

  const handleGoogleSignIn = () => {
    console.log("Continuar com Google");
    alert("Continue com google");
  };
  
  const handleResetPassword = () => {
    alert("Redefinir senha");
  };

  const handleCreateAccount = () => {
    alert("Criando conta");
  };

  return (
    <div className="bg-background text-foreground">
      <SignInPage
        heroImageSrc={heroImage}
        onSignIn={handleSignIn}
        onGoogleSignIn={handleGoogleSignIn}
        onResetPassword={handleResetPassword}
        onCreateAccount={handleCreateAccount}
      />
    </div>
  );
};

export default Index;
