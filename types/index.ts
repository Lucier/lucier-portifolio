export interface Technology {
  name: string
  description: string
  icon: string
  level: number // 0-100
  category: 'backend' | 'database' | 'devops' | 'tools'
}

export interface CaseStudyChallenge {
  title: string
  description: string
}

export interface CaseStudyDecision {
  title: string
  description: string
  reason: string
}

export interface CaseStudyResult {
  metric?: string
  description: string
}

export interface CaseStudy {
  problem: string
  solution: string
  challenges: CaseStudyChallenge[]
  technicalDecisions: CaseStudyDecision[]
  results: CaseStudyResult[]
  duration?: string
  role?: string
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  demoUrl?: string
  image: string
  badges: string[]
  caseStudy?: CaseStudy
}

export interface ArchitectureProject {
  id: string
  title: string
  mermaidDiagram: string
  authFlow: string
  layeredArch: string
  erDiagram: string
  requestFlow: string
  technicalDecisions: Record<string, string>
  scalability: Record<string, string>
  bestPractices: string[]
}

export type SectionId =
  | 'hero'
  | 'sobre'
  | 'tecnologias'
  | 'projetos'
  | 'estudos'
  | 'arquitetura'
  | 'github'
  | 'linkedin'
  | 'contato'
