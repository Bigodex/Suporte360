export type TutorialImage = { src: string; alt: string }

export type Step = {
  number: string
  title: string
  description: string
  image: TutorialImage
}

export type ProductAssemblyProps = {
  videoSrc?: string
  videoEmbedUrl?: string
  tutorialImages?: TutorialImage[]
}
