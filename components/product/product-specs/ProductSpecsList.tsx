import { Separator } from "@/components/ui/separator"
import { Check } from "lucide-react"

type Spec = { label: string; value: string }

type ProductSpecsListProps = {
  specs: readonly Spec[]
}

export function ProductSpecsList({ specs }: ProductSpecsListProps) {
  return (
    <div className="lg:col-span-2 bg-card/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-foreground/10 shadow-sm overflow-hidden">
      {specs.map((spec, index) => (
        <div key={spec.label}>
          <div className="flex flex-col gap-1.5 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-3 md:p-5 lg:p-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="p-1 sm:p-1.5 bg-[#25D366]/10 rounded-full shrink-0">
                <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#25D366]" />
              </div>
              <span className="text-sm sm:text-base text-foreground font-medium">{spec.label}</span>
            </div>
            <span className="text-sm sm:text-base text-muted-foreground pl-6 sm:pl-0 sm:text-right">{spec.value}</span>
          </div>

          {index < specs.length - 1 && <Separator />}
        </div>
      ))}
    </div>
  )
}
