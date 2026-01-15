"use client"

import { useMemo, useState, useEffect } from "react"
import { images, WHATSAPP_URL } from "./constants"
import { Header } from "./components/header"
import { ImageGallery } from "./components/image-gallery"
import { ProductInfo } from "./components/product-info"
import { LightboxModal } from "./components/lightbox-modal"

export function ProductHero() {
  const [currentImage, setCurrentImage] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)

  const active = useMemo(() => images[currentImage], [currentImage])

  useEffect(() => {
    if (!lightboxOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false)
      if (e.key === "ArrowRight") nextImage()
      if (e.key === "ArrowLeft") prevImage()
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxOpen])

  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-16 sm:-top-24 left-1/2 h-48 sm:h-72 w-[20rem] sm:w-[44rem] -translate-x-1/2 rounded-full bg-foreground/5 blur-3xl" />
        <div className="absolute top-20 sm:top-28 right-0 h-32 sm:h-56 w-32 sm:w-56 rounded-full bg-primary/15 blur-3xl" />
      </div>

      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} whatsappUrl={WHATSAPP_URL} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 py-6 sm:py-10 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-12 items-start">
          <ImageGallery
            images={images}
            currentImage={currentImage}
            setCurrentImage={setCurrentImage}
            active={active}
            onPrev={prevImage}
            onNext={nextImage}
            onOpenLightbox={() => setLightboxOpen(true)}
          />

          <ProductInfo quantity={quantity} setQuantity={setQuantity} whatsappUrl={WHATSAPP_URL} />
        </div>
      </div>

      <LightboxModal
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        active={active}
        currentImage={currentImage}
        total={images.length}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </section>
  )
}
