import { Badge } from '@/components/ui/badge'
import { Mail } from 'lucide-react'
import { FaLinkedinIn } from 'react-icons/fa'
import { SiGithub, SiWhatsapp } from 'react-icons/si'

const socialLinks = [
  {
    icon: SiGithub,
    label: 'GitHub',
    href: 'https://github.com/Lucier',
  },
  {
    icon: FaLinkedinIn,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/lucierlima',
  },
  {
    icon: SiWhatsapp,
    label: 'WhatsApp',
    href: 'https://wa.me/5589994282009',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:lucierflima@gmail.com',
  },
]

const stackBadges = ['Next.js', 'TypeScript', 'Tailwind CSS']

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-border bg-background border-t py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Branding */}
          <div className="text-center sm:text-left">
            <p className="text-muted-foreground text-sm">
              Desenvolvido<span className="text-red-400"></span> por{' '}
              <span className="font-semibold text-white">Lucier Lima</span>
            </p>
            <p className="text-muted-foreground/40 mt-1 text-xs">
              © {year} Todos os direitos reservados.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground/60 rounded-lg p-2 transition-colors duration-200 hover:bg-white/5 hover:text-violet-500"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Stack badges */}
          <div className="flex items-center gap-2">
            {stackBadges.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="border-border text-muted-foreground/60 text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
