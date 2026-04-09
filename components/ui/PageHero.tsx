import Button from "./Button";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function PageHero({ title, subtitle, ctaText, ctaHref }: PageHeroProps) {
  return (
    <section className="relative bg-midnight pt-36 pb-24 px-6 lg:px-8 overflow-hidden">
      {/* Decorative gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gold/30" />

      <div className="max-w-4xl mx-auto text-center">
        <p className="font-body text-gold text-xs tracking-[0.25em] uppercase mb-6">
          Juli Valencia · San Antonio
        </p>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-ivory leading-tight mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="font-body text-taupe text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            {subtitle}
          </p>
        )}
        {ctaText && ctaHref && (
          <Button href={ctaHref} variant="outline">
            {ctaText}
          </Button>
        )}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-obsidian to-transparent" />
    </section>
  );
}
