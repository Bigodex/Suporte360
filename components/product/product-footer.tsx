"use client"

import { MessageCircle, ShieldCheck, Truck, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_URL =
  "https://wa.me/5546991162798?text=Ol%C3%A1!%20Quero%20comprar%20o%20Suporte%20para%20Celular%20(Kit%20com%202%20pe%C3%A7as)%20360%C2%B0%20por%20R%24%2024%2C90.%20Pode%20me%20passar%20o%20frete%20e%20formas%20de%20pagamento%3F"

const perks = [
  {
    icon: ShieldCheck,
    title: "Compra com clareza",
    desc: "Tire dúvidas antes de fechar",
  },
  {
    icon: Truck,
    title: "Frete transparente",
    desc: "Calculado pelo seu CEP",
  },
  {
    icon: Headphones,
    title: "Atendimento rápido",
    desc: "WhatsApp direto, sem enrolação",
  },
]

export function ProductFooter() {
  return (
    <footer className="relative border-t border-foreground/10 bg-background">
      {/* fundo sutil */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />

      <div className="relative px-6 py-14 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* topo */}
          <div className="grid lg:grid-cols-[1.15fr_1.4fr_0.9fr] gap-8 items-start">
            {/* brand */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl border border-foreground/10 bg-card/70 backdrop-blur-sm grid place-items-center shadow-sm">
                  <span className="text-lg font-black tracking-tight text-foreground">T</span>
                </div>
                <div>
                  <p className="text-xl font-extrabold tracking-tight text-foreground">Tecs</p>
                  <p className="text-xs text-muted-foreground">Tecnologia útil pro dia a dia</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                Produtos práticos, explicação direta e suporte no WhatsApp para calcular frete por CEP e fechar a compra
                com segurança.
              </p>

              <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-card/70 backdrop-blur-sm px-3 py-1.5 text-xs text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-[#25D366]" />
                Resposta rápida no WhatsApp
              </div>
            </div>

            {/* perks */}
            <div className="grid sm:grid-cols-3 gap-3">
              {perks.map((p) => {
                const Icon = p.icon
                return (
                  <div
                    key={p.title}
                    className="group rounded-3xl border border-foreground/10 bg-card/70 backdrop-blur-sm p-4 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="flex flex-wrap items-start gap-3">
                      <div className="p-2.5 rounded-2xl bg-accent/70 border border-foreground/10 transition-colors group-hover:bg-accent">
                        <Icon className="h-5 w-5 text-foreground" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-foreground leading-tight">{p.title}</p>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA */}
            <div className="flex lg:justify-end">
              <div className="w-full lg:w-auto">
                <Button
                  asChild
                  className="relative w-full lg:w-auto h-12 px-6 rounded-2xl font-semibold text-white shadow-sm
                             bg-[#25D366] hover:bg-[#20BD5A]"
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 hover:opacity-100 transition-opacity" />
                    <span className="relative inline-flex items-center gap-2">
                      <MessageCircle className="h-4 w-4" />
                      Falar no WhatsApp
                    </span>
                  </a>
                </Button>

                <p className="mt-2 text-xs text-muted-foreground text-center lg:text-right">
                  Frete por conta do comprador • Informe seu CEP
                </p>
              </div>
            </div>
          </div>

          {/* bottom */}
          <div className="mt-10 pt-8 border-t border-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground">
              ©{" "}
              <span suppressHydrationWarning>
                {new Date().getFullYear()}
              </span>{" "}
              Tecs. Todos os direitos reservados.
            </p>

            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground/30" />
                Atendimento via WhatsApp
              </span>
              <span className="hidden sm:inline text-foreground/20">•</span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground/30" />
                Compra orientada
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
