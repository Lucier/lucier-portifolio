'use client'
import { motion } from 'framer-motion'
import { AlertCircle, Lightbulb, Zap, Wrench, BarChart3, Clock, User } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { CaseStudy } from '@/types'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
  projectTitle: string
  technologies: string[]
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay },
})

export function CaseStudyCard({ caseStudy, projectTitle, technologies }: CaseStudyCardProps) {
  return (
    <div className="space-y-8">
      {/* Meta */}
      <div className="flex flex-wrap gap-3">
        {caseStudy.duration && (
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/60 border border-border px-3 py-1.5 rounded-full">
            <Clock className="h-3.5 w-3.5 text-violet-500" />
            {caseStudy.duration}
          </span>
        )}
        {caseStudy.role && (
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/60 border border-border px-3 py-1.5 rounded-full">
            <User className="h-3.5 w-3.5 text-indigo-400" />
            {caseStudy.role}
          </span>
        )}
        {technologies.map((tech) => (
          <Badge
            key={tech}
            className="text-xs bg-muted/60 text-muted-foreground border-border"
          >
            {tech}
          </Badge>
        ))}
      </div>

      {/* Problem + Solution side by side on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <motion.div {...fadeUp(0)} className="bg-red-500/5 border border-red-500/20 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center justify-center h-7 w-7 rounded-lg bg-red-500/15">
              <AlertCircle className="h-4 w-4 text-red-400" />
            </div>
            <h4 className="text-sm font-semibold text-red-400 uppercase tracking-wider">O Problema</h4>
          </div>
          <p className="text-foreground/80 text-sm leading-relaxed">{caseStudy.problem}</p>
        </motion.div>

        <motion.div {...fadeUp(0.05)} className="bg-green-500/5 border border-green-500/20 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center justify-center h-7 w-7 rounded-lg bg-green-500/15">
              <Lightbulb className="h-4 w-4 text-green-400" />
            </div>
            <h4 className="text-sm font-semibold text-green-400 uppercase tracking-wider">A Solução</h4>
          </div>
          <p className="text-foreground/80 text-sm leading-relaxed">{caseStudy.solution}</p>
        </motion.div>
      </div>

      {/* Challenges */}
      <motion.div {...fadeUp(0.1)}>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center justify-center h-7 w-7 rounded-lg bg-yellow-500/15">
            <Zap className="h-4 w-4 text-yellow-400" />
          </div>
          <h4 className="text-base font-semibold text-white">Desafios Encontrados</h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {caseStudy.challenges.map((challenge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 + i * 0.06, duration: 0.4 }}
              className="bg-card/40 border border-border/60 rounded-lg p-4"
            >
              <div className="flex items-start gap-2 mb-2">
                <span className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full bg-yellow-500/15 text-yellow-400 text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <h5 className="text-sm font-semibold text-foreground/90">{challenge.title}</h5>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed pl-7">{challenge.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Technical Decisions */}
      <motion.div {...fadeUp(0.18)}>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center justify-center h-7 w-7 rounded-lg bg-violet-600/15">
            <Wrench className="h-4 w-4 text-violet-500" />
          </div>
          <h4 className="text-base font-semibold text-white">Decisões Técnicas</h4>
        </div>
        <div className="space-y-3">
          {caseStudy.technicalDecisions.map((decision, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.06, duration: 0.4 }}
              className="bg-violet-600/5 border border-violet-600/15 rounded-lg p-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3 mb-1.5">
                <span className="text-sm font-semibold text-violet-300 flex-shrink-0">{decision.title}</span>
                <span className="hidden sm:block text-muted-foreground/40 text-sm">—</span>
                <span className="text-xs text-muted-foreground sm:text-sm sm:text-muted-foreground/60">{decision.description}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed border-t border-violet-600/10 pt-2 mt-2">
                <span className="text-violet-500 font-medium">Por que: </span>
                {decision.reason}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Results */}
      <motion.div {...fadeUp(0.28)}>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center justify-center h-7 w-7 rounded-lg bg-indigo-500/15">
            <BarChart3 className="h-4 w-4 text-indigo-400" />
          </div>
          <h4 className="text-base font-semibold text-white">Resultados</h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {caseStudy.results.map((result, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
              className="flex items-start gap-3 bg-indigo-500/5 border border-indigo-500/15 rounded-lg p-4"
            >
              {result.metric ? (
                <>
                  <span className="text-2xl font-bold text-indigo-400 leading-none flex-shrink-0">
                    {result.metric}
                  </span>
                  <p className="text-sm text-foreground/80 leading-snug">{result.description}</p>
                </>
              ) : (
                <>
                  <span className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-indigo-400" />
                  <p className="text-sm text-foreground/80 leading-snug">{result.description}</p>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
