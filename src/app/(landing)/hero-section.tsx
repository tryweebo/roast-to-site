import { Button, SectionLabel } from '@shared/components'
import Link from 'next/link'
import * as React from 'react'

export function HeroSection(): React.ReactElement {
  return (
    <section className="flex flex-col items-center pt-10 pb-20" id="hero">
      <div className="flex items-center">
        <SectionLabel>
          <i className="fi fi-sr-heart text-pink-400" /> Loved by 100+ top
          businesses
        </SectionLabel>
      </div>
      <h2 className="text-4xl font-semibold text-center leading-tight mt-10 font-bricolage">
        Want more sales?
        <br />
        roast now
      </h2>
      <p className="text-foreground/50 mt-10 text-center tablet:w-9/12 laptop:w-8/12 leading-relaxed text-pretty">
        Most website hero sections are massively underperforming. A few tweaks
        might be all you need to rocket-boost conversions.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-10">
        <span className="flex items-center gap-2 text-sm transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <i className="fi fi-sr-check-circle text-green-500" />
          Fast delivery
        </span>
        <span className="flex items-center gap-2 text-sm transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <i className="fi fi-sr-check-circle text-green-500" />
          No risk
        </span>
        <span className="flex items-center gap-2 text-sm transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <i className="fi fi-sr-check-circle text-green-500" />
          High conversion
        </span>
      </div>
      <div className="flex flex-col tablet:flex-row items-center gap-4 mt-16">
        <Button
          size={'lg'}
          variant={'primary'}
          asChild
          className="transition-all duration-300 hover:-translate-y-1 hover:scale-95"
        >
          <Link
            href={'https://cal.com/nyomansunima/roast-to-site'}
            target="_blank"
          >
            Roast my site for $99 <i className="fi fi-br-location-arrow" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
