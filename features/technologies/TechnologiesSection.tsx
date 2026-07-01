'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { technologies } from '@/lib/data'
import { TechCard } from './TechCard'
import { Technology } from '@/types'
import { cn } from '@/lib/utils'

type Category = 'all' | Technology['category']

const filters: { label: string; value: Category }[] = [
  { label: 'Todos', value: 'all' },
  { label: 'Backend', value: 'backend' },
  { label: 'Database', value: 'database' },
  { label: 'DevOps', value: 'devops' },
  { label: 'Tools', value: 'tools' },
]

export function TechnologiesSection() {
  const [activeFilter, setActiveFilter] = useState<Category>('all')

  const filtered =
    activeFilter === 'all'
      ? technologies
      : technologies.filter((t) => t.category === activeFilter)

  return (
    <section id="tecnologias" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-medium uppercase tracking-[0.1em] mb-3"
            style={{ color: '#783bff' }}
          >
            Stack técnico
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-bold text-foreground mb-4 tracking-[-1px]"
            style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', lineHeight: 1.15 }}
          >
            Tecnologias &{' '}
            <em className="not-italic" style={{ color: '#783bff' }}>Ferramentas</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Ferramentas e tecnologias que utilizo para construir soluções backend robustas e
            escaláveis.
          </motion.p>
        </div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {filters.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActiveFilter(value)}
              className={cn(
                'px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border',
                activeFilter === value
                  ? 'bg-foreground text-background border-transparent shadow-sm'
                  : 'bg-card/80 text-muted-foreground border-border hover:text-foreground'
              )}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
