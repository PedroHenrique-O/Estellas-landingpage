import { motion } from 'framer-motion'
import { Heart, Scale, Shield } from 'lucide-react'

import { PRACTICE_AREAS } from '@/lib/constants'

const icons = {
  consumidor: Shield,
  familia: Heart,
  previdenciario: Scale,
} as const

export function PracticeAreas() {
  return (
    <section id="areas" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Áreas de atuação
          </p>
          <h2 className="mt-3 font-heading text-3xl leading-tight sm:text-4xl">
            Defesa jurídica onde você mais precisa.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {PRACTICE_AREAS.map((area, index) => {
            const Icon = icons[area.id]

            return (
              <motion.article
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="flex flex-col rounded-2xl border border-navy/8 bg-cream p-7 shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Icon */}
                  <div className="mb-5 inline-flex size-10 items-center justify-center rounded-xl bg-gold/10 text-gold">
                    <Icon className="size-4" />
                  </div>

                  {/* Gold accent line above title */}
                  <div className="mb-3 h-px w-8 bg-gold" />

                  <h3 className="font-heading text-xl text-navy sm:text-2xl">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy/65">
                    {area.description}
                  </p>
                </div>

              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
