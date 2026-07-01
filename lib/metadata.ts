import { Metadata } from 'next'

export const siteMetadata: Metadata = {
  metadataBase: new URL('https://lucierlima.dev'),
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
    url: 'https://lucierlima.dev',
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
    canonical: 'https://lucierlima.dev',
  },
}
