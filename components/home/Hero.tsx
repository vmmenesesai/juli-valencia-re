import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-midnight">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-midnight via-obsidian to-midnight opacity-90" />

      {/* Decorative gold accent lines */}
      <div className="absolute left-0 top-1/4 w-px h-48 bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
      <div className="absolute right-0 top-1/3 w-px h-48 bg-gradient-to-b from-transparent via-gold/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <p className="font-body text-gold text-xs tracking-[0.35em] uppercase mb-8">
          San Antonio · Luxury Real Estate
        </p>

        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-ivory leading-[1.1] tracking-wide mb-8">
          Your Guide to<br />
          <span className="italic text-gold">Luxury Living</span><br />
          in San Antonio
        </h1>

        <div className="gold-divider max-w-24 mx-auto mb-8" />

        <p className="font-body text-taupe text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          Expert insight from a global luxury professional with 22+ years of experience
          across New York real estate, Emirates Airlines, and Marriott International.
        </p>

        <Button href="/contact" variant="primary">
          Schedule a Consultation
        </Button>
      </div>

      {/* Bottom fade to content */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-obsidian to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <p className="font-body text-xs tracking-[0.2em] uppercase text-ivory">Scroll</p>
        <div className="w-px h-10 bg-ivory animate-pulse" />
      </div>
    </section>
  );
}
