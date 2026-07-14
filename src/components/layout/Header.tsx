import { useState } from 'react'
import { Menu, MessageCircle, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { SITE, WHATSAPP_URL } from '@/lib/constants'
import { useScrollPast } from '@/hooks/useScroll'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Áreas', href: '#areas' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Dúvidas', href: '#faq' },
  { label: 'Localização', href: '#localizacao' },
]

export function Header() {
  const scrolled = useScrollPast()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-all duration-300',
        scrolled
          ? 'border-white/10 bg-navy/90 backdrop-blur-md'
          : 'border-transparent bg-navy',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-18 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#hero" className="group flex shrink-0 items-center gap-2.5">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt=""
            width={40}
            height={45}
            className="h-9 w-auto object-contain sm:h-10"
          />
          <span className="flex flex-col">
            <span className="font-heading text-lg tracking-tight text-white sm:text-xl">
              {SITE.name}
            </span>
            <span className="mt-1 h-px w-8 bg-gold transition-all duration-300 group-hover:w-14" />
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Button asChild size="sm" className="hidden lg:inline-flex">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <MessageCircle className="size-4" />
            Falar conosco
          </a>
        </Button>

        {/* Tablet CTA (no nav) */}
        <Button asChild size="sm" className="hidden sm:inline-flex lg:hidden">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <MessageCircle className="size-4" />
            Falar conosco
          </a>
        </Button>

        {/* Mobile: hamburger */}
        <button
          type="button"
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-lg text-white/80 transition-colors hover:bg-white/10 sm:hidden"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          'overflow-hidden transition-all duration-300 sm:hidden',
          mobileOpen ? 'max-h-96 border-t border-white/10' : 'max-h-0',
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-flex items-center gap-2 rounded-xl bg-gold px-4 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-gold-hover"
          >
            <MessageCircle className="size-4" />
            Falar conosco
          </a>
        </nav>
      </div>
    </header>
  )
}
