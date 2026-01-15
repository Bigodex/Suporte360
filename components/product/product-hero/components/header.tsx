"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageCircle, Menu, X } from "lucide-react"
import { NAV } from "../constants"
import { scrollToId } from "../utils"

type HeaderProps = {
  mobileMenuOpen: boolean
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  whatsappUrl: string
}

export function Header({ mobileMenuOpen, setMobileMenuOpen, whatsappUrl }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-foreground/10 bg-background/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 py-2.5 sm:py-3">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="text-lg sm:text-xl font-extrabold tracking-tight text-foreground">Tecs Store.</div>

            <Badge
              variant="secondary"
              className="hidden sm:inline-flex rounded-full bg-accent/100 text-foreground/100 border border-primary/15 text-xs"
            >
              Suportes
            </Badge>
          </div>

          <nav className="hidden lg:flex items-center gap-2">
            {NAV.map((item) => {
              const Icon = item.icon

              return (
                <button
                  key={item.href}
                  onClick={() => scrollToId(item.href.replace("#", ""))}
                  type="button"
                  className="
                    group relative inline-flex items-center gap-2
                    px-3 py-2
                    text-sm font-medium
                    text-muted-foreground hover:text-foreground
                    transition-colors
                  "
                >
                  <Icon className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  <span className="relative">
                    {item.label}
                    <span
                      className="
                        pointer-events-none absolute left-0 -bottom-1
                        h-[2px] w-full
                        origin-left scale-x-0
                        bg-ring
                        transition-transform duration-300
                        group-hover:scale-x-100
                      "
                    />
                  </span>
                </button>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              asChild
              size="sm"
              className="hidden sm:flex gap-2 rounded-xl bg-primary/80 text-primary-foreground hover:bg-primary font-semibold shadow-sm"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="lg:hidden rounded-xl border-foreground/15 bg-white/60 hover:bg-muted h-9 w-9 sm:h-10 sm:w-10"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Abrir menu"
              type="button"
            >
              {mobileMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 sm:mt-3 p-2 sm:p-3 rounded-xl sm:rounded-2xl border border-foreground/10 bg-card/90 backdrop-blur-sm shadow-sm">
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
              {NAV.map((item) => (
                <button
                  key={item.href}
                  onClick={() => {
                    setMobileMenuOpen(false)
                    scrollToId(item.href.replace("#", ""))
                  }}
                  className="px-2.5 sm:px-3 py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm text-foreground bg-muted hover:bg-muted/80 transition-colors text-left"
                  type="button"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mt-2 sm:mt-3 flex gap-2">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg sm:rounded-xl flex-1 gap-2 font-semibold text-xs sm:text-sm h-9 sm:h-10"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  Comprar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
