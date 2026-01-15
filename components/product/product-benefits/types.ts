export type Img = { src: string; alt: string }

export type BenefitHighlight = { title: string; text: string }

export type BenefitIconKey = "rotate" | "ruler" | "anchor" | "smartphone" | "video"

export type Benefit = {
  icon: BenefitIconKey
  title: string
  description: string
  image: Img
  bullets: string[]
  highlight?: BenefitHighlight
}
