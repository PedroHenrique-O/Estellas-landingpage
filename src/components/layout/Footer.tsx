import { Mail, MapPin, Phone } from 'lucide-react'

import { SITE } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-navy-deep py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:justify-between lg:px-8">
        <div>
          <p className="font-heading text-2xl">{SITE.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/65">
            {SITE.tagline}
          </p>
        </div>

        <div className="space-y-4 text-sm text-white/70">
          <a
            href={SITE.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex max-w-xs gap-3 transition-colors hover:text-white"
          >
            <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
            <span>{SITE.address.full}</span>
          </a>

          <a
            href={`tel:${SITE.phoneTel}`}
            className="flex items-center gap-3 transition-colors hover:text-white"
          >
            <Phone className="size-4 shrink-0 text-gold" />
            {SITE.phone}
          </a>

          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-3 break-all transition-colors hover:text-white"
          >
            <Mail className="size-4 shrink-0 text-gold" />
            {SITE.email}
          </a>

          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 transition-colors hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="size-4 shrink-0 text-gold"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            @advocaciawneves
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-6 text-xs text-white/50 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} · {SITE.name} · Todos os direitos reservados
      </div>
    </footer>
  )
}
