'use client'
import { useEffect, useRef } from 'react'

interface MermaidDiagramProps {
  chart: string
}

export function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let cancelled = false

    async function render() {
      try {
        const mermaid = (await import('mermaid')).default
        mermaid.initialize({
          startOnLoad: false,
          theme: 'dark',
          themeVariables: {
            primaryColor: '#783bff',
            primaryTextColor: '#f0ede8',
            primaryBorderColor: '#393347',
            lineColor: '#aaaaaa',
            background: '#0f0e15',
            mainBkg: '#16141f',
            nodeBorder: '#783bff',
            clusterBkg: '#1d1a28',
            titleColor: '#f0ede8',
            edgeLabelBackground: '#16141f',
            fontFamily: 'Montserrat, sans-serif',
          },
        })

        if (ref.current && !cancelled) {
          const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`
          const { svg } = await mermaid.render(id, chart)
          if (ref.current && !cancelled) {
            ref.current.innerHTML = svg
          }
        }
      } catch (err) {
        if (ref.current && !cancelled) {
          ref.current.innerHTML = `<pre class="text-muted-foreground text-xs p-4 overflow-auto">${chart}</pre>`
        }
        console.error('Mermaid render error:', err)
      }
    }

    render()
    return () => {
      cancelled = true
    }
  }, [chart])

  return (
    <div className="w-full overflow-x-auto rounded-lg bg-card/50 min-h-32">
      <div
        ref={ref}
        className="p-2 sm:p-4 min-h-32 flex items-center justify-center min-w-[300px] [&_svg]:max-w-none"
      />
    </div>
  )
}
