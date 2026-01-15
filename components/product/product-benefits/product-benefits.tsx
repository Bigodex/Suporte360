import { benefits } from "./benefits-data"
import type { Img } from "./types"
import { BenefitCard } from "./components/benefit-card"

export function ProductBenefits() {
  const topRow = benefits.slice(0, 3)
  const bottomRow = benefits.slice(3, 5)

  const allImages: Img[] = benefits.map((b) => b.image)

  return (
    <section id="beneficios" className="px-4 py-10 sm:px-6 sm:py-16 lg:px-12 lg:py-16 bg-muted/40">
      <div className="max-w-6xl mx-auto">
        {/* Header responsivo */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-foreground text-balance">
            Por que esse suporte é diferente?
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Não é só "um suporte". É um acessório que resolve o incômodo diário de apoiar o celular de qualquer jeito.
            Ele deixa sua rotina mais prática e com um visual mais organizado — sem gambiarra.
          </p>
        </div>

        {/* Grid responsivo - 1 coluna mobile, 2 tablet, 3 desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 place-items-center">
          {topRow.map((b, idx) => (
            <BenefitCard key={b.title} benefit={b} allImages={allImages} index={idx} />
          ))}
        </div>

        {/* Segunda linha responsiva - centralizada */}
        <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 place-items-center max-w-2xl mx-auto lg:max-w-none lg:flex lg:flex-row lg:justify-center lg:items-stretch">
          {bottomRow.map((b, idx) => (
            <BenefitCard key={b.title} benefit={b} allImages={allImages} index={idx + 3} />
          ))}
        </div>
      </div>
    </section>
  )
}
