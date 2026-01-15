import type { Metadata } from "next"
import { ProductHero } from "@/components/product/product-hero/product-hero"
import { ProductBenefits } from "@/components/product/product-benefits/product-benefits"
import { ProductSpecs } from "@/components/product/product-specs/product-specs"
import { ProductAssembly } from "@/components/product/product-assembly/product-assembly"
import { ProductFAQ } from "@/components/product/product-faq"
import { ProductGallery } from "@/components/product/product-gallery"
import { ProductFooter } from "@/components/product/product-footer"
import { StickyBar } from "@/components/product/sticky-bar"

export const metadata: Metadata = {
  title: "Suporte para Celular (Kit com 2 peças) 360° | Tecs",
  description:
    "Suporte para celular com rotação 360°, altura ajustável de 23 a 32 cm, base pesada e estável. Kit com 2 peças por apenas R$ 24,90. Ideal para lives, chamadas de vídeo, estudos e home office.",
  openGraph: {
    title: "Suporte para Celular (Kit com 2 peças) 360° | Tecs",
    description: "Suporte premium com rotação 360°, altura ajustável e base estável. Kit com 2 unidades.",
    images: ["/products/suporte-360/1.jpg"],
  },
}

export default function SuportePage() {
  return (
    <main className="min-h-screen bg-background">
      <ProductHero />
      <ProductBenefits />
      <ProductSpecs />
      <ProductAssembly />
      <ProductGallery />
      <ProductFAQ />
      <ProductFooter />
      <StickyBar />
    </main>
  )
}
