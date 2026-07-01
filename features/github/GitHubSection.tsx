'use client'
import { motion } from 'framer-motion'
import { useGitHub } from '@/hooks/useGitHub'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SiGithub } from 'react-icons/si'
import { Star, GitFork, ExternalLink, Users, BookOpen, MapPin } from 'lucide-react'
import Image from 'next/image'

function LanguageBadge({ lang }: { lang: string }) {
  const colors: Record<string, string> = {
    TypeScript: 'bg-violet-500',
    JavaScript: 'bg-yellow-500',
    Python: 'bg-green-500',
    Go: 'bg-cyan-500',
    Rust: 'bg-orange-500',
    Java: 'bg-red-500',
  }
  return (
    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
      <span className={`h-2.5 w-2.5 rounded-full ${colors[lang] ?? 'bg-muted-foreground/50'}`} />
      {lang}
    </span>
  )
}

export function GitHubSection() {
  const { profile, repos, loading } = useGitHub('Lucier')

  return (
    <section id="github" className="py-24 bg-card">
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
            Open Source
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-bold text-foreground mb-4 tracking-[-1px]" style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', lineHeight: '1.15' }}
          >
            Perfil no{' '}
            <span className="bg-gradient-to-r from-violet-400 to-violet-300 bg-clip-text text-transparent">
              GitHub
            </span>
          </motion.h2>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="h-10 w-10 rounded-full border-2 border-violet-500 border-t-transparent animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile card */}
            {profile && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-card/80 border-border h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-5">
                    <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-violet-600/50">
                      <Image
                        src={profile.avatar_url}
                        alt={profile.name || profile.login}
                        fill
                        sizes="96px"
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-xl">{profile.name || profile.login}</h3>
                      <p className="text-muted-foreground/60 text-sm">@{profile.login}</p>
                    </div>
                    {profile.bio && (
                      <p className="text-muted-foreground text-sm leading-relaxed">{profile.bio}</p>
                    )}
                    {profile.location && (
                      <span className="flex items-center gap-1.5 text-muted-foreground/60 text-sm">
                        <MapPin className="h-3.5 w-3.5" />
                        {profile.location}
                      </span>
                    )}

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 w-full border-t border-border pt-5">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">
                          <BookOpen className="h-3.5 w-3.5" />
                        </div>
                        <div className="text-white font-bold text-lg">{profile.public_repos}</div>
                        <div className="text-muted-foreground/40 text-xs">Repos</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">
                          <Users className="h-3.5 w-3.5" />
                        </div>
                        <div className="text-white font-bold text-lg">{profile.followers}</div>
                        <div className="text-muted-foreground/40 text-xs">Seguidores</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-muted-foreground mb-1">
                          <Users className="h-3.5 w-3.5" />
                        </div>
                        <div className="text-white font-bold text-lg">{profile.following}</div>
                        <div className="text-muted-foreground/40 text-xs">Seguindo</div>
                      </div>
                    </div>

                    <a
                      href={profile.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 w-full justify-center py-2.5 px-4 rounded-lg bg-muted hover:bg-muted text-white text-sm font-medium transition-colors"
                    >
                      <SiGithub className="h-4 w-4" />
                      Ver Perfil
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Repos grid */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {repos.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 + 0.2, duration: 0.5 }}
                >
                  <Card className="bg-card/80 border-border hover:border-violet-600/50 transition-all duration-300 h-full group">
                    <CardContent className="p-4 flex flex-col h-full">
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <SiGithub className="h-4 w-4 text-muted-foreground/60 flex-shrink-0" />
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-violet-500 hover:text-violet-300 font-medium text-sm font-mono truncate transition-colors"
                          >
                            {repo.name}
                          </a>
                        </div>
                        <ExternalLink className="h-3.5 w-3.5 text-muted-foreground/40 group-hover:text-muted-foreground flex-shrink-0 transition-colors" />
                      </div>

                      <p className="text-muted-foreground/60 text-xs leading-relaxed flex-1 mb-4 line-clamp-3">
                        {repo.description || 'Sem descrição disponível.'}
                      </p>

                      {repo.topics && repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-3">
                          {repo.topics.slice(0, 3).map((topic) => (
                            <Badge
                              key={topic}
                              className="text-xs bg-violet-600/10 text-violet-500 border-violet-600/20 py-0.5"
                            >
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      )}

                      <div className="flex items-center justify-between text-xs text-muted-foreground/40 border-t border-border/50 pt-3">
                        {repo.language && <LanguageBadge lang={repo.language} />}
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Star className="h-3 w-3" />
                            {repo.stargazers_count}
                          </span>
                          <span className="flex items-center gap-1">
                            <GitFork className="h-3 w-3" />
                            {repo.forks_count}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
