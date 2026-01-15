import { ProductSpecsList } from "./ProductSpecsList"
import { ProductSpecsHighlights } from "./ProductSpecsHighlights"
import { highlights, specs } from "./specs.data"

export function ProductSpecs() {
  return (
    <section id="especificacoes" className="px-4 py-8 sm:px-6 sm:py-10 lg:px-12 lg:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-balance">
            Detalhes técnicos
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Tudo o que você precisa saber, de forma clara. Sem letra miúda e sem confusão.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          <ProductSpecsList specs={specs} />
          <ProductSpecsHighlights highlights={highlights} />
        </div>
      </div>
    </section>
  )
}
