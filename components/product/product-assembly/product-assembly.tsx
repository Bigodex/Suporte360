"use client"

import { LightboxModal } from "../product-hero/components/lightbox-modal"
import { quickNotes } from "./data"
import { useAssemblySteps } from "./hooks/UseAssemblySteps"
import { useLightbox } from "./hooks/UseLightbox"
import type { ProductAssemblyProps } from "./types"
import { AssemblyHeader } from "./components/AssemblyHeader"
import { SemComplicacaoCard } from "./components/SemComplicacaoCard"
import { AssemblyVideoCard } from "./components/AssemblyVideoCard"
import { AssemblyStepsGrid } from "./components/AssemblyStepsGrid"

export function ProductAssembly({ videoSrc, videoEmbedUrl, tutorialImages }: ProductAssemblyProps) {
  const { steps, images } = useAssemblySteps(tutorialImages)
  const { lightboxOpen, setLightboxOpen, activeIndex, openLightbox, onPrev, onNext, active } = useLightbox(images)

  return (
    <section id="montagem" className="px-4 sm:px-6 lg:px-12 py-10 sm:py-16 lg:py-14 bg-muted/40">
      <div className="max-w-6xl mx-auto">
        <AssemblyHeader />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-stretch -mt-4 sm:-mt-6">
          <SemComplicacaoCard quickNotes={quickNotes} />
          <AssemblyVideoCard videoSrc={videoSrc} videoEmbedUrl={videoEmbedUrl} />
        </div>

        <AssemblyStepsGrid steps={steps} onOpen={openLightbox} />
      </div>

      <LightboxModal
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        active={active}
        currentImage={activeIndex}
        total={images.length}
        onPrev={onPrev}
        onNext={onNext}
      />
    </section>
  )
}
