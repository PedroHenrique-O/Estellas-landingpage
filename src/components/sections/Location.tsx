import { motion } from 'framer-motion'
import { Clock, ExternalLink, MapPin, Mail, MessageCircle, Phone } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { SITE, WHATSAPP_URL } from '@/lib/constants'

export function Location() {
  return (
    <section id="localizacao" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
              Localização
            </p>
            <h2 className="mt-4 font-heading text-3xl leading-tight sm:text-4xl">
              Escritório Advocacia Neves no Centro de Londrina.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-navy/70">
              {SITE.address.full}, CEP {SITE.address.zip}. Atendimento presencial
              de {SITE.openingHours.label.toLowerCase()}. Sábado e domingo
              fechado.
            </p>
            <a
              href={SITE.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold-hover"
            >
              <ExternalLink className="size-4" />
              Ver perfil no Google Maps
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="rounded-[1.75rem] border border-navy/10 bg-cream p-8"
          >
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="mt-0.5 size-5 shrink-0 text-gold" />
                <div>
                  <p className="font-medium text-navy">{SITE.address.street}</p>
                  <p className="mt-1 text-sm text-navy/70">
                    {SITE.address.neighborhood} — {SITE.address.city}/
                    {SITE.address.state}
                  </p>
                  <p className="text-sm text-navy/70">CEP {SITE.address.zip}</p>
                </div>
              </li>

              <li className="flex gap-4">
                <Phone className="mt-0.5 size-5 shrink-0 text-gold" />
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="text-navy transition-colors hover:text-gold"
                >
                  {SITE.phone}
                </a>
              </li>

              <li className="flex gap-4">
                <Mail className="mt-0.5 size-5 shrink-0 text-gold" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="break-all text-navy transition-colors hover:text-gold"
                >
                  {SITE.email}
                </a>
              </li>

              <li className="flex gap-4">
                <Clock className="mt-0.5 size-5 shrink-0 text-gold" />
                <div>
                  <p className="text-navy">{SITE.openingHours.label}</p>
                  <p className="mt-1 text-sm text-navy/70">
                    Sábado e domingo: {SITE.openingHours.saturday.toLowerCase()}
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="flex-1">
                <a href={SITE.mapsUrl} target="_blank" rel="noreferrer">
                  <MapPin className="size-4" />
                  Como chegar
                </a>
              </Button>

              <Button asChild variant="outline" className="flex-1">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 overflow-hidden rounded-[1.75rem] border border-navy/10"
        >
          <iframe
            title="Localização Advocacia Neves no Google Maps"
            src={SITE.mapsEmbedUrl}
            width="100%"
            height="360"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full border-0"
          />
        </motion.div>
      </div>
    </section>
  )
}
