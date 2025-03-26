import { SectionLabel } from '@shared/components'
import * as React from 'react'
import * as motion from 'motion/react-client'

export function BenefitsSection(): React.ReactElement {
  return (
    <motion.section
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        damping: 8,
        stiffness: 60,
        ease: 'easeInOut',
        duration: '1.2',
      }}
      viewport={{ once: true, margin: '0% 0% -30% 0%' }}
      className="flex flex-col items-center py-20"
      id="benefits"
    >
      <div className="flex items-center">
        <SectionLabel>Benefits</SectionLabel>
      </div>
      <h2 className="text-4xl font-semibold text-center leading-tight mt-10 font-bricolage">
        Because result
        <br />
        matters
      </h2>

      <div className="flex justify-center mt-20 w-full">
        <div className="flex flex-col items-center laptop:w-10/12">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-3 text-foreground/60 transition-all duration-300 hover:-translate-x-1 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet text-foreground/40" />
              <i className="fi fi-br-truck-side" />
              2-3 days delivery.
            </li>
            <li className="flex items-center gap-3 text-foreground/60 transition-all duration-300 hover:-translate-x-1 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet text-foreground/40" />
              <i className="fi fi-br-bullseye-pointer" />
              Optimized conversions
            </li>
            <li className="flex items-center gap-3 text-foreground/60 transition-all duration-300 hover:-translate-x-1 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet text-foreground/40" />
              <i className="fi fi-br-globe" />
              Years of experiences
            </li>
            <li className="flex items-center gap-3 text-foreground/60 transition-all duration-300 hover:-translate-x-1 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet text-foreground/40" />
              <i className="fi fi-br-video-camera-alt" />
              Personalized video
            </li>
            <li className="flex items-center gap-3 text-foreground/60 transition-all duration-300 hover:-translate-x-1 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet text-foreground/40" />
              <i className="fi fi-br-shield-check" />
              No risk
            </li>
            <li className="flex items-center gap-3 text-foreground/60 transition-all duration-300 hover:-translate-x-1 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet text-foreground/40" />
              <i className="fi fi-br-usd-circle" />
              Money back guarantee
            </li>
            <li className="flex items-center gap-3 text-foreground/60 transition-all duration-300 hover:-translate-x-1 hover:text-foreground cursor-pointer">
              <i className="fi fi-sr-bullet text-foreground/40" />
              <i className="fi fi-br-arrow-trend-up" />
              Higher MRR
            </li>
          </ul>
        </div>
      </div>
    </motion.section>
  )
}
