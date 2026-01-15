"use client"

import type React from "react"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Img = { src: string; alt: string }

type ImageGalleryProps = {
  images: Img[]
  currentImage: number
  setCurrentImage: React.Dispatch<React.SetStateAction<number>>
  active: Img
  onPrev: () => void
  onNext: () => void
  onOpenLightbox: () => void
}

export function ImageGallery({
  images,
  currentImage,
  setCurrentImage,
  active,
  onPrev,
  onNext,
  onOpenLightbox,
}: ImageGalleryProps) {
  return (
    <div className="w-full">
      <div className="flex flex-col-reverse lg:flex-row gap-3 sm:gap-4 items-center lg:items-start">
        <div className="flex lg:flex-col gap-1.5 sm:gap-2.5 justify-center overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0">
          {images.map((img, index) => {
            const activeThumb = currentImage === index
            return (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={[
                  "relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex-shrink-0 overflow-hidden rounded-lg sm:rounded-xl border transition-all bg-white",
                  activeThumb
                    ? "border border-primary ring-1 shadow-xl"
                    : "border-foreground/20 opacity-80 transition-all duration-300 ease-out hover:opacity-100 hover:border-foreground/25 hover:-translate-y-1 hover:shadow-lg",
                ].join(" ")}
                aria-label={`Ver imagem ${index + 1}`}
                type="button"
              >
                <Image
                  src={img.src || "/placeholder.svg"}
                  alt={img.alt}
                  fill
                  className="object-cover object-center"
                  sizes="64px"
                />
              </button>
            )
          })}
        </div>

        <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-card border shadow-sm">
          <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[3/5] bg-muted/40">
            <button
              type="button"
              onClick={onOpenLightbox}
              className="group absolute inset-0 w-full h-full cursor-zoom-in"
              aria-label="Abrir imagem em tela cheia"
            >
              <Image
                src={active.src || "/placeholder.svg"}
                alt={active.alt}
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent" />

              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                <div className="absolute inset-0 bg-background/25" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="rounded-xl sm:rounded-2xl border border-foreground/10 bg-white/85 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm">
                    <p className="text-xs sm:text-sm font-semibold text-foreground whitespace-nowrap">
                      Clique para abrir a imagem
                    </p>
                  </div>
                </div>
              </div>
            </button>

            <button
              onClick={onPrev}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2.5 rounded-full bg-white/90 backdrop-blur-sm border border-foreground/10 hover:bg-white transition-colors shadow-sm"
              aria-label="Imagem anterior"
              type="button"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            <button
              onClick={onNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2.5 rounded-full bg-white/90 backdrop-blur-sm border border-foreground/10 hover:bg-white transition-colors shadow-sm"
              aria-label="Próxima imagem"
              type="button"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1 sm:hidden">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all ${
                    i === currentImage ? "w-3 bg-foreground/80" : "w-1.5 bg-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
