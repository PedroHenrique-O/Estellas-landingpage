import { motion } from 'framer-motion'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { FAQ_ITEMS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Faq() {
  return (
    <section id="faq" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-md">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
              Dúvidas comuns
            </p>
            <h2 className="mt-4 font-heading text-3xl leading-tight sm:text-4xl">
              Respostas claras antes da primeira conversa.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy/70">
              Tire suas dúvidas sobre consulta, honorários e acompanhamento do
              caso.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {FAQ_ITEMS.map((item) => (
                <AccordionItem key={item.question} value={item.question}>
                  <AccordionTrigger className="data-[state=open]:border-l-2 data-[state=open]:border-gold data-[state=open]:pl-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent
                    className={cn(
                      'border-l-2 border-transparent pl-4',
                      'data-[state=open]:border-gold',
                    )}
                  >
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
