"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

const WHATSAPP_URL =
  "https://wa.me/5546991162798?text=Ol%C3%A1!%20Quero%20comprar%20o%20Suporte%20para%20Celular%20(Kit%20com%202%20pe%C3%A7as)%20360%C2%B0%20por%20R%24%2024%2C90.%20Pode%20me%20passar%20o%20frete%20e%20formas%20de%20pagamento%3F"

export function StickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="bg-background/92 backdrop-blur-md border-t border-foreground/10 shadow-[0_-8px_30px_rgba(0,0,0,0.12)]">
        <div className="p-4 pb-[calc(env(safe-area-inset-bottom)+16px)]">
          <div className="flex items-center justify-between gap-4 max-w-lg mx-auto">
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">Kit 2 peças</p>
              <p className="text-xl font-bold text-foreground leading-tight">R$ 24,90</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">Frete por conta do comprador</p>
            </div>

            <Button
              asChild
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2 rounded-2xl flex-1 h-12 font-semibold shadow-sm"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Comprar agora
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
