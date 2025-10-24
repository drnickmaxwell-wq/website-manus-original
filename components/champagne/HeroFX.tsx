'use client'
import clsx from 'clsx'

interface HeroFXProps {
  title?: string
  subtitle?: string
  eyebrow?: string
  theme?: 'default' | 'magenta-gold' | 'teal-gold' | 'teal-magenta'
  children?: React.ReactNode
}

export default function HeroFX({ title, subtitle, eyebrow, theme = 'default', children }: HeroFXProps) {
  return (
    <section className="relative overflow-hidden rounded-2xl smh-gold-border min-h-[46vh] md:min-h-[52vh]">
      {/* Gradient + mask base */}
      <div
        className={clsx(
          'absolute inset-0 smh-wave-mask smh-gradient-base',
          theme === 'magenta-gold' && 'bg-[linear-gradient(135deg,#C2185B_0%,#D4AF37_100%)]',
          theme === 'teal-gold' && 'bg-[linear-gradient(135deg,#40C4B4_0%,#D4AF37_100%)]',
          theme === 'teal-magenta' && 'bg-[linear-gradient(135deg,#40C4B4_0%,#C2185B_100%)]'
        )}
      />

      {/* Film grain + particles stack */}
      <div className="absolute inset-0 mix-blend-overlay opacity-[var(--film-grain-opacity)] bg-[url('/textures/film-grain-desktop.webp')] md:opacity-[0.1]" />
      <div className="absolute inset-0 mix-blend-screen opacity-[var(--particles-opacity)] bg-[url('/textures/particles-gold.webp')]" />
      <div className="absolute inset-0 mix-blend-screen opacity-[calc(var(--particles-opacity)*0.9)] bg-[url('/textures/particles-magenta.webp')]" />
      <div className="absolute inset-0 mix-blend-screen opacity-[calc(var(--particles-opacity)*0.8)] bg-[url('/textures/particles-teal.webp')]" />
      <div className="absolute inset-0 mix-blend-screen opacity-[0.25] bg-[url('/overlays/glow-dust.webp')]" />

      {/* Foreground content */}
      <header className="relative z-10 max-w-5xl mx-auto px-6 py-14 md:py-20 text-center">
        {eyebrow && <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--smh-text-muted)] mb-3">{eyebrow}</p>}
        {title && <h1 className="smh-heading text-4xl md:text-5xl font-semibold mb-4">{title}</h1>}
        {subtitle && <p className="smh-text-dim text-base md:text-lg max-w-2xl mx-auto">{subtitle}</p>}
        {children}
      </header>
    </section>
  )
}
