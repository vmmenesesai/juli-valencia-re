import Link from "next/link";

const cards = [
  {
    href: "/neighborhoods",
    label: "Neighborhoods",
    title: "San Antonio's Premier Luxury Neighborhoods",
    description:
      "From The Dominion's gated grandeur to the historic charm of King William — know the city before you search.",
    number: "01",
  },
  {
    href: "/how-to-choose",
    label: "Buyer's Framework",
    title: "How to Choose Your Luxury Home",
    description:
      "A structured, six-step decision framework that separates confident buyers from overwhelmed ones.",
    number: "02",
  },
  {
    href: "/luxury-features",
    label: "What to Look For",
    title: "Luxury Home Features That Matter",
    description:
      "Wolf appliances, gunite pools, smart home systems — learn what separates true luxury from a premium price tag.",
    number: "03",
  },
  {
    href: "/working-with-realtor",
    label: "Why a Specialist",
    title: "Why Your Realtor Choice Matters in Luxury",
    description:
      "Off-market access, nuanced negotiation, and deep local knowledge — what a luxury specialist actually brings.",
    number: "04",
  },
];

export default function TeaserCards() {
  return (
    <section className="bg-midnight py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-gold text-xs tracking-[0.25em] uppercase mb-4">
            The Buyer&apos;s Resource
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-ivory">
            Everything You Need to Buy with Confidence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gold/20">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group relative bg-obsidian p-10 hover:bg-midnight transition-colors duration-500 overflow-hidden"
            >
              {/* Number watermark */}
              <span className="absolute top-6 right-8 font-display text-7xl font-light text-gold/10 group-hover:text-gold/20 transition-colors duration-500 select-none">
                {card.number}
              </span>

              {/* Label */}
              <p className="font-body text-gold text-xs tracking-[0.2em] uppercase mb-4">
                {card.label}
              </p>

              {/* Title */}
              <h3 className="font-display text-2xl md:text-3xl font-light text-ivory leading-snug mb-4 group-hover:text-gold transition-colors duration-300 max-w-xs">
                {card.title}
              </h3>

              {/* Description */}
              <p className="font-body text-taupe text-sm leading-relaxed mb-8">
                {card.description}
              </p>

              {/* CTA */}
              <p className="font-body text-xs tracking-[0.15em] uppercase text-gold border-b border-gold/40 inline-block pb-1 group-hover:border-gold transition-colors duration-300">
                Read more →
              </p>

              {/* Hover gold border */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
