import * as React from 'react'
import { Metadata } from 'next'
import { sharedMetadata } from '@shared/libs'
import { HeroSection } from './hero-section'
import { ProcessSection } from './process-section'
import { BenefitsSection } from './benefits-section'
import { FAQSection } from './faq-section'
import { CTASection } from './cta-section'

export const metadata: Metadata = {
  title: 'Roast Website for Better Conversion | Roast To Site',
  description:
    'We help founders, business and teams to give feedback and roasting all aspect of website for better conversions rate',
  openGraph: {
    ...sharedMetadata.openGraph,
    title: 'Roast Website for Better Conversion | Roast To Site',
    description:
      'We help founders, business and teams to give feedback and roasting all aspect of website for better conversions rate',
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: 'Roast Website for Better Conversion | Roast To Site',
    description:
      'We help founders, business and teams to give feedback and roasting all aspect of website for better conversions rate',
  },
}

export default function HomePage(): React.ReactElement {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <BenefitsSection />
      <ProcessSection />
      <FAQSection />
      <CTASection />
    </div>
  )
}
