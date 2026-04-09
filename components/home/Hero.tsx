import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white pt-24 lg:pt-0 overflow-hidden">
      {/* Desktop: asymmetric grid / Mobile: stacked */}
      <div className="lg:grid lg:grid-cols-12 lg:min-h-screen">

        {/* Left panel — headline */}
        <div className="relative flex flex-col justify-center px-6 md:px-10 lg:px-16 py-16 lg:py-0 lg:col-span-7">
          {/* Rotated vertical text — desktop only */}
          <div className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-center whitespace-nowrap">
            <p className="font-ui text-[10px] tracking-[0.3em] uppercase text-gray">
              Luxury Real Estate · San Antonio
            </p>
          </div>

          {/* Counter */}
          <div className="flex items-center gap-4 mb-8 lg:mb-12 lg:ml-12">
            <span className="font-ui text-xs tracking-[0.2em] uppercase text-gold">01</span>
            <div className="h-px w-12 bg-gold/40" />
          </div>

          {/* Mobile label */}
          <p className="font-ui text-[10px] md:text-xs tracking-[0.3em] uppercase text-gray mb-4 lg:ml-12 lg:hidden">
            Luxury Real Estate · San Antonio
          </p>

          <div className="lg:ml-12 max-w-2xl">
            <h1 className="font-display text-[40px] md:text-[56px] lg:text-[72px] xl:text-[84px] font-bold italic text-black leading-[1.05] tracking-tight">
              Your Guide to{" "}
              <span className="text-forest">Luxury Living</span>{" "}
              in San Antonio
            </h1>

            <p className="font-body text-gray text-base md:text-lg font-light leading-relaxed mt-6 md:mt-8 max-w-lg">
              Expert insight from a global luxury professional with 22+ years
              of experience across New York real estate, Emirates Airlines, and
              Marriott International.
            </p>

            <div className="mt-8 md:mt-10">
              <Button href="/contact" variant="primary">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>

        {/* Right panel — dark forest green quote */}
        <div className="relative bg-forest flex items-center lg:col-span-5">
          <div className="px-6 md:px-10 lg:px-14 py-16 lg:py-0">
            <p className="font-ui text-[10px] tracking-[0.3em] uppercase text-gold mb-6">
              From Juli
            </p>
            <blockquote className="font-display text-xl md:text-2xl lg:text-3xl font-normal italic text-white/90 leading-relaxed">
              &ldquo;Luxury real estate isn&apos;t just about price — it&apos;s
              about knowing exactly what you&apos;re buying, and finding the home
              that fits the life you&apos;ve built.&rdquo;
            </blockquote>
            <p className="font-ui text-xs tracking-[0.2em] uppercase text-gold/80 mt-8">
              — Juli Valencia
            </p>
          </div>

          {/* Decorative gold line */}
          <div className="absolute left-0 top-8 bottom-8 w-px bg-gold/20 hidden lg:block" />
        </div>
      </div>

      {/* Scroll indicator — desktop only */}
      <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-30">
        <p className="font-ui text-[10px] tracking-[0.25em] uppercase text-black">Scroll</p>
        <div className="w-px h-8 bg-black animate-pulse" />
      </div>
    </section>
  );
}
