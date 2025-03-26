'use client'
import * as React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'

export function Header(): React.ReactElement {
  return (
    <header className="flex items-center justify-between gap-10 h-24">
      <Link
        href={'/'}
        className="flex items-center gap-3 transition-all duration-300 hover:-translate-x-1"
      >
        <span className="font-medium font-bricolage">roastto.site</span>
      </Link>

      <div className="flex relative z-10 gap-2">
        <Button
          asChild
          variant={'outline'}
          className="transition-all duration-300 hover:-translate-y-1"
        >
          <Link
            href={'https://cal.com/nyomansunima/sonibble-intro-call'}
            target="_blank"
          >
            Roast for $99
            <i className="fi fi-br-flame" />
          </Link>
        </Button>
      </div>
    </header>
  )
}
