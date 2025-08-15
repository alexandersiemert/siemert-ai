import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'SiemertAI - KI-gestütztes Projektmanagement',
    template: '%s | SiemertAI'
  },
  description: 'Zukunftsweisende Projektmanagement-Lösung für Elektrokonstruktion mit 10 Jahren technologischem Vorsprung',
  keywords: [
    'Elektrokonstruktion',
    'Projektmanagement', 
    'KI',
    'Artificial Intelligence',
    'Electrical Engineering',
    'VDE',
    'Automation',
    'Industry 4.0'
  ],
  authors: [{ name: 'Alexander Siemert' }],
  creator: 'SiemertAI Team',
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: '/favicon.ico',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3b82f6' },
    { media: '(prefers-color-scheme: dark)', color: '#1e40af' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${inter.variable} antialiased min-h-screen`}>
        <div className="neural-background" />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  )
}