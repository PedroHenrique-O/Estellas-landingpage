import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import { SITE } from '@/lib/constants'

export function TrustBar() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const items = [
    `${SITE.address.city}/${SITE.address.state}`,
    SITE.address.neighborhood,
    SITE.phone,
  ]

  return (
    <section ref={ref} className="border-y border-navy/10 bg-cream py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-navy/70 sm:flex-row sm:gap-0 sm:text-sm"
        >
          {items.map((item, index) => (
            <li key={item} className="flex items-center">
              <span>{item}</span>
              {index < items.length - 1 && (
                <span className="mx-4 hidden text-gold sm:inline">·</span>
              )}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
