"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

type Img = { src: string; alt: string }

type LightboxModalProps = {
  open: boolean
  onClose: () => void
  active: Img
  currentImage: number
  total: number
  onPrev: () => void
  onNext: () => void
}

export function LightboxModal({ open, onClose, active, currentImage, total, onPrev, onNext }: LightboxModalProps) {
  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Visualização ampliada da imagem"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      {/* Container responsivo */}
      <div className="relative h-full w-full p-2 sm:p-4">
        {/* Botão fechar - responsivo */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar imagem"
          className="absolute right-2 top-2 sm:right-4 sm:top-4 z-20 inline-flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm hover:bg-black/70 transition"
        >
          <X className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        {/* Área da imagem */}
        <div className="relative h-full w-full">
          <Image
            src={active.src || "/placeholder.svg"}
            alt={active.alt}
            fill
            className="object-contain object-center"
            priority
            sizes="100vw"
          />

          {/* Prev - responsivo */}
          <button
            type="button"
            onClick={onPrev}
            aria-label="Imagem anterior (modal)"
            className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 z-20 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm hover:bg-black/60 transition"
          >
            <ChevronLeft className="h-5 w-5 sm:h-7 sm:w-7" />
          </button>

          {/* Next - responsivo */}
          <button
            type="button"
            onClick={onNext}
            aria-label="Próxima imagem (modal)"
            className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 z-20 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm hover:bg-black/60 transition"
          >
            <ChevronRight className="h-5 w-5 sm:h-7 sm:w-7" />
          </button>

          {/* Indicador de imagem - responsivo */}
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 rounded-full bg-black/55 px-3 py-1.5 sm:px-4 sm:py-2 backdrop-blur-sm">
            <span className="text-xs sm:text-sm font-medium text-white">
              {currentImage + 1} / {total}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
