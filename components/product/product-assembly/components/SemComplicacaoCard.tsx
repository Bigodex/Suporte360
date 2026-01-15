import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Sparkles, Wrench } from "lucide-react"

type SemComplicacaoCardProps = {
  quickNotes: string[]
}

export function SemComplicacaoCard({ quickNotes }: SemComplicacaoCardProps) {
  return (
    <Card className="h-full rounded-2xl sm:rounded-3xl border bg-card/70 backdrop-blur-sm shadow-sm">
      <CardContent className="p-5 sm:p-6 lg:p-8 h-full flex flex-col">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-accent border border-foreground/10">
            <Wrench className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <div>
            <p className="text-base sm:text-lg font-bold text-foreground">Sem complicação</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Feito para montar sem estresse.</p>
          </div>
        </div>

        <div className="mt-4 sm:mt-6 space-y-2.5 sm:space-y-3">
          {quickNotes.map((n) => (
            <div key={n} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-[#25D366]" />
              <span>{n}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 sm:mt-7 rounded-xl sm:rounded-2xl border border-foreground/10 bg-muted p-4 sm:p-5">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground">
            <Sparkles className="h-4 w-4 shrink-0" />
            <span>Dica rápida (fica mais estável)</span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
            Se alguma parte "balançar", quase sempre é rosca frouxa. Volte no passo anterior e aperte até eliminar
            folga. Depois, ajuste o ângulo com calma para o enquadramento ficar perfeito.
          </p>
        </div>

        <div className="mt-auto" />
      </CardContent>
    </Card>
  )
}
