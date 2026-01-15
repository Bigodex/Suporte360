"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import type { Step } from "../types"

type AssemblyStepsGridProps = {
  steps: Step[]
  onOpen: (index: number) => void
}

export function AssemblyStepsGrid({ steps, onOpen }: AssemblyStepsGridProps) {
  return (
    <div className="mt-6 sm:mt-10 lg:mt-16 space-y-4 sm:space-y-6">
      <div className="text-center">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-foreground -mt-4 sm:-mt-6">
          Passo a passo
        </h3>
        <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
          <span className="hidden sm:inline">
            Passe o mouse para ver o botão e clique para ampliar a imagem no modal.
          </span>
          <span className="sm:hidden">Toque na imagem para ampliar no modal.</span>
        </p>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
        {steps.map((step, idx) => (
          <Card
            key={step.number}
            className="rounded-2xl sm:rounded-3xl border bg-card/70 backdrop-blur-sm shadow-sm overflow-hidden"
          >
            <CardContent className="p-0">
              <button
                type="button"
                onClick={() => onOpen(idx)}
                className="group relative w-full text-left cursor-zoom-in active:scale-[0.98] transition-transform"
                aria-label={`Abrir imagem do passo ${step.number}`}
              >
                <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden">
                  <Image
                    src={step.image.src || "/placeholder.svg"}
                    alt={step.image.alt}
                    fill
                    priority={idx < 3}
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                  />

                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 sm:transition-opacity">
                    <div className="absolute inset-0 bg-background/25" />
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="rounded-xl sm:rounded-2xl border border-foreground/10 bg-white/85 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 shadow-sm">
                        <p className="text-xs sm:text-sm font-semibold text-foreground whitespace-nowrap leading-none">
                          Clique para abrir
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-background/90 backdrop-blur-sm border border-foreground/10 flex items-center justify-center shadow-sm">
                      <span className="text-xs sm:text-sm font-bold text-foreground">{step.number}</span>
                    </div>
                  </div>
                </div>
              </button>

              <div className="p-4 sm:p-5 lg:p-6">
                <h4 className="font-bold text-foreground text-sm sm:text-base lg:text-lg leading-tight">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 sm:mt-2 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="rounded-xl sm:rounded-2xl border border-foreground/10 bg-card/70 backdrop-blur-sm p-4 sm:p-5">
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          <span className="font-semibold text-foreground">Dica:</span> se qualquer parte ficar "mole", é rosca frouxa.
          Volte um passo e aperte até eliminar folga. Isso aumenta MUITO a estabilidade.
        </p>
      </div>
    </div>
  )
}
