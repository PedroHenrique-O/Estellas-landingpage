import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { SITE, WHATSAPP_URL } from '@/lib/constants'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-navy pt-16 text-white sm:pt-20"
    >
      <div className="noise-overlay pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-12 pt-4 sm:px-6 sm:pb-14 sm:pt-6 lg:grid-cols-[1fr_380px] lg:gap-12 lg:px-8 lg:pb-16 lg:pt-8">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-balance font-heading text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl"
          >
            Advocacia Neves — especializada em Consumidor, Família e
            Previdenciário em Londrina.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-5 max-w-lg text-base leading-relaxed text-white/65 sm:text-lg"
          >
            Escritório no Centro de Londrina. Seus direitos têm peso — sua
            defesa também.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-6"
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

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative flex size-52 items-center justify-center sm:size-64 lg:size-80">
            <div
              aria-hidden
              className="absolute inset-0 rounded-full bg-cream/95 shadow-[0_0_0_1px_rgba(201,162,39,0.25)]"
            />
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Logotipo Advocacia Neves"
              width={720}
              height={803}
              className="relative z-10 h-auto w-[68%] object-contain"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
