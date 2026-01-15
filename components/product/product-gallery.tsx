"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

const phone = "5546991162798"
const message =
  "Olá! Quero comprar o Suporte para Celular (Kit com 2 peças) 360° por R$ 24,90. Pode me passar o frete e formas de pagamento?"
const WHATSAPP_URL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

const galleryImages = [
  {
    src: "/products/suporte_360/2.png",
    alt: "Altura ajustável de 23 a 32 cm",
    title: "Altura Ajustável",
    description: "Evita ficar curvado e deixa o celular sempre na linha dos olhos.",
  },
  {
    src: "/products/suporte_360/3.png",
    alt: "Rotação completa de 360 graus",
    title: "Rotação 360°",
    description: "Ajuste o enquadramento perfeito para chamadas, vídeos e gravações.",
  },
  {
    src: "/products/suporte_360/7.png",
    alt: "Base pesada com alta estabilidade",
    title: "Base Pesada",
    description: "Mais firmeza na mesa, sem tremer ou deslizar durante o uso.",
  },
  {
    src: "/products/suporte_360/9.png",
    alt: "Garra de encaixe compatível",
    title: "Garra de Encaixe",
    description: "Compatível com todos os modelos, segura sem apertar o celular.",
  },
]

export function ProductGallery() {
  return (
    <section id="galeria" className="px-6 py-2 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-foreground">
            Veja como ele melhora sua rotina
          </h2>

          <p className="mt-5 text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Em poucos segundos você percebe: mais conforto, mais estabilidade e uma mesa organizada para
            trabalhar, estudar ou se divertir.
          </p>

          <div className="mt-8 flex justify-center">
            <Button
              asChild
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2 rounded-2xl h-12 px-8 font-semibold shadow-md"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Quero garantir o meu
              </a>
            </Button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="group rounded-3xl border bg-card shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative aspect-square bg-muted">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.05]"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-5">
                <p className="text-base font-semibold text-foreground">{img.title}</p>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {img.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
