'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { architectureProjects } from '@/lib/data'
import { ArchitectureCard } from './ArchitectureCard'
import { cn } from '@/lib/utils'

export function ArchitectureSection() {
  const [activeProject, setActiveProject] = useState(architectureProjects[0].id)

  const currentProject = architectureProjects.find((p) => p.id === activeProject)

  return (
    <section id="arquitetura" className="py-24 bg-background">
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
            System Design
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-bold text-foreground mb-4 tracking-[-1px]" style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', lineHeight: '1.15' }}
          >
            Arquitetura de{' '}
            <span className="bg-gradient-to-r from-violet-400 to-violet-300 bg-clip-text text-transparent">
              Software
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-3xl mx-auto"
          >
            Diagramas e decisões arquiteturais dos projetos, demonstrando capacidade de design de
            sistemas escaláveis e escolha consciente de tecnologias.
          </motion.p>
        </div>

        {/* Project selector */}
        {architectureProjects.length > 1 && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {architectureProjects.map((project) => (
              <button
                key={project.id}
                onClick={() => setActiveProject(project.id)}
                className={cn(
                  'px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border',
                  activeProject === project.id
                    ? 'bg-foreground text-background border-transparent shadow-sm'
                    : 'bg-card/80 text-muted-foreground border-border hover:text-foreground hover:border-border/80'
                )}
              >
                {project.title}
              </button>
            ))}
          </div>
        )}

        {/* Architecture content */}
        {currentProject && (
          <motion.div
            key={activeProject}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ArchitectureCard project={currentProject} />
          </motion.div>
        )}
      </div>
    </section>
  )
}
