import Button from "./Button";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function PageHero({ title, subtitle, ctaText, ctaHref }: PageHeroProps) {
  return (
    <section className="relative bg-white pt-32 md:pt-36 pb-16 md:pb-24 px-6 md:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <p className="font-ui text-[10px] md:text-xs tracking-[0.3em] uppercase text-gold mb-4">
          Juli Valencia · San Antonio
        </p>
        <h1 className="font-display text-[40px] md:text-[56px] lg:text-[72px] font-bold italic text-black leading-[1.05] mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="font-body text-gray text-base md:text-lg font-light leading-relaxed max-w-2xl mb-10">
            {subtitle}
          </p>
        )}
        {ctaText && ctaHref && (
          <Button href={ctaHref} variant="outline">
            {ctaText}
          </Button>
        )}
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-light" />
    </section>
  );
}
