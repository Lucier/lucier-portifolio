'use client'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Briefcase, ExternalLink, MapPin } from 'lucide-react'
import Image from 'next/image'
import { FaLinkedinIn } from 'react-icons/fa'

export function LinkedInSection() {
  return (
    <section id="linkedin" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-[11px] font-medium uppercase tracking-[0.1em]" style={{ color: '#783bff' }}
          >
            Rede profissional
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 font-bold text-foreground tracking-[-1px]" style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', lineHeight: '1.15' }}
          >
            Conecte-se no{' '}
            <span className="bg-gradient-to-r from-violet-400 to-violet-300 bg-clip-text text-transparent">
              LinkedIn
            </span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-2xl"
        >
          <Card className="overflow-hidden border-0 shadow-2xl shadow-blue-900/20">
            {/* LinkedIn blue header */}
            <div className="relative overflow-hidden bg-gradient-to-r from-[#0077B5] to-[#0a66c2] p-8 text-center">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 h-32 w-32 rounded-full border border-white" />
                <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full border border-white" />
              </div>
              {/* Profile photo */}
              <div className="relative z-10 mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full border-4 border-white/20">
                <Image
                  src="/perfil.png"
                  alt="Lucier Lima"
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <h3 className="mb-1 text-2xl font-bold text-white">
                Lucier Lima
              </h3>
              <div className="mb-2 flex items-center justify-center gap-1.5 text-sm text-violet-200">
                <Briefcase className="h-3.5 w-3.5" />
                Backend Developer
              </div>
              <div className="flex items-center justify-center gap-1.5 text-sm text-violet-200/70">
                <MapPin className="h-3.5 w-3.5" />
                Brasil
              </div>
              <div className="mt-4">
                <FaLinkedinIn className="mx-auto h-8 w-8 text-white" />
              </div>
            </div>

            {/* Card body */}
            <CardContent className="bg-card p-8 text-center">
              <p className="mb-6 text-base leading-relaxed text-foreground/80">
                Desenvolvedor backend especializado em construir APIs escaláveis
                e sistemas SaaS com Node.js, NestJS e TypeScript. Apaixonado por
                arquiteturas limpas e código de qualidade.
              </p>

              <div className="mb-8 flex flex-wrap justify-center gap-2">
                {[
                  'Node.js',
                  'NestJS',
                  'TypeScript',
                  'PostgreSQL',
                  'Docker',
                  'Redis',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border/60 bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href="https://www.linkedin.com/in/lucierlima"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center justify-center rounded-lg bg-[#0077B5] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#005c8e]"
              >
                <FaLinkedinIn className="mr-2 h-5 w-5" />
                Acessar LinkedIn
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
