"use client"

import { useMemo, useState } from "react"
import type { TutorialImage } from "../types"

export function useLightbox(images: TutorialImage[]) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  function openLightbox(index: number) {
    setActiveIndex(index)
    setLightboxOpen(true)
  }

  function onPrev() {
    setActiveIndex((i) => (i - 1 + images.length) % images.length)
  }

  function onNext() {
    setActiveIndex((i) => (i + 1) % images.length)
  }

  const active = useMemo(() => images[activeIndex] ?? { src: "/placeholder.svg", alt: "Imagem" }, [images, activeIndex])

  return {
    lightboxOpen,
    setLightboxOpen,
    activeIndex,
    setActiveIndex,
    openLightbox,
    onPrev,
    onNext,
    active,
  }
}
