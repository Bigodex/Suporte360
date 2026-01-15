"use client"

import type React from "react"

import { useMemo, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Sparkles, RotateCcw, Ruler, Anchor, Smartphone, Video } from "lucide-react"
import type { Benefit, Img, BenefitIconKey } from "../types"
import { BenefitImage } from "./benefit-image"
import { LightboxModal } from "./lightbox-modal"

const ICONS: Record<BenefitIconKey, React.ElementType> = {
  rotate: RotateCcw,
  ruler: Ruler,
  anchor: Anchor,
  smartphone: Smartphone,
  video: Video,
}

type BenefitCardProps = {
  benefit: Benefit
  allImages: Img[]
  index: number
}

export function BenefitCard({ benefit, allImages, index }: BenefitCardProps) {
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(index)

  const active = useMemo(() => allImages[activeIndex], [allImages, activeIndex])
  const Icon = ICONS[benefit.icon]
  const highlight = benefit.highlight

  function onOpen() {
    setActiveIndex(index)
    setOpen(true)
  }

  function onClose() {
    setOpen(false)
  }

  function onPrev() {
    setActiveIndex((prev) => (prev - 1 + allImages.length) % allImages.length)
  }

  function onNext() {
    setActiveIndex((prev) => (prev + 1) % allImages.length)
  }

  return (
    <>
      {/* Card responsivo - largura total em mobile, limitada em desktop */}
      <Card className="overflow-hidden border-foreground/10 shadow-sm rounded-2xl sm:rounded-3xl bg-card w-full max-w-full sm:max-w-sm p-1.5 sm:p-2">
        <BenefitImage img={benefit.image} onOpen={onOpen} />

        {/* CardContent responsivo */}
        <CardContent className="p-4 sm:p-6 pt-4 sm:pt-5 flex flex-col min-h-[18rem] sm:min-h-[20rem] md:min-h-[22.5rem]">
          {/* Ícone responsivo */}
          <div className="p-2.5 sm:p-3 bg-accent rounded-xl sm:rounded-2xl w-fit mb-2 sm:mb-3 border border-foreground/10">
            <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
          </div>

          {/* Título responsivo */}
          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1.5 sm:mb-2">{benefit.title}</h3>

          {/* Descrição responsiva */}
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>

          {/* Bullets responsivos */}
          <div className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2">
            {benefit.bullets.map((item) => (
              <div key={item} className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 mt-0.5 text-[#25D366] flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Highlight responsivo */}
          <div className="mt-auto pt-4 sm:pt-5">
            {highlight ? (
              <div className="rounded-xl sm:rounded-2xl border border-foreground/10 bg-muted p-3 sm:p-4">
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-foreground">
                  <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  {highlight.title}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">{highlight.text}</p>
              </div>
            ) : (
              <div className="rounded-xl sm:rounded-2xl border border-foreground/10 bg-muted p-3 sm:p-4">
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-foreground">
                  <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  Em resumo:
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                  Mais praticidade no dia a dia, com suporte firme e fácil de ajustar, garantindo estabilidade, conforto
                  visual.
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <LightboxModal
        open={open}
        onClose={onClose}
        active={active}
        currentImage={activeIndex}
        total={allImages.length}
        onPrev={onPrev}
        onNext={onNext}
      />
    </>
  )
}
