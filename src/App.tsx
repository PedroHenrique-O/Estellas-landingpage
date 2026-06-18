import { Footer } from '@/components/layout/Footer'
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp'
import { Header } from '@/components/layout/Header'
import { MobileStickyCta } from '@/components/layout/MobileStickyCta'
import { Faq } from '@/components/sections/Faq'
import { FinalCta } from '@/components/sections/FinalCta'
import { Hero } from '@/components/sections/Hero'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Location } from '@/components/sections/Location'
import { PracticeAreas } from '@/components/sections/PracticeAreas'
import { TrustBar } from '@/components/sections/TrustBar'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <PracticeAreas />
        <HowItWorks />
        <Location />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp hiddenOnMobile />
      <MobileStickyCta />
    </>
  )
}

export default App
