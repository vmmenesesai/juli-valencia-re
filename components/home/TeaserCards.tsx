import Link from "next/link";
import Button from "@/components/ui/Button";

const pillars = [
  {
    href: "/neighborhoods",
    number: "01",
    title: "San Antonio's Premier Luxury Neighborhoods",
    description:
      "From The Dominion's gated grandeur to the historic charm of King William — know the city before you search.",
  },
  {
    href: "/how-to-choose",
    number: "02",
    title: "How to Choose Your Luxury Home",
    description:
      "A structured, six-step decision framework that separates confident buyers from overwhelmed ones.",
  },
  {
    href: "/luxury-features",
    number: "03",
    title: "Luxury Home Features That Matter",
    description:
      "Wolf appliances, gunite pools, smart home systems — learn what separates true luxury from a premium price tag.",
  },
  {
    href: "/working-with-realtor",
    number: "04",
    title: "Why Your Realtor Choice Matters",
    description:
      "Off-market access, nuanced negotiation, and deep local knowledge — what a luxury specialist actually brings.",
  },
];

export default function TeaserCards() {
  return (
    <>
      {/* Content pillars */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 mb-12 md:mb-16">
            <div className="lg:col-span-4 mb-6 lg:mb-0">
              <p className="font-ui text-[10px] md:text-xs tracking-[0.3em] uppercase text-gold mb-3">
                The Buyer&apos;s Resource
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold italic text-black leading-tight">
                Everything You Need
              </h2>
            </div>
            <div className="lg:col-span-8 lg:flex lg:items-end">
              <p className="font-body text-gray text-base md:text-lg font-light leading-relaxed max-w-xl">
                A curated collection of guides built from two decades of luxury
                real estate experience. Content-first — no listings, no pressure,
                just expertise.
              </p>
            </div>
          </div>

          {/* Numbered list */}
          <div className="border-t border-gray-light">
            {pillars.map((pillar) => (
              <Link
                key={pillar.href}
                href={pillar.href}
                className="group block border-b border-gray-light py-6 md:py-8 transition-colors duration-300 hover:bg-gray-light/30"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  {/* Number */}
                  <span className="font-ui text-xs tracking-[0.2em] text-gold shrink-0 pt-1">
                    {pillar.number}
                  </span>

                  {/* Title + description */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold italic text-black leading-snug group-hover:text-forest transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    <p className="font-body text-gray text-sm md:text-base font-light leading-relaxed mt-2 max-w-2xl">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <span className="font-body text-sm text-gray group-hover:text-forest transition-colors duration-300 shrink-0 self-center hidden md:block">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-obsidian py-16 md:py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-ui text-[10px] md:text-xs tracking-[0.3em] uppercase text-gold mb-6">
            Ready When You Are
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[56px] font-bold italic text-white leading-tight mb-6">
            Let&apos;s Find Your Luxury Home in San Antonio
          </h2>
          <p className="font-body text-white/60 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto mb-10">
            Every luxury purchase begins with a conversation. Tell Juli what
            you&apos;re looking for and she&apos;ll guide you from research to
            keys in hand.
          </p>
          <Button href="/contact" variant="outline-light">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </>
  );
}
