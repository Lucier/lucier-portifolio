import { GitHubProfile, GitHubRepo } from '@/types/github'

export async function getGitHubProfile(
  username: string
): Promise<GitHubProfile | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

export async function getGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
}

export const mockProfile: GitHubProfile = {
  login: 'Lucier',
  avatar_url: 'https://avatars.githubusercontent.com/u/0',
  name: 'Lucier Lima',
  bio: 'Backend Developer | Node.js | NestJS | TypeScript | PostgreSQL',
  public_repos: 24,
  followers: 48,
  following: 32,
  html_url: 'https://github.com/Lucier',
  location: 'Brasil',
}

export const mockRepos: GitHubRepo[] = [
  {
    id: 1,
    name: 'saas-pedidos-api',
    description:
      'API NestJS para sistema SaaS de pedidos com multi-tenancy e filas.',
    html_url: 'https://github.com/Lucier/saas-pedidos-api',
    stargazers_count: 12,
    forks_count: 3,
    language: 'TypeScript',
    updated_at: '2024-01-15T10:00:00Z',
    topics: ['nestjs', 'postgresql', 'docker', 'redis'],
  },
  {
    id: 2,
    name: 'campeonatos-platform',
    description:
      'Plataforma de campeonatos com WebSocket e rankings em tempo real.',
    html_url: 'https://github.com/Lucier/campeonatos-platform',
    stargazers_count: 8,
    forks_count: 2,
    language: 'TypeScript',
    updated_at: '2024-01-10T10:00:00Z',
    topics: ['nestjs', 'websocket', 'postgresql'],
  },
  {
    id: 3,
    name: 'auth-service',
    description: 'Serviço de autenticação com JWT, refresh tokens e RBAC.',
    html_url: 'https://github.com/Lucier/auth-service',
    stargazers_count: 15,
    forks_count: 5,
    language: 'TypeScript',
    updated_at: '2024-01-05T10:00:00Z',
    topics: ['nestjs', 'jwt', 'redis', 'security'],
  },
  {
    id: 4,
    name: 'estoque-api',
    description: 'Sistema de gestão de estoque com Drizzle ORM e PostgreSQL.',
    html_url: 'https://github.com/Lucier/estoque-api',
    stargazers_count: 6,
    forks_count: 1,
    language: 'TypeScript',
    updated_at: '2023-12-20T10:00:00Z',
    topics: ['nestjs', 'drizzle-orm', 'postgresql'],
  },
  {
    id: 5,
    name: 'diarias-control',
    description: 'API para controle de diárias e hospedagens com relatórios.',
    html_url: 'https://github.com/Lucier/diarias-control',
    stargazers_count: 4,
    forks_count: 0,
    language: 'TypeScript',
    updated_at: '2023-12-10T10:00:00Z',
    topics: ['nodejs', 'nestjs', 'postgresql'],
  },
  {
    id: 6,
    name: 'portfolio',
    description:
      'Portfolio profissional desenvolvido com Next.js 15 e TypeScript.',
    html_url: 'https://github.com/Lucier/portfolio',
    stargazers_count: 9,
    forks_count: 2,
    language: 'TypeScript',
    updated_at: '2023-12-01T10:00:00Z',
    topics: ['nextjs', 'typescript', 'tailwindcss'],
  },
]
