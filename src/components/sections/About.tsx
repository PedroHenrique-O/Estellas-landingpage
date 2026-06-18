import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

import { WHATSAPP_URL } from '@/lib/constants'

export function About() {
  return (
    <section id="sobre" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Sobre
          </p>
          <h2 className="mt-4 text-balance font-heading text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Advocacia com escuta ativa e estratégia precisa.
          </h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-navy/75">
            <p>
              A Advocacia Neves atua com foco em Direito do Consumidor, Família
              e Previdenciário, ajudando pessoas a entender seus direitos e
              tomar decisões com segurança em momentos delicados.
            </p>
            <p>
              Nossa atuação combina escuta atenta, linguagem clara e estratégia
              jurídica personalizada — porque cada caso tem uma história e
              merece atenção real, não respostas genéricas.
            </p>
            <p>
              Você recebe acompanhamento próximo, explicações objetivas e uma
              condução transparente em todas as etapas do processo.
            </p>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-hover"
          >
            <MessageCircle className="size-4" />
            Vamos conversar sobre o seu caso
          </a>
        </motion.div>
      </div>
    </section>
  )
}
