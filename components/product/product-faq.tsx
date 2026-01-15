import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Serve para iPhone e Android?",
    answer:
      "Sim. O suporte funciona com a maioria dos celulares (iPhone e Android). A garra abre até 9 cm e normalmente encaixa bem com ou sem capinha. Se você usa capinha bem grossa, pode chamar no WhatsApp e confirmar o modelo para ter certeza.",
  },
  {
    question: "Ele fica firme mesmo? Ou balança?",
    answer:
      "A base é pesada e foi feita para estabilidade. Em mesa lisa, a sensação é de firmeza bem superior aos suportes leves. Em superfícies muito irregulares, qualquer suporte pode ter alguma variação — mas aqui a base ajuda a reduzir isso bastante.",
  },
  {
    question: "Dá pra usar em pé e deitado?",
    answer:
      "Dá sim. A rotação 360° permite usar tanto na vertical quanto na horizontal. Isso facilita para chamadas, lives, assistir vídeos, estudar e cozinhar seguindo receita no celular.",
  },
  {
    question: "Esse kit vem com quantas unidades?",
    answer:
      "Vem com 2 suportes completos. É ótimo para manter um no trabalho e outro em casa, ou então presentear alguém e ainda ficar com um para você.",
  },
  {
    question: "Como é o frete?",
    answer:
      "O frete é por conta do comprador e calculado pelo CEP. Ao clicar em “Comprar agora”, você vai direto para o WhatsApp e nós informamos o valor do frete e as formas de pagamento.",
  },
  {
    question: "É difícil de montar?",
    answer:
      "Não. A montagem é simples e rápida: rosquear base + haste + braço 360° + garra. Sem ferramenta, sem mistério. E depois é só ajustar o ângulo.",
  },
  {
    question: "Pra que tipo de uso ele vale mais a pena?",
    answer:
      "Se você faz chamadas frequentes, estuda pelo celular, grava vídeos, assiste conteúdo enquanto trabalha, cozinha com receita no celular ou quer um setup mais organizado, ele vira um item que você usa todo dia.",
  },
  {
    question: "Se eu tiver dúvida antes de comprar?",
    answer:
      "Ótimo — essa é a melhor forma de comprar com segurança. Chama no WhatsApp, diz seu modelo de celular e como pretende usar (mesa, bancada, gravação etc.) e a gente te orienta certinho.",
  },
]

export function ProductFAQ() {
  return (
    <section id="faq" className="px-6 py-16 lg:px-12 lg:py-14 bg-muted/40">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">Perguntas frequentes</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A ideia aqui é você comprar com clareza. Se algo não ficou 100%, chama no WhatsApp e a gente te explica rapidinho.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card/70 backdrop-blur-sm border border-foreground/10 rounded-2xl px-5 data-[state=open]:shadow-sm transition-all"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
