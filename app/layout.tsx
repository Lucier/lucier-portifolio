import { ThemeProvider } from '@/components/providers/ThemeProvider'
import type { Metadata } from 'next'
import { JetBrains_Mono, Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  verification: {
    google: 'tk2EnWsp3OWttCwVieJDgiy06-ZbgEhi2xbSnJtPfCU',
  },

  metadataBase: new URL('https://lucier-portifolio.vercel.app/'),
  title: {
    default: 'Lucier Lima — Backend Developer',
    template: '%s | Lucier Lima',
  },
  description:
    'Especializado no desenvolvimento de APIs escaláveis, sistemas SaaS, microsserviços e arquiteturas backend modernas utilizando Node.js, NestJS e PostgreSQL.',
  keywords: [
    'Backend Developer',
    'Node.js',
    'NestJS',
    'TypeScript',
    'PostgreSQL',
    'Docker',
    'APIs REST',
    'Microsserviços',
    'SaaS',
  ],
  authors: [{ name: 'Lucier Lima' }],
  creator: 'Lucier Lima',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://lucier-portifolio.vercel.app/',
    title: 'Lucier Lima — Backend Developer',
    description:
      'Especializado no desenvolvimento de APIs escaláveis, sistemas SaaS, microsserviços e arquiteturas backend modernas.',
    siteName: 'Lucier Lima Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucier Lima — Backend Developer',
    description:
      'Especializado no desenvolvimento de APIs escaláveis, sistemas SaaS, microsserviços e arquiteturas backend modernas.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://lucier-portifolio.vercel.app/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Lucier Lima',
              jobTitle: 'Backend Developer',
              description:
                'Especializado em Node.js, NestJS, TypeScript, PostgreSQL, Docker',
              url: 'https://lucier-portifolio.vercel.app/',
              sameAs: [
                'https://github.com/Lucier',
                'https://www.linkedin.com/in/lucierlima',
              ],
              knowsAbout: [
                'Node.js',
                'NestJS',
                'TypeScript',
                'PostgreSQL',
                'Docker',
                'Redis',
                'RabbitMQ',
                'APIs REST',
                'Microsserviços',
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
