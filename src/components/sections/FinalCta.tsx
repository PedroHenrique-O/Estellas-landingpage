import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { WHATSAPP_URL } from '@/lib/constants'

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-28">
      <div className="noise-overlay pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium uppercase tracking-[0.2em] text-gold"
        >
          Pronto para conversar?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-balance font-heading text-3xl leading-tight text-white sm:text-4xl lg:text-5xl"
        >
          Não deixe o seu direito para depois.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg"
        >
          Uma conversa pode mudar o rumo do seu caso. Fale comigo agora pelo
          WhatsApp.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10"
        >
          <Button asChild size="lg">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              <MessageCircle className="size-5" />
              Iniciar conversa no WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
