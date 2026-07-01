'use client'
import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MermaidDiagram } from './MermaidDiagram'
import { ArchitectureProject } from '@/types'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

interface ArchitectureCardProps {
  project: ArchitectureProject
}

type DiagramTab = {
  key: keyof Pick<
    ArchitectureProject,
    'mermaidDiagram' | 'authFlow' | 'layeredArch' | 'erDiagram' | 'requestFlow'
  >
  label: string
}

const diagramTabs: DiagramTab[] = [
  { key: 'mermaidDiagram', label: 'Arquitetura' },
  { key: 'authFlow', label: 'Auth Flow' },
  { key: 'layeredArch', label: 'Camadas' },
  { key: 'erDiagram', label: 'ER Diagram' },
  { key: 'requestFlow', label: 'Req Flow' },
]

export function ArchitectureCard({ project }: ArchitectureCardProps) {
  const [activeTab, setActiveTab] = useState<DiagramTab['key']>('mermaidDiagram')
  const [expandedDecision, setExpandedDecision] = useState<string | null>(null)

  return (
    <div className="space-y-8">
      {/* Diagram tabs */}
      <Card className="bg-card/80 border-border">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
            {diagramTabs.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={cn(
                  'px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border',
                  activeTab === key
                    ? 'bg-foreground text-background border-transparent shadow-sm'
                    : 'bg-muted/50 text-muted-foreground border-border/60 hover:text-foreground'
                )}
              >
                {label}
              </button>
            ))}
          </div>
          <MermaidDiagram chart={project[activeTab]} />
        </CardContent>
      </Card>

      {/* Technical decisions */}
      <div>
        <h3 className="text-xl font-bold text-white mb-4">Decisões Técnicas</h3>
        <div className="space-y-3">
          {Object.entries(project.technicalDecisions).map(([title, description]) => (
            <Card
              key={title}
              className="bg-card/80 border-border hover:border-violet-600/40 transition-colors cursor-pointer"
              onClick={() =>
                setExpandedDecision(expandedDecision === title ? null : title)
              }
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium text-sm">{title}</span>
                  <ChevronDown
                    className={cn(
                      'h-4 w-4 text-muted-foreground transition-transform duration-200',
                      expandedDecision === title && 'rotate-180'
                    )}
                  />
                </div>
                {expandedDecision === title && (
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{description}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Scalability roadmap */}
      <div>
        <h3 className="text-xl font-bold text-white mb-4">Escalabilidade</h3>
        <div className="relative space-y-0">
          {Object.entries(project.scalability).map(([phase, description], index) => (
            <div key={phase} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="h-8 w-8 rounded-full bg-violet-700 border-2 border-violet-400 flex items-center justify-center flex-shrink-0 z-10">
                  <span className="text-white text-xs font-bold">{index + 1}</span>
                </div>
                {index < Object.keys(project.scalability).length - 1 && (
                  <div className="w-0.5 h-full bg-muted flex-1 mt-1 mb-1" />
                )}
              </div>
              <Card className="bg-card/80 border-border mb-3 flex-1">
                <CardContent className="p-4">
                  <p className="text-violet-500 text-xs font-semibold uppercase tracking-wide mb-1">
                    {phase}
                  </p>
                  <p className="text-foreground/80 text-sm">{description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Best practices */}
      <div>
        <h3 className="text-xl font-bold text-white mb-4">Boas Práticas Aplicadas</h3>
        <div className="flex flex-wrap gap-2">
          {project.bestPractices.map((practice) => (
            <Badge
              key={practice}
              className="bg-violet-600/10 text-violet-500 border-violet-600/20 hover:bg-violet-600/20 transition-colors py-1.5"
            >
              {practice}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
