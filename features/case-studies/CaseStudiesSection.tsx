'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/lib/data'
import { CaseStudyCard } from './CaseStudyCard'
import { cn } from '@/lib/utils'

const caseStudyProjects = projects.filter((p) => p.caseStudy)

export function CaseStudiesSection() {
  const [activeId, setActiveId] = useState(caseStudyProjects[0]?.id ?? '')

  const current = caseStudyProjects.find((p) => p.id === activeId)

  if (caseStudyProjects.length === 0) return null

  return (
    <section id="estudos" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-medium uppercase tracking-[0.1em] mb-3" style={{ color: '#783bff' }}
          >
            Bastidores
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-bold text-foreground mb-4 tracking-[-1px]" style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', lineHeight: '1.15' }}
          >
            Estudos de{' '}
            <span className="bg-gradient-to-r from-violet-400 to-violet-300 bg-clip-text text-transparent">
              Caso
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Problemas reais, decisões conscientes e resultados mensuráveis — os bastidores de cada
            projeto além do código.
          </motion.p>
        </div>

        {/* Project selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {caseStudyProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveId(project.id)}
              className={cn(
                'px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border',
                activeId === project.id
                  ? 'bg-foreground text-background border-transparent shadow-sm'
                  : 'bg-card/80 text-muted-foreground border-border hover:text-foreground'
              )}
            >
              {project.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {current?.caseStudy && (
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="bg-card/30 border border-border/60 rounded-2xl p-6 sm:p-8"
            >
              <div className="mb-6 pb-5 border-b border-border/60">
                <h3 className="text-xl font-bold text-white">{current.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{current.description}</p>
              </div>
              <CaseStudyCard
                caseStudy={current.caseStudy}
                projectTitle={current.title}
                technologies={current.technologies}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
