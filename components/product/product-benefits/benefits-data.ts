import type { Benefit } from "./types"

export const benefits: Benefit[] = [
  {
    icon: "rotate",
    title: "Rotação 360°",
    description:
      "Você ajusta em segundos. Vertical para calls e aulas, horizontal para vídeos e receitas — sem ficar brigando com o ângulo.",
    image: { src: "/products/suporte_360/3.png", alt: "Rotação 360° do suporte" },
    bullets: ["Retrato e paisagem", "Ajuste fino do enquadramento", "Mais conforto para assistir/gravar"],
    highlight: {
      title: "Resultado final:",
      text: "Enquadramento melhor, celular firme e uma experiência mais confortável principalmente em uso diário.",
    },
  },
  {
    icon: "ruler",
    title: "Altura ajustável",
    description:
      "De 23 cm a 32 cm. Parece simples, mas muda tudo: melhora postura, evita ficar curvado e deixa a tela na linha dos olhos.",
    image: { src: "/products/suporte_360/2.png", alt: "Altura ajustável do suporte" },
    bullets: ["Melhora ergonomia", "Ideal para mesa e bancada", "Ajuste rápido no dia a dia"],
    highlight: {
      title: "Por que importa:",
      text: "Tela na altura certa = menos tensão no pescoço e mais conforto ao usar por mais tempo.",
    },
  },
  {
    icon: "anchor",
    title: "Base pesada",
    description:
      "Não é aquele suporte leve que você encosta e tudo balança. A base foi pensada para estabilidade — especialmente em mesa lisa.",
    image: { src: "/products/suporte_360/7.png", alt: "Base pesada e estável" },
    bullets: ["Mais estabilidade em superfícies lisas", "Menos vibração", "Mais confiança no uso"],
  },
  {
    icon: "smartphone",
    title: "Compatível com seu celular",
    description: "A garra abre até 9 cm. Ou seja: segura bem, encaixa fácil e dá estabilidade sem ficar folgado.",
    image: { src: "/products/suporte_360/9.png", alt: "Compatibilidade com diversos celulares" },
    bullets: ["Abertura ampla", "Encaixe firme", "Uso com ou sem capinha"],
  },
  {
    icon: "video",
    title: "Versátil de verdade",
    description:
      "Serve para o que você realmente faz no dia a dia: chamadas, estudos, receitas, lives, gravações e muito mais!",
    image: { src: "/products/suporte_360/5.png", alt: "Suporte em uso no dia a dia" },
    bullets: ["Home office", "Lives e gravações", "Estudo e leitura"],
  },
]
