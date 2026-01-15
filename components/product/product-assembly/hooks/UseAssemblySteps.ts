"use client"

import { useMemo } from "react"
import type { Step, TutorialImage } from "../types"
import { defaultTutorialImages } from "../data"

export function useAssemblySteps(tutorialImages?: TutorialImage[]) {
  const steps: Step[] = useMemo(() => {
    const imgs = tutorialImages && tutorialImages.length === 6 ? tutorialImages : defaultTutorialImages

    return [
      {
        number: "1",
        title: "Conecte a haste na base",
        description: "Encaixe a parte maior da haste na base do suporte para iniciar a montagem.",
        image: imgs[0],
      },
      {
        number: "2",
        title: "Rosqueie e firme",
        description: "Gire a haste na base até ficar bem firme e estável (sem folgas).",
        image: imgs[1],
      },
      {
        number: "3",
        title: "Rosqueie o conector na outra ponta",
        description: "Na ponta superior da haste, rosqueie o conector (a peça que vai receber o braço).",
        image: imgs[2],
      },
      {
        number: "4",
        title: "Trave o conector na haste",
        description: "Aperte/rosqueie até o conector ficar preso e alinhado (sem girar solto).",
        image: imgs[3],
      },
      {
        number: "5",
        title: "Encaixe a bolinha no suporte",
        description: "Insira a bolinha do conector na parte de trás do encaixe do suporte do celular.",
        image: imgs[4],
      },
      {
        number: "6",
        title: "Aperte a porca e finalize",
        description: "Aperte a porca até travar bem o conector no encaixe do suporte (firme, sem folga).",
        image: imgs[5],
      },
    ]
  }, [tutorialImages])

  const images = useMemo(() => steps.map((s) => s.image), [steps])

  return { steps, images }
}
