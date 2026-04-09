import Link from "next/link";
import SectionDivider from "@/components/ui/SectionDivider";

const pillars = [
  {
    icon: "◈",
    title: "San Antonio's Luxury Neighborhoods",
    description: "Know where to look before you search — a curated guide to the city's most prestigious communities.",
    href: "/neighborhoods",
  },
  {
    icon: "◇",
    title: "How to Choose Your Luxury Home",
    description: "A step-by-step buyer's framework built from two decades of high-end real estate experience.",
    href: "/how-to-choose",
  },
  {
    icon: "◆",
    title: "What Luxury Really Means",
    description: "Features, finishes, and what to demand — so you know the difference between expensive and exceptional.",
    href: "/luxury-features",
  },
];

export default function IntroStrip() {
  return (
    <section className="bg-warm-white py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionDivider className="mb-20" />

        {/* Brand statement */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="font-display text-2xl md:text-3xl font-light text-charcoal leading-relaxed italic">
            &ldquo;Luxury real estate isn&apos;t just about price — it&apos;s about knowing exactly
            what you&apos;re buying, and finding the home that fits the life you&apos;ve built.&rdquo;
          </p>
          <p className="font-body text-champagne text-xs tracking-[0.2em] uppercase mt-6">
            — Juli Valencia
          </p>
        </div>

        <SectionDivider className="mb-20" />

        {/* 3-column pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pillars.map((pillar) => (
            <Link
              key={pillar.href}
              href={pillar.href}
              className="group text-center"
            >
              <div className="text-champagne text-3xl mb-6 transition-transform duration-300 group-hover:scale-110">
                {pillar.icon}
              </div>
              <h3 className="font-display text-xl text-charcoal mb-4 group-hover:text-champagne transition-colors duration-300">
                {pillar.title}
              </h3>
              <p className="font-body text-stone text-sm leading-relaxed">
                {pillar.description}
              </p>
              <p className="font-body text-champagne text-xs tracking-[0.15em] uppercase mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Explore →
              </p>
            </Link>
          ))}
        </div>

        <SectionDivider className="mt-20" />
      </div>
    </section>
  );
}
