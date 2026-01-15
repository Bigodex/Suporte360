"use client"

import Image from "next/image"
import type { Img } from "../types"

type BenefitImageProps = {
  img: Img
  onOpen: () => void
}

export function BenefitImage({ img, onOpen }: BenefitImageProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative w-full overflow-hidden rounded-xl sm:rounded-2xl"
      aria-label="Abrir imagem ampliada"
    >
      {/* Altura responsiva da imagem */}
      <div className="relative h-48 sm:h-56 md:h-60 w-full">
        <Image
          src={img.src || "/placeholder.svg"}
          alt={img.alt}
          fill
          className="object-cover object-center bg-transparent"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />

      {/* Overlay de hover - escondido em touch devices */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
        <div className="absolute inset-0 bg-background/25" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="rounded-xl sm:rounded-2xl border border-foreground/10 bg-white/85 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 shadow-sm">
            <p className="text-xs sm:text-sm font-semibold text-foreground whitespace-nowrap">
              Clique para abrir a imagem
            </p>
          </div>
        </div>
      </div>
    </button>
  )
}
