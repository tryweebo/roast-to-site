import * as React from 'react'
import type { Metadata } from 'next'
import '@shared/styles/globals.css'
import '@flaticon/flaticon-uicons/css/all/all.css'
import { config, sharedMetadata } from '@shared/libs'
import { PosthogProvider } from '@shared/providers'
import { Footer, Header, CenteredLayout } from '@shared/components'
import { fonts } from '@shared/fonts'

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
  applicationName: 'Roast Website for Better Conversion | Roast To Site',
  keywords: [
    'Website Review',
    'Website Audit',
    'Website Roasting',
    'Landing Page Roasting',
    'Website Feedback',
    'Design Feedback',
    'Website Design Feedback',
  ],
  authors: [{ name: 'Nyoman Sunima', url: 'https://www.nyomansunima.one' }],
  publisher: 'Nyoman Sunima',
  creator: 'Nyoman Sunima',
  metadataBase: new URL(config.app.host),
  verification: {
    google: config.verification.google,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fonts.inter.variable} ${fonts.bricolage.variable}`}
    >
      <PosthogProvider>
        <body suppressHydrationWarning>
          <CenteredLayout>
            <Header />
            <main className="min-h-screen tablet:pt-16 pb-28 tablet:pb-56">
              {children}
            </main>
            <Footer />
          </CenteredLayout>
        </body>
      </PosthogProvider>
    </html>
  )
}
