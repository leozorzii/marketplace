import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertCircle } from "lucide-react";

interface TermsOfUseDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAccept: () => void;
}

export const TermsOfUseDialog = ({ open, onOpenChange, onAccept }: TermsOfUseDialogProps) => {
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      setHasScrolledToBottom(false);
    }
  }, [open]);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const element = event.currentTarget;
    const threshold = 10; // pixels from bottom
    const isAtBottom = element.scrollHeight - element.scrollTop - element.clientHeight < threshold;
    
    if (isAtBottom && !hasScrolledToBottom) {
      setHasScrolledToBottom(true);
    }
  };

  const handleAccept = () => {
    onAccept();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Termos de Uso do Marketplace</DialogTitle>
          <DialogDescription>
            Por favor, leia atentamente os termos de uso antes de continuar
          </DialogDescription>
        </DialogHeader>

        <ScrollArea 
          className="flex-1 pr-4 border rounded-md p-4" 
          onScroll={handleScroll}
        >
          <div className="space-y-4 text-sm">
            <div>
              <p className="text-xs text-muted-foreground mb-4">
                Última atualização: 30 de novembro de 2023.
              </p>
              
              <p className="mb-4">
                Bem-vindo ao Marketplace AGROCASH, uma plataforma que oferece produtos e serviços para o seu agronegócio. 
                Estes Termos de Uso estabelecem as diretrizes para o uso do Marketplace AGROCASH e regulamentam as relações 
                entre os usuários (doravante "Usuário") e a AGROCASH. Estes Termos de Uso estão vinculados aos Termos de Uso 
                do software AGROCASH. Mediante a aceitação do respectivo Termo Geral e contratação do espaço marketplace, 
                o usuário aceita as políticas e regras aqui descritas.
              </p>

              <p className="font-semibold mb-4">
                A ACEITAÇÃO DO TERMO GERAL E DESTE TERMO DE USO SÃO ABSOLUTAMENTE INDISPENSÁVEIS À UTILIZAÇÃO DOS SERVIÇOS.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">1. Objeto</h3>
              <p className="mb-2">
                O Marketplace AGROCASH oferece uma variedade de produtos e serviços, sendo que este Termo de Uso 
                em específico trata dos seguintes serviços:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <strong>(a) Intermediação de Negócios:</strong> A AGROCASH atua como intermediador de negócios, 
                  facilitando a demanda dos Usuários por produtos e serviços oferecidos por terceiros. Nesse caso, 
                  a AGROCASH não assume qualquer responsabilidade pelo sucesso ou insucesso da demanda, e não é parte 
                  contratada na transação entre Usuário e terceiros. A AGROCASH poderá receber uma comissão ou valor 
                  percentual referente ao serviço adquirido como compensação por sua intermediação.
                </li>
                <li>
                  <strong>(b) Consultoria Financeira:</strong> A AGROCASH também oferece serviços de consultoria 
                  financeira, sendo parte contratada na transação. Nesse caso, a relação é regida por termos de 
                  adesão próprios, que estabelecem as obrigações e direitos específicos entre as partes.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">2. Aceitação dos Termos de Uso</h3>
              <p className="mb-4">
                Ao acessar ou utilizar o Marketplace AGROCASH, o Usuário concorda com estes Termos de Uso. 
                Se você não concordar com qualquer parte destes termos, não deve usar o Marketplace AGROCASH.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">3. Uso Responsável</h3>
              <p className="mb-2">
                <strong>3.1.</strong> O Usuário concorda em utilizar o espaço Marketplace AGROCASH de forma responsável, 
                respeitando as leis e regulamentos aplicáveis. Qualquer uso indevido, fraudulento ou prejudicial do 
                Marketplace AGROCASH resultará na suspensão ou encerramento da conta do Usuário.
              </p>
              <p className="mb-2">
                <strong>3.2.</strong> A fim de acessar o Website e utilizar os produtos oferecidos, você deve manter 
                e operar o software e hardware necessários para tal. Você é o único e exclusivo responsável por adquirir, 
                instalar e manter todo e qualquer software e hardware necessários para acessar o Website e utilizar os 
                produtos oferecidos.
              </p>
              <p className="mb-2">
                <strong>3.3.</strong> Para o efetivo funcionamento do nosso marketplace, a AGROCASH pode solicitar que 
                mantenha as informações de seu cadastro regularmente atualizadas, bem como que as revise antes de aceitar 
                qualquer produto ou serviço ofertado.
              </p>
              <p className="mb-4">
                <strong>3.4.</strong> Ao aceitar o presente Termo, o usuário é obrigado a notificar imediatamente 
                O AGROCASH de qualquer uso não autorizado de seus Dados de Acesso ou qualquer outra violação de segurança.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">4. Ofertas de Terceiros</h3>
              <p className="mb-4">
                Os produtos e serviços oferecidos por terceiros no Marketplace AGROCASH são de responsabilidade exclusiva 
                desses terceiros. A AGROCASH não garante a qualidade, disponibilidade ou precisão das ofertas de terceiros.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">5. Responsabilidade do Usuário</h3>
              <p className="mb-4">
                O Usuário é responsável por todas as transações e comunicações realizadas através de sua conta no 
                Marketplace AGROCASH. O Usuário concorda em manter a confidencialidade de suas credenciais de login 
                e notificar imediatamente a AGROCASH sobre qualquer uso não autorizado de sua conta.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">6. Propriedade Intelectual</h3>
              <p className="mb-4">
                Todo o conteúdo e materiais disponíveis no Marketplace AGROCASH, incluindo, mas não se limitando a, 
                textos, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais e software, são de 
                propriedade da AGROCASH ou de seus fornecedores de conteúdo e são protegidos pelas leis de propriedade 
                intelectual aplicáveis.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">7. Limitação de Responsabilidade</h3>
              <p className="mb-4">
                A AGROCASH não será responsável por quaisquer danos diretos, indiretos, incidentais, consequenciais ou 
                punitivos decorrentes do uso ou incapacidade de usar o Marketplace AGROCASH, mesmo que a AGROCASH tenha 
                sido avisada da possibilidade de tais danos.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">8. Modificações dos Termos</h3>
              <p className="mb-4">
                A AGROCASH reserva-se o direito de modificar estes Termos de Uso a qualquer momento. As modificações 
                entrarão em vigor imediatamente após a publicação no Marketplace AGROCASH. O uso continuado do Marketplace 
                após tais modificações constitui aceitação dos novos Termos de Uso.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">9. Lei Aplicável</h3>
              <p className="mb-4">
                Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer disputa decorrente 
                destes termos será submetida à jurisdição exclusiva dos tribunais brasileiros.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">10. Contato</h3>
              <p className="mb-4">
                Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco através do e-mail: 
                contato@agrocash.com
              </p>
            </div>

            <div className="pt-4 border-t">
              <p className="text-xs text-muted-foreground">
                Ao aceitar estes termos, você declara que leu, compreendeu e concorda em cumprir todas as disposições 
                aqui estabelecidas.
              </p>
            </div>
          </div>
        </ScrollArea>

        {!hasScrolledToBottom && (
          <div className="flex items-center gap-2 text-amber-600 text-sm py-2">
            <AlertCircle className="h-4 w-4" />
            <span>Role até o final para habilitar o botão de aceitar</span>
          </div>
        )}

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancelar
          </Button>
          <Button
            onClick={handleAccept}
            disabled={!hasScrolledToBottom}
            className="bg-primary hover:bg-primary/90"
          >
            Aceitar Termos
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
