import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

import { WHATSAPP_URL } from '@/lib/constants'
import { cn } from '@/lib/utils'

type FloatingWhatsAppProps = {
  hiddenOnMobile?: boolean
}

export function FloatingWhatsApp({ hiddenOnMobile = false }: FloatingWhatsAppProps) {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar agora pelo WhatsApp"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.4 }}
      className={cn(
        'fixed bottom-24 right-4 z-40 inline-flex size-14 items-center justify-center rounded-full bg-gold text-navy shadow-lg transition-transform hover:scale-105 sm:bottom-8 sm:right-8',
        hiddenOnMobile && 'hidden sm:inline-flex',
      )}
    >
      <span className="absolute inset-0 rounded-full bg-gold/40 motion-safe:animate-ping" />
      <MessageCircle className="relative size-6" />
    </motion.a>
  )
}
