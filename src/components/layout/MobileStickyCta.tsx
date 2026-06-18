import { MessageCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { WHATSAPP_URL } from '@/lib/constants'
import { useScrollPastElement } from '@/hooks/useScroll'
import { cn } from '@/lib/utils'

export function MobileStickyCta() {
  const show = useScrollPastElement('hero')

  return (
    <div
      className={cn(
        'fixed inset-x-0 bottom-0 z-50 border-t border-gold/20 bg-navy/95 p-3 backdrop-blur-md transition-transform duration-300 sm:hidden',
        show ? 'translate-y-0' : 'translate-y-full',
      )}
    >
      <Button asChild size="lg" className="w-full">
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          <MessageCircle className="size-5" />
          Falar pelo WhatsApp
        </a>
      </Button>
    </div>
  )
}
