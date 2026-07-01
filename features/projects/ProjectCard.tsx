'use client'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  index: number
}

const gradients = [
  'from-violet-700/20 to-violet-600/20',
  'from-violet-700/20 to-violet-500/20',
  'from-purple-600/20 to-pink-600/20',
  'from-cyan-600/20 to-blue-600/20',
  'from-green-600/20 to-teal-600/20',
]

export function ProjectCard({ project, index }: ProjectCardProps) {
  const gradient = gradients[index % gradients.length]

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="h-full"
    >
      <Card className="bg-card/80 border-border hover:border-violet-600/50 transition-all duration-300 h-full flex flex-col group overflow-hidden">
        {/* Image placeholder with gradient */}
        <div
          className={`h-44 bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-card/40" />
          <span className="relative text-muted-foreground font-mono text-sm text-center px-4 opacity-60">
            {project.technologies.slice(0, 3).join(' · ')}
          </span>
          {/* Glow effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-violet-600/5" />
        </div>

        <CardContent className="p-5 flex flex-col flex-1">
          {/* Badges */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.badges.map((badge) => (
              <Badge
                key={badge}
                className="text-xs bg-violet-600/10 text-violet-500 border-violet-600/20 hover:bg-violet-600/20"
              >
                {badge}
              </Badge>
            ))}
          </div>

          <h3 className="text-white font-bold text-lg mb-2 leading-tight">{project.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
            {project.description}
          </p>

          {/* Technology tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs text-muted-foreground/60 bg-muted/50 border border-border px-2 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-2 mt-auto">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center rounded-lg h-7 px-2.5 text-xs font-medium border border-border text-muted-foreground hover:text-foreground hover:border-violet-600 hover:bg-violet-600/10 transition-all"
            >
              <SiGithub className="mr-1.5 h-3.5 w-3.5" />
              Código
            </a>
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center rounded-lg h-7 px-2.5 text-xs font-medium bg-violet-700 hover:bg-violet-800 text-white transition-all"
              >
                <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                Demo
              </a>
            ) : (
              <Button
                size="sm"
                disabled
                className="flex-1 bg-muted text-muted-foreground/60 text-xs cursor-not-allowed"
              >
                <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                Demo
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
