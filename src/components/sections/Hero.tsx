import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { SITE, WHATSAPP_URL } from '@/lib/constants'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-navy pt-24 text-white sm:pt-28"
    >
      <div className="noise-overlay pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-7xl items-end gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_420px] lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        {/* Text */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-balance font-heading text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl"
          >
            Advocacia em Londrina especializada em Consumidor, Família e
            Previdenciário.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-5 max-w-lg text-base leading-relaxed text-white/65 sm:text-lg"
          >
            Seus direitos têm peso. A sua defesa também.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8"
          >
            <Button asChild size="lg">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <MessageCircle className="size-5" />
                Falar pelo WhatsApp
              </a>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-sm text-white/35"
          >
            {SITE.name} · {SITE.address.city}/{SITE.address.state}
          </motion.p>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="relative">
            {/* Gold accent square behind */}
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-[1.75rem] border border-gold/25" />

            <div className="relative overflow-hidden rounded-[1.75rem]">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80"
                alt="Mesa de trabalho — escritório de advocacia"
                className="aspect-[4/5] w-full object-cover"
                loading="eager"
              />
              {/* Subtle dark overlay at bottom for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
