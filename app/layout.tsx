import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://m1yan.github.io/academic-homepage/'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: "Yan Mi's Academic Page",
    template: '%s | Yan Mi',
  },
  description:
    'Yan Mi is a Master student at ICT, CAS, working on LLM4Rec, Agent, and Trustworthy AI.',
}

const lastUpdated =
  process.env.LAST_UPDATED ??
  new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date())

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white tracking-tight antialiased dark:bg-zinc-950">
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col">
            <div className="relative mx-auto w-full max-w-4xl flex-1 px-3 pt-20 sm:px-4">
              <Header />
              {children}
              <Footer lastUpdated={lastUpdated} />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
