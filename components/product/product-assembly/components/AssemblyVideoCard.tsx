import { Card, CardContent } from "@/components/ui/card"
import { PlayCircle } from "lucide-react"

type AssemblyVideoCardProps = {
  videoSrc?: string
  videoEmbedUrl?: string
}

export function AssemblyVideoCard({ videoSrc, videoEmbedUrl }: AssemblyVideoCardProps) {
  return (
    <Card className="h-full rounded-2xl sm:rounded-3xl border bg-card/70 backdrop-blur-sm shadow-sm overflow-hidden">
      <CardContent className="p-0 h-full">
        <div className="relative w-full h-full min-h-[260px] sm:min-h-[300px] lg:min-h-[340px] bg-muted">
          {videoEmbedUrl ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={videoEmbedUrl}
              title="Vídeo de montagem"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : videoSrc ? (
            <video className="absolute inset-0 h-full w-full object-cover" controls preload="metadata">
              <source src={videoSrc} />
              Seu navegador não suporta vídeo.
            </video>
          ) : (
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center px-4 sm:px-6">
                <div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-background/70 border border-foreground/10 grid place-items-center shadow-sm">
                  <PlayCircle className="h-6 w-6 sm:h-7 sm:w-7 text-foreground" />
                </div>
                <p className="mt-2 sm:mt-3 font-semibold text-sm sm:text-base text-foreground">Vídeo de montagem</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Coloque aqui um vídeo mostrando a montagem em poucos segundos.
                </p>
                <p className="text-xs text-muted-foreground mt-2 sm:mt-3">
                  (Passe <span className="font-mono">videoSrc</span> ou <span className="font-mono">videoEmbedUrl</span>
                  )
                </p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
