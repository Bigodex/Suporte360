"use client"

import type React from "react"

import { Card, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageCircle, ChevronDown, ShieldCheck, Truck, Headphones } from "lucide-react"
import { scrollToId } from "../utils"

type ProductInfoProps = {
  quantity: number
  setQuantity: React.Dispatch<React.SetStateAction<number>>
  whatsappUrl: string
}

const WHATSAPP_URL =
  "https://wa.me/5546991162798?text=Ol%C3%A1!%20Quero%20comprar%20o%20Suporte%20para%20Celular%20(Kit%20com%202%20pe%C3%A7as)%20360%C2%B0%20por%20R%24%2024%2C90.%20Pode%20me%20passar%20o%20frete%20e%20formas%20de%20pagamento%3F"

export function ProductInfo({ quantity, setQuantity, whatsappUrl }: ProductInfoProps) {
  const isLimitReached = quantity >= 5
  const itemLabel = quantity === 1 ? "item" : "itens"

  return (
    <div className="flex w-full flex-col items-start">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
        Suporte para Celular 360°
      </h1>

      <div className="mt-2 flex flex-wrap gap-1.5 sm:gap-2">
        <Badge
          variant="secondary"
          className="bg-accent text-accent-foreground font-medium rounded-full px-2 sm:px-3 py-0.5 sm:py-1 border border-foreground/10 bg-accent/100 text-foreground/100 text-xs sm:text-sm"
        >
          Compatibilidade
        </Badge>
        <Badge
          variant="secondary"
          className="bg-accent text-accent-foreground font-medium rounded-full px-2 sm:px-3 py-0.5 sm:py-1 border border-foreground/10 bg-accent/100 text-foreground/100 text-xs sm:text-sm"
        >
          Altura ajustável
        </Badge>
        <Badge
          variant="secondary"
          className="bg-accent text-accent-foreground font-medium rounded-full px-2 sm:px-3 py-0.5 sm:py-1 border border-foreground/10 bg-accent/100 text-foreground/100 text-xs sm:text-sm"
        >
          Rotação 360°
        </Badge>
        <Badge
          variant="secondary"
          className="bg-accent text-accent-foreground font-medium rounded-full px-2 sm:px-3 py-0.5 sm:py-1 border border-foreground/10 bg-accent/100 text-foreground/100 text-xs sm:text-sm"
        >
          Base estável
        </Badge>
      </div>

      <div className="mt-4 sm:mt-6 w-full rounded-xl sm:rounded-2xl border border-border bg-card backdrop-blur-sm px-3 sm:px-5 py-3 sm:py-4 shadow-md">
        <ul className="space-y-2 sm:space-y-3 text-sm sm:text-[15px] lg:text-base text-muted-foreground leading-relaxed">
          <li className="flex items-start gap-2">
            <span className="text-sm sm:text-base">🚫</span>
            <span>Chega de apoiar o celular em livros, copos ou improvisos instáveis.</span>
          </li>

          <li className="flex items-start gap-2">
            <span className="text-sm sm:text-base">📏</span>
            <span>
              Suporte com <span className="text-foreground font-semibold">2 andares e altura ajustável</span>, mantendo
              o celular exatamente na linha dos olhos.
            </span>
          </li>

          <li className="flex items-start gap-2">
            <span className="text-sm sm:text-base">🎥</span>
            <span>Ideal para chamadas, aulas online, receitas, lives e gravações.</span>
          </li>

          <li className="flex items-start gap-2">
            <span className="text-sm sm:text-base">🧹</span>
            <span>Enquadramento firme e mesa mais organizada em poucos segundos.</span>
          </li>

          <li className="flex items-start gap-2">
            <span className="text-sm sm:text-base">✨</span>
            <span>
              Sensação imediata de <span className="text-foreground font-semibold">"setup pronto"</span>, sem esforço.
            </span>
          </li>
        </ul>
      </div>

      <Card className="mt-2 w-full rounded-xl sm:rounded-2xl border bg-card shadow-sm">
        <CardHeader className="p-4 sm:p-5 lg:p-6">
          <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* PREÇO */}
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <span className="whitespace-nowrap text-[22px] leading-none sm:text-3xl lg:text-[34px] font-extrabold text-foreground">
                R$ 24,90
              </span>

              <span className="whitespace-nowrap text-xs sm:text-sm lg:text-base text-muted-foreground line-through">
                R$ 39,90
              </span>
            </div>

            {/* QUANTIDADE */}
            <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 w-full sm:w-auto">
              <span className="whitespace-nowrap text-xs sm:text-sm text-muted-foreground">
                Quantidade
              </span>

              <div className="flex items-center rounded-xl border border-foreground/10 bg-background px-1.5 py-1 sm:px-2 sm:py-1.5">
                <Button
                  type="button"
                  variant="ghost"
                  className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg text-base sm:text-lg leading-none"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  disabled={quantity === 1}
                  aria-label="Diminuir quantidade"
                >
                  −
                </Button>

                <span className="w-8 sm:w-10 text-center text-sm sm:text-base font-semibold text-foreground tabular-nums">
                  {quantity}
                </span>

                <Button
                  type="button"
                  variant="ghost"
                  className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg text-base sm:text-lg leading-none"
                  onClick={() => setQuantity((q) => Math.min(5, q + 1))}
                  disabled={quantity === 5}
                  aria-label="Aumentar quantidade"
                >
                  +
                </Button>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="flex flex-col sm:flex-row gap-2 mt-3 sm:mt-4 w-full">
        <Button
          asChild
          className="relative w-full sm:w-auto h-10 sm:h-12 px-4 sm:px-6 rounded-xl sm:rounded-2xl font-semibold text-white shadow-sm
                             bg-[#25D366] hover:bg-[#20BD5A] text-sm sm:text-base"
        >
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <span className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 hover:opacity-100 transition-opacity" />
            <span className="relative inline-flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </span>
          </a>
        </Button>

        <Button
          variant="outline"
          size="lg"
          onClick={() => scrollToId("beneficios")}
          className="w-full sm:w-auto gap-2 text-sm sm:text-base h-10 sm:h-12 px-5 sm:px-7 rounded-xl sm:rounded-2xl border-foreground/15 bg-white/60 hover:bg-muted transition-colors"
        >
          Ver detalhes
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>

      <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 w-full">
        <div className="rounded-xl sm:rounded-2xl border border-foreground/10 bg-card/80 backdrop-blur-sm p-3 sm:p-4 flex items-center gap-2 sm:gap-3 shadow-sm">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-accent/100 flex items-center justify-center border border-foreground/10">
            <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
          <div className="min-w-0">
            <p className="text-xs sm:text-sm font-semibold text-foreground">Estável</p>
            <p className="text-xs text-muted-foreground">Base firme</p>
          </div>
        </div>

        <div className="rounded-xl sm:rounded-2xl border border-foreground/10 bg-card/80 backdrop-blur-sm p-3 sm:p-4 flex items-center gap-2 sm:gap-3 shadow-sm">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-accent/100 flex items-center justify-center border border-foreground/10">
            <Truck className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
          <div className="min-w-0">
            <p className="text-xs sm:text-sm font-semibold text-foreground">Frete claro</p>
            <p className="text-xs text-muted-foreground">Por CEP</p>
          </div>
        </div>

        <div className="rounded-xl sm:rounded-2xl border border-foreground/10 bg-card/80 backdrop-blur-sm p-3 sm:p-4 flex items-center gap-2 sm:gap-3 shadow-sm">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-accent/100 flex items-center justify-center border border-foreground/10">
            <Headphones className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
          <div className="min-w-0">
            <p className="text-xs sm:text-sm font-semibold text-foreground">Suporte</p>
            <p className="text-xs text-muted-foreground">WhatsApp</p>
          </div>
        </div>
      </div>
    </div>
  )
}
