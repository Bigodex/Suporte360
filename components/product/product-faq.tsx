"use client"

import { useMemo, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
  MessageCircle,
  Smartphone,
  ShieldCheck,
  RotateCcw,
  Package,
  Truck,
  Wrench,
  HelpCircle,
  Search,
} from "lucide-react"

const WHATSAPP_URL =
  "https://wa.me/5546991162798?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20o%20suporte%20de%20celular.%20Pode%20me%20ajudar%3F"

type FAQItem = {
  question: string
  answer: string
  category: "Compatibilidade" | "Estabilidade" | "Uso" | "Entrega" | "Montagem" | "Conteúdo" | "Ajuda"
  icon: any
  hint: string
}

const faqs: FAQItem[] = [
  {
    question: "Serve para iPhone e Android?",
    answer:
      "Sim. O suporte funciona com a maioria dos celulares (iPhone e Android). A garra abre até 9 cm e normalmente encaixa bem com ou sem capinha. Se você usa capinha bem grossa, pode chamar no WhatsApp e confirmar o modelo para ter certeza.",
    category: "Compatibilidade",
    icon: Smartphone,
    hint: "Garra abre até 9 cm",
  },
  {
    question: "Ele fica firme mesmo? Ou balança?",
    answer:
      "A base é pesada e foi feita para estabilidade. Em mesa lisa, a sensação é de firmeza bem superior aos suportes leves. Em superfícies muito irregulares, qualquer suporte pode ter alguma variação — mas aqui a base ajuda a reduzir isso bastante.",
    category: "Estabilidade",
    icon: ShieldCheck,
    hint: "Base pesada e estável",
  },
  {
    question: "Dá pra usar em pé e deitado?",
    answer:
      "Dá sim. A rotação 360° permite usar tanto na vertical quanto na horizontal. Isso facilita para chamadas, lives, assistir vídeos, estudar e cozinhar seguindo receita no celular.",
    category: "Uso",
    icon: RotateCcw,
    hint: "Vertical e horizontal",
  },
  {
    question: "Esse kit vem com quantas unidades?",
    answer:
      "Vem com 2 suportes completos. É ótimo para manter um no trabalho e outro em casa, ou então presentear alguém e ainda ficar com um para você.",
    category: "Conteúdo",
    icon: Package,
    hint: "Vem 2 unidades",
  },
  {
    question: "Como é o frete?",
    answer:
      "O frete é por conta do comprador e calculado pelo CEP. Ao clicar em “Comprar agora”, você vai direto para o WhatsApp e nós informamos o valor do frete e as formas de pagamento.",
    category: "Entrega",
    icon: Truck,
    hint: "Calculado por CEP",
  },
  {
    question: "É difícil de montar?",
    answer:
      "Não. A montagem é simples e rápida: rosquear base + haste + braço 360° + garra. Sem ferramenta, sem mistério. E depois é só ajustar o ângulo.",
    category: "Montagem",
    icon: Wrench,
    hint: "Sem ferramenta",
  },
  {
    question: "Pra que tipo de uso ele vale mais a pena?",
    answer:
      "Se você faz chamadas frequentes, estuda pelo celular, grava vídeos, assiste conteúdo enquanto trabalha, cozinha com receita no celular ou quer um setup mais organizado, ele vira um item que você usa todo dia.",
    category: "Uso",
    icon: HelpCircle,
    hint: "Uso diário real",
  },
  {
    question: "Se eu tiver dúvida antes de comprar?",
    answer:
      "Ótimo — essa é a melhor forma de comprar com segurança. Chama no WhatsApp, diz seu modelo de celular e como pretende usar (mesa, bancada, gravação etc.) e a gente te orienta certinho.",
    category: "Ajuda",
    icon: MessageCircle,
    hint: "Atendimento no WhatsApp",
  },
]

const CATEGORY_ORDER: FAQItem["category"][] = [
  "Compatibilidade",
  "Estabilidade",
  "Uso",
  "Conteúdo",
  "Entrega",
  "Montagem",
  "Ajuda",
]

