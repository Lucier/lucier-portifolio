'use client'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Technology } from '@/types'
import {
  SiNodedotjs,
  SiNestjs,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiDocker,
  SiRedis,
  SiRabbitmq,
  SiPrisma,
  SiGit,
  SiGithub,
  SiLinux,
  SiSwagger,
} from 'react-icons/si'
import { Code2, Database, Shield } from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  SiNodedotjs,
  SiNestjs,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiDocker,
  SiRedis,
  SiRabbitmq,
  SiDrizzle: Database,
  SiPrisma,
  SiGit,
  SiGithub,
  SiLinux,
  SiSwagger,
  SiJsonwebtokens: Shield,
  SiOpenapi: Code2,
}

interface TechCardProps {
  tech: Technology
  index: number
}

export function TechCard({ tech, index }: TechCardProps) {
  const Icon = iconMap[tech.icon] ?? Code2

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -4, scale: 1.02 }}
    >
      <Card className="bg-card/80 border-border hover:border-violet-600/50 transition-all duration-300 h-full group">
        <CardContent className="p-5">
          <div className="flex items-start gap-4 mb-4">
            <div className="h-10 w-10 rounded-lg bg-violet-600/10 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-600/20 transition-colors">
              <Icon className="h-5 w-5 text-violet-500" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-semibold text-sm">{tech.name}</h3>
              <p className="text-muted-foreground/60 text-xs mt-1 leading-relaxed line-clamp-2">
                {tech.description}
              </p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-muted-foreground/60">
              <span>Proficiência</span>
              <span className="text-violet-500 font-medium">{tech.level}%</span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-violet-500 to-violet-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${tech.level}%` }}
                transition={{ delay: index * 0.06 + 0.3, duration: 0.8, ease: 'easeOut' }}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
