'use client'

import * as React from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import posthog from 'posthog-js'
import { usePostHog } from 'posthog-js/react'
import { PostHogProvider } from 'posthog-js/react'
import { config } from '@shared/libs'

type PosthogProviderProps = {
  children: React.ReactNode
}

function PageView(): null {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const posthog = usePostHog()

  React.useEffect(() => {
    if (pathname && posthog) {
      let url = window.origin + pathname
      if (searchParams.toString()) {
        url = url + '?' + searchParams.toString()
      }

      posthog.capture('$pageview', { $current_url: url })
    }
  }, [pathname, searchParams, posthog])

  return null
}

function SuspendedPageView(): React.ReactElement {
  return (
    <React.Suspense fallback={null}>
      <PageView />
    </React.Suspense>
  )
}

export function PosthogProvider({
  children,
}: PosthogProviderProps): React.ReactElement {
  React.useEffect(() => {
    posthog.init(config.posthog.key, {
      api_host: '/ingest',
      ui_host: 'https://us.posthog.com',
      person_profiles: 'identified_only',
      capture_pageview: false,
    })
  }, [])

  return (
    <PostHogProvider client={posthog}>
      <SuspendedPageView />
      {children}
    </PostHogProvider>
  )
}
