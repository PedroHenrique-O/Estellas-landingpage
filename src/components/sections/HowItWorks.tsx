import { motion } from 'framer-motion'

import { HOW_IT_WORKS } from '@/lib/constants'

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative overflow-hidden bg-navy py-20 text-white sm:py-28">
      <div className="noise-overlay pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Como funciona
          </p>
          <h2 className="mt-4 font-heading text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            Um caminho claro, do primeiro contato à atuação.
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3 lg:gap-10">
          {HOW_IT_WORKS.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-[1.75rem] border border-white/10 bg-white/5 p-8"
            >
              {index < HOW_IT_WORKS.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden h-px w-10 translate-x-full bg-gold/40 lg:block" />
              )}

              <p className="font-heading text-5xl text-gold">{item.step}</p>
              <h3 className="mt-6 font-heading text-2xl text-white">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/75">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
