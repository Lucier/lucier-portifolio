'use client'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { cn } from '@/lib/utils'
import { Download, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Sobre', href: 'sobre' },
  { label: 'Tecnologias', href: 'tecnologias' },
  { label: 'Projetos', href: 'projetos' },
  { label: 'Estudos de caso', href: 'estudos' },
  { label: 'Arquitetura', href: 'arquitetura' },
  { label: 'GitHub', href: 'github' },
  { label: 'Contato', href: 'contato' },
]

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeSection = useScrollSpy(navItems.map((n) => n.href))

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className="fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-md"
        style={{
          borderColor: 'rgba(42,38,56,0.8)',
          background: 'rgba(15,14,21,0.85)',
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('hero')}
              className="text-foreground text-xl font-bold tracking-tight transition-opacity hover:opacity-80"
            >
              Lucier<span style={{ color: '#783bff' }}>.</span>
            </button>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    'rounded-md px-3 py-2 text-sm font-medium transition-all duration-200',
                    activeSection === item.href
                      ? 'bg-violet-600/10 text-violet-400'
                      : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                  )}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              {/* Download CV button — desktop */}
              <a
                href="/curriculo.pdf"
                download="Lucier_Ferreira_Lima_Curriculo.pdf"
                className="hidden items-center gap-1.5 rounded-md border border-violet-600/30 bg-violet-600/10 px-3 py-1.5 text-sm font-medium text-violet-400 transition-colors hover:bg-violet-600/20 md:inline-flex"
              >
                <Download className="h-3.5 w-3.5" />
                Currículo
              </a>

              {/* Mobile menu button */}
              <button
                className="text-muted-foreground hover:text-foreground inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:bg-white/5 md:hidden"
                onClick={() => setMobileOpen(true)}
                aria-label="Abrir menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile menu drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 z-50 flex h-full w-72 flex-col md:hidden',
          'transition-transform duration-300 ease-in-out',
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        style={{ background: '#16141f', borderLeft: '1px solid #2a2638' }}
      >
        {/* Drawer header */}
        <div
          className="flex h-16 items-center justify-between border-b px-6"
          style={{ borderColor: '#2a2638' }}
        >
          <span className="text-foreground text-lg font-bold">
            Lucier<span style={{ color: '#783bff' }}>.</span>
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-muted-foreground hover:text-foreground inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:bg-white/5"
            aria-label="Fechar menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex flex-1 flex-col gap-1 p-4">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => {
                scrollToSection(item.href)
                setMobileOpen(false)
              }}
              className={cn(
                'rounded-lg px-4 py-3 text-left text-base font-medium transition-all duration-200',
                activeSection === item.href
                  ? 'bg-violet-600/10 text-violet-400'
                  : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
              )}
            >
              {item.label}
            </button>
          ))}

          <a
            href="/curriculo.pdf"
            download="Lucier_Ferreira_Lima_Curriculo.pdf"
            onClick={() => setMobileOpen(false)}
            className="mt-2 flex items-center gap-2 rounded-lg border border-violet-600/30 bg-violet-600/10 px-4 py-3 text-base font-medium text-violet-400 transition-colors hover:bg-violet-600/20"
          >
            <Download className="h-4 w-4" />
            Baixar Currículo
          </a>
        </nav>
      </div>
    </>
  )
}
