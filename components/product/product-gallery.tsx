"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

const phone = "5546991162798"
const message =
  "Olá! Quero comprar o Suporte para Celular (Kit com 2 peças) 360° por R$ 24,90. Pode me passar o frete e formas de pagamento?"
const WHATSAPP_URL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

const galleryImages = [
  { src: "/products/suporte_360/2.png", alt: "Altura ajustável 23 a 32 cm - comparação", caption: "Altura Ajustável" },
  { src: "/products/suporte_360/3.png", alt: "Rotação 360° e posicionamento", caption: "Rotação 360°" },
  { src: "/products/suporte_360/7.png", alt: "Base pesada e estabilidade", caption: "Base Pesada" },
  { src: "/products/suporte_360/9.png", alt: "Detalhes do suporte e encaixes", caption: "Garra de Encaixe" },
]

export function ProductGallery() {
  return (
    <section id="galeria" className="px-6 py-16 lg:px-12 lg:py-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            Veja em uso
          </h2>

          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Aqui é onde você entende rápido: ele encaixa bem, fica firme e deixa o celular na posição
            certa. Ideal para quem quer praticidade sem bagunça na mesa.
          </p>

          <div className="mt-6 flex justify-center">
            <Button
              asChild
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2 rounded-2xl h-12 px-6 font-semibold shadow-sm"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Quero garantir o meu
              </a>
            </Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="group rounded-3xl border bg-card/70 backdrop-blur-sm shadow-sm overflow-hidden"
            >
              <div className="relative aspect-square bg-muted">
                <Image
                  src={img.src || "/placeholder.svg"}
                  alt={img.alt}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-4">
                <p className="text-sm font-semibold text-foreground">{img.caption}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Um detalhe que parece pequeno, mas no uso diário faz diferença.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
