'use client'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Layers, Lock, Shield, TestTube } from 'lucide-react'

const highlights = [
  {
    icon: Layers,
    title: 'Clean Code',
    description:
      'Código limpo, legível e manutenível seguindo princípios SOLID.',
  },
  {
    icon: Shield,
    title: 'SOLID',
    description:
      'Aplicação rigorosa dos princípios de design orientado a objetos.',
  },
  {
    icon: TestTube,
    title: 'Testes',
    description: 'Testes unitários e de integração para garantir qualidade.',
  },
  {
    icon: Lock,
    title: 'Segurança',
    description: 'Boas práticas de segurança em APIs e autenticação JWT.',
  },
]

const stats = [
  { value: '6+', label: 'Anos de experiência' },
  { value: '10+', label: 'Projetos concluídos' },
  { value: '16+', label: 'Tecnologias dominadas' },
]

export function AboutSection() {
  return (
    <section id="sobre" className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="text-primary mb-3 text-[11px] font-medium tracking-[0.1em] uppercase">
              Sobre mim
            </p>
            <h2
              className="text-foreground mb-6 font-bold tracking-[-1px]"
              style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', lineHeight: 1.15 }}
            >
              Construindo o{' '}
              <em className="not-italic" style={{ color: '#783bff' }}>
                backend
              </em>{' '}
              do futuro
            </h2>
            <div className="text-muted-foreground space-y-4 text-lg leading-relaxed">
              <p>
                Sou um desenvolvedor backend apaixonado por criar sistemas
                robustos, escaláveis e eficientes. Com foco em{' '}
                <span className="font-medium text-white">Node.js</span> e{' '}
                <span className="font-medium text-white">NestJS</span>,
                desenvolvo APIs que sustentam aplicações de alto tráfego e
                sistemas SaaS com múltiplos inquilinos.
              </p>
              <p>
                Tenho experiência sólida em arquiteturas de microsserviços,
                filas de mensagens com{' '}
                <span className="font-medium text-white">RabbitMQ</span>, cache
                inteligente com{' '}
                <span className="font-medium text-white">Redis</span> e
                modelagem de dados relacionais com{' '}
                <span className="font-medium text-white">PostgreSQL</span>.
              </p>
              <p>
                Acredito que código de qualidade nasce da aplicação consistente
                de princípios como SOLID, Clean Architecture e Domain-Driven
                Design — não apenas para resolver o problema de hoje, mas para
                escalar amanhã.
              </p>
            </div>

            <div className="mt-10 flex gap-8">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <div
                    className="mb-1 text-4xl leading-none font-bold tracking-[-1px]"
                    style={{ color: '#783bff' }}
                  >
                    {value}
                  </div>
                  <div className="text-muted-foreground text-sm">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {highlights.map(({ icon: Icon, title, description }) => (
              <Card
                key={title}
                className="bg-card/80 border-border group transition-all duration-300 hover:border-violet-600/50"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-600/10 transition-colors group-hover:bg-violet-600/20">
                    <Icon className="h-5 w-5 text-violet-500" />
                  </div>
                  <h3 className="mb-2 font-semibold text-white">{title}</h3>
                  <p className="text-muted-foreground/60 text-sm leading-relaxed">
                    {description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
