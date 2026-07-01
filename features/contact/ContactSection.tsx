'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'
import { CheckCircle, Mail, MapPin, Send } from 'lucide-react'
import { useState } from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { SiGithub, SiWhatsapp } from 'react-icons/si'

const socialLinks = [
  {
    icon: SiGithub,
    label: 'GitHub',
    value: 'github.com/Lucier',
    href: 'https://github.com/Lucier',
  },
  {
    icon: FaLinkedinIn,
    label: 'LinkedIn',
    value: 'linkedin.com/in/lucierlima',
    href: 'https://www.linkedin.com/in/lucierlima',
  },
  {
    icon: SiWhatsapp,
    label: 'WhatsApp',
    value: '+55 89 9 9428-2009',
    href: 'https://wa.me/5589994282009',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'lucierflima@gmail.com',
    href: 'mailto:lucierflima@gmail.com',
  },
]

interface FormState {
  name: string
  email: string
  message: string
}

export function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error ?? 'Erro ao enviar mensagem.')
      }

      setSubmitted(true)
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contato" className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-[11px] font-medium uppercase tracking-[0.1em]" style={{ color: '#783bff' }}
          >
            Vamos conversar
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 font-bold text-foreground tracking-[-1px]" style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', lineHeight: '1.15' }}
          >
            Entre em{' '}
            <span className="bg-gradient-to-r from-violet-400 to-violet-300 bg-clip-text text-transparent">
              Contato
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
          >
            Tem um projeto em mente? Vamos conversar sobre como posso ajudar a
            construir sua solução backend.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="mb-2 text-xl font-bold text-white">
                Informações de contato
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Aberto para oportunidades de trabalho, projetos freelance e
                colaborações. Respondo em até 24 horas.
              </p>
            </div>

            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-lg bg-violet-600/10 text-violet-500 transition-colors hover:bg-violet-600/20"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Location */}
            <Card className="border-border bg-card/80">
              <CardContent className="flex items-center gap-3 p-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-violet-600/10">
                  <MapPin className="h-5 w-5 text-violet-500" />
                </div>
                <div>
                  <p className="text-xs tracking-wide text-muted-foreground/60 uppercase">
                    Localização
                  </p>
                  <p className="text-sm font-medium text-foreground/80">
                    Brasil — Remoto
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="border-border bg-card/80">
              <CardContent className="p-6">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                    <CheckCircle className="h-16 w-16 text-green-400" />
                    <h3 className="text-xl font-bold text-white">
                      Mensagem enviada!
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Obrigado pelo contato. Retornarei em breve.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-2 border-border/60 text-foreground/80 hover:text-foreground"
                      onClick={() => setSubmitted(false)}
                    >
                      Enviar outra mensagem
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" suppressHydrationWarning>
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm font-medium text-muted-foreground"
                      >
                        Nome
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Seu nome"
                        value={form.name}
                        onChange={handleChange}
                        required
                        suppressHydrationWarning
                        className="border-border/60 bg-muted/50 text-white placeholder:text-muted-foreground/60 focus:border-violet-600"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm font-medium text-muted-foreground"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        suppressHydrationWarning
                        className="border-border/60 bg-muted/50 text-white placeholder:text-muted-foreground/60 focus:border-violet-600"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-1.5 block text-sm font-medium text-muted-foreground"
                      >
                        Mensagem
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Descreva seu projeto ou ideia..."
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        suppressHydrationWarning
                        className="resize-none border-border/60 bg-muted/50 text-white placeholder:text-muted-foreground/60 focus:border-violet-600"
                      />
                    </div>
                    {error && (
                      <p className="rounded-lg bg-red-500/10 px-4 py-2 text-sm text-red-400">
                        {error}
                      </p>
                    )}
                    <Button
                      type="submit"
                      size="lg"
                      disabled={loading}
                      className="w-full bg-violet-700 font-semibold text-white hover:bg-violet-800"
                    >
                      {loading ? (
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Enviando...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="h-4 w-4" />
                          Enviar Mensagem
                        </div>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
