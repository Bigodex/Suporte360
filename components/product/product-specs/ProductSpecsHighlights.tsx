import { Check, Info, Sparkles } from "lucide-react"

type ProductSpecsHighlightsProps = {
  highlights: readonly string[]
}

export function ProductSpecsHighlights({ highlights }: ProductSpecsHighlightsProps) {
  return (
    <div className="rounded-2xl sm:rounded-3xl border border-foreground/10 bg-card/70 backdrop-blur-sm p-4 sm:p-5 md:p-6 shadow-sm">
      <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground">
        <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
        <span>O que isso significa na prática?</span>
      </div>

      <div className="mt-3 sm:mt-4 space-y-2.5 sm:space-y-3">
        {highlights.map((h) => (
          <div key={h} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
            <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 mt-0.5 text-[#25D366] shrink-0" />
            <span className="leading-relaxed">{h}</span>
          </div>
        ))}
      </div>

      <div className="mt-5 sm:mt-6 md:mt-8 rounded-xl sm:rounded-2xl bg-muted border border-foreground/10 p-3 sm:p-4">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground">
          <Info className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
          <span>Observação!</span>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 sm:mt-2 leading-relaxed">
          Se você usa capinha muito grossa, vale informar no WhatsApp o modelo do celular para confirmarmos o encaixe
          ideal.
        </p>
      </div>
    </div>
  )
}