export function ProductFAQ() {
  const [query, setQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<FAQItem["category"] | "Todas">("Todas")

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return faqs.filter((f) => {
      const matchesQuery =
        !q || f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q) || f.hint.toLowerCase().includes(q)
      const matchesCategory = activeCategory === "Todas" ? true : f.category === activeCategory
      return matchesQuery && matchesCategory
    })
  }, [query, activeCategory])

  const categories = useMemo(() => {
    const counts = new Map<string, number>()
    for (const item of faqs) counts.set(item.category, (counts.get(item.category) || 0) + 1)
    return CATEGORY_ORDER.filter((c) => counts.has(c)).map((c) => ({ label: c, count: counts.get(c) || 0 }))
  }, [])

  return (
    <section id="faq" className="px-4 sm:px-6 py-14 sm:py-16 lg:px-12 lg:py-20 bg-muted/40">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">Perguntas frequentes</h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A ideia aqui é você comprar com clareza. Se algo não ficou 100%, chama no WhatsApp e a gente te explica rapidinho.
          </p>
        </div>

        {/* Layout */}
        <div className="grid gap-8 lg:gap-10 lg:grid-cols-[1fr,1.25fr] items-start">
          {/* Left: Tools / CTA */}
          <aside>
            <div className="rounded-2xl border border-foreground/10 bg-card/70 backdrop-blur-sm p-4 sm:p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 grid place-items-center size-10 rounded-xl bg-foreground/5 border border-foreground/10">
                  <Search className="size-5 text-foreground" />
                </div>

                <div className="min-w-0">
                  <p className="font-semibold text-foreground leading-tight">Encontre sua dúvida rapidinho</p>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    Digite uma palavra (ex: “frete”, “montar”, “iPhone”, “360”).
                  </p>
                </div>
              </div>

              {/* Search */}
              <div className="mt-4">
                <label className="sr-only" htmlFor="faq-search">
                  Buscar no FAQ
                </label>
                <div className="relative">
                  <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <input
                    id="faq-search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Buscar no FAQ..."
                    className="w-full h-11 rounded-xl border border-foreground/10 bg-background/60 px-9 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/15"
                  />
                  {query.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setQuery("")}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-xs text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition"
                    >
                      Limpar
                    </button>
                  )}
                </div>
              </div>

              {/* Categories */}
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setActiveCategory("Todas")}
                  className={[
                    "h-9 px-3 rounded-xl border text-sm transition",
                    activeCategory === "Todas"
                      ? "bg-foreground text-background border-foreground"
                      : "bg-background/50 border-foreground/10 text-foreground hover:bg-foreground/5",
                  ].join(" ")}
                >
                  Todas
                  <span className={["ml-2 text-xs", activeCategory === "Todas" ? "text-background/80" : "text-muted-foreground"].join(" ")}>
                    {faqs.length}
                  </span>
                </button>

                {categories.map((c) => (
                  <button
                    key={c.label}
                    type="button"
                    onClick={() => setActiveCategory(c.label as any)}
                    className={[
                      "h-9 px-3 rounded-xl border text-sm transition",
                      activeCategory === c.label
                        ? "bg-foreground text-background border-foreground"
                        : "bg-background/50 border-foreground/10 text-foreground hover:bg-foreground/5",
                    ].join(" ")}
                  >
                    {c.label}
                    <span className={["ml-2 text-xs", activeCategory === c.label ? "text-background/80" : "text-muted-foreground"].join(" ")}>
                      {c.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* WhatsApp */}
              <div className="mt-5">
                <Button asChild className="w-full rounded-xl">
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2">
                    <MessageCircle className="size-4" />
                    Tirar dúvida no WhatsApp
                  </a>
                </Button>

                <div className="mt-3 grid gap-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="size-4" />
                    <span>Compra com mais segurança: confirme seu modelo.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="size-4" />
                    <span>Frete por CEP e formas de pagamento no atendimento.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RotateCcw className="size-4" />
                    <span>Uso vertical/horizontal e ajuste 360°.</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Right: Accordion */}
          <div className="min-w-0">
            {filtered.length === 0 ? (
              <div className="rounded-2xl border border-foreground/10 bg-card/70 backdrop-blur-sm p-6 text-center">
                <p className="font-semibold text-foreground">Não encontrei essa dúvida 😅</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Tenta outra palavra ou chama no WhatsApp que a gente te orienta certinho.
                </p>
                <div className="mt-4">
                  <Button asChild className="rounded-xl">
                    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                      <MessageCircle className="size-4" />
                      Falar no WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            ) : (
              <Accordion type="single" collapsible className="w-full space-y-2.5">
                {filtered.map((faq, index) => {
                  const Icon = faq.icon
                  return (
                    <AccordionItem
                      key={`${faq.question}-${index}`}
                      value={`item-${index}`}
                      className={[
                        "group rounded-2xl border border-foreground/10 bg-card/70 backdrop-blur-sm",
                        "px-4 sm:px-5",
                        "data-[state=open]:shadow-sm transition-all",
                      ].join(" ")}
                    >
                      <AccordionTrigger
                        className={[
                          "hover:no-underline text-left",
                          "py-4 sm:py-4",
                          "flex items-start gap-3",
                        ].join(" ")}
                      >
                        {/* Icon */}
                        <span className="mt-0.5 grid place-items-center size-9 sm:size-10 rounded-xl border border-foreground/10 bg-foreground/5 shrink-0">
                          <Icon className="size-4 sm:size-5 text-foreground" />
                        </span>

                        {/* Text */}
                        <span className="min-w-0">
                          <span className="block font-semibold text-[15px] sm:text-base text-foreground leading-snug">
                            {faq.question}
                          </span>

                          {/* Hint */}
                          <span className="mt-1 block text-xs sm:text-sm text-muted-foreground leading-snug">
                            {faq.hint}
                          </span>
                        </span>
                      </AccordionTrigger>

                      <AccordionContent className="pb-4 sm:pb-5 pl-0 sm:pl-[52px] text-sm sm:text-[15px] text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  )
                })}
              </Accordion>
            )}

            {/* Footer nudge (mobile) */}
            <div className="mt-6 lg:hidden">
              <div className="rounded-2xl border border-foreground/10 bg-card/70 backdrop-blur-sm p-4">
                <p className="font-semibold text-foreground">Ainda ficou alguma dúvida?</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Chama no WhatsApp e manda seu modelo de celular — a gente confirma rapidinho.
                </p>
                <div className="mt-3">
                  <Button asChild className="w-full rounded-xl">
                    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                      <MessageCircle className="size-4" />
                      Falar no WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
