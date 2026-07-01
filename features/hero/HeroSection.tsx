'use client'
import { Badge } from '@/components/ui/badge'
import { motion, type BezierDefinition, type Variants } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import Image from 'next/image'
import { FaLinkedinIn } from 'react-icons/fa'
import { SiGithub } from 'react-icons/si'

const floatingTechs = [
  'Node.js',
  'NestJS',
  'TypeScript',
  'PostgreSQL',
  'Docker',
]

const easeOut: BezierDefinition = [0.0, 0.0, 0.2, 1]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: easeOut },
  }),
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="bg-background relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
    >
      {/* Purple radial glow */}
      <div
        className="pointer-events-none absolute top-[-200px] left-1/2 h-[500px] w-[600px] -translate-x-1/2 sm:h-[600px] sm:w-[800px]"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(120,59,255,0.18) 0%, transparent 70%)',
        }}
      />

      {/* Subtle purple grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(120,59,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(120,59,255,0.9) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="flex flex-col-reverse items-center gap-8 sm:gap-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Text content */}
          <div className="w-full text-center lg:text-left">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <Badge className="mb-4 border-violet-600/20 bg-violet-600/10 px-4 py-1 text-xs text-gray-500 sm:mb-6 sm:text-sm">
                Disponível para projetos
              </Badge>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-3 font-bold sm:mb-4"
              style={{
                fontSize: 'clamp(36px, 8vw, 76px)',
                lineHeight: 1.08,
                letterSpacing: 'clamp(-1.5px, -0.4vw, -2.5px)',
              }}
            >
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #ffffff, rgba(255,255,255,0.5))',
                }}
              >
                Lucier Lima
              </span>
            </motion.h1>

            <motion.h2
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-muted-foreground mb-4 text-xl font-semibold sm:mb-6 sm:text-2xl"
            >
              Backend Developer
            </motion.h2>

            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-muted-foreground mx-auto mb-6 max-w-xl text-base leading-relaxed sm:mb-8 sm:text-lg lg:mx-0"
            >
              Especializado em construir{' '}
              <span className="font-medium text-white">APIs escaláveis</span>,{' '}
              <span className="font-medium text-white">sistemas SaaS</span> e{' '}
              <span className="font-medium text-white">
                arquiteturas backend modernas
              </span>{' '}
              com Node.js, NestJS e PostgreSQL.
            </motion.p>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center gap-2 lg:justify-start"
            >
              <button
                className="glass-btn"
                onClick={() => scrollToSection('projetos')}
              >
                Ver Projetos
                <ArrowDown className="h-4 w-4" />
              </button>
              <a
                href="/curriculo.pdf"
                download="Lucier_Ferreira_Lima_Curriculo.pdf"
                className="glass-btn-ghost"
              >
                <Download className="h-4 w-4" />
                Currículo
              </a>
              <a
                href="https://github.com/Lucier"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-btn-ghost"
              >
                <SiGithub className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/lucierlima"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-btn-ghost"
              >
                <FaLinkedinIn className="h-4 w-4" />
                LinkedIn
              </a>
            </motion.div>

            {/* Tech badges */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6 flex flex-wrap justify-center gap-2 sm:mt-8 lg:justify-start"
            >
              {floatingTechs.map((tech) => (
                <span
                  key={tech}
                  className="border-border bg-muted/60 text-muted-foreground/60 rounded-full border px-3 py-1 text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-violet-500 via-violet-500 to-purple-500 opacity-75 blur-sm" />
              <div className="border-background relative h-48 w-48 overflow-hidden rounded-full border-4 sm:h-64 sm:w-64 lg:h-80 lg:w-80">
                <Image
                  src="/perfil.png"
                  alt="Lucier Lima - Backend Developer"
                  fill
                  sizes="(max-width: 640px) 192px, (max-width: 1024px) 256px, 320px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -inset-4 animate-pulse rounded-full border border-violet-600/20" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator — hidden on small screens */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:flex"
        >
          <button
            onClick={() => scrollToSection('sobre')}
            className="text-muted-foreground/40 hover:text-muted-foreground flex flex-col items-center gap-2 transition-colors"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
