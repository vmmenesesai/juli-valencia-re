import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionDivider from "@/components/ui/SectionDivider";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "How to Choose Your Luxury Home in San Antonio | Juli Valencia",
  description:
    "A structured six-step framework for buying a luxury home in San Antonio. From defining your lifestyle to making an educated offer — expert guidance from Juli Valencia.",
  openGraph: {
    title: "How to Buy a Luxury Home in San Antonio | Juli Valencia",
    description:
      "A six-step buyer's framework for San Antonio luxury real estate. Expert guidance from Juli Valencia.",
  },
};

const steps = [
  {
    number: "01",
    title: "Define Your Lifestyle First",
    body: "Before price or square footage, identify how you live. Do you entertain frequently? Do you need a dedicated home office or studio? Are top-rated schools a priority? Do you value walkability and proximity to culture, or do you prefer the privacy and quiet of a secluded estate? The answers to these questions will narrow your search faster than any price filter.",
    aside: null,
  },
  {
    number: "02",
    title: "Understand the San Antonio Luxury Tiers",
    body: "San Antonio's luxury market has three distinct tiers, each with its own character, competition level, and buyer expectations.",
    aside: [
      {
        label: "$800K – $1.2M",
        desc: "Entry luxury — high-end finishes, desirable neighborhoods, and a competitive market. Buyers here often find themselves in multiple-offer situations.",
      },
      {
        label: "$1.2M – $2M",
        desc: "True luxury — custom builds, larger lots, and premium locations. Less competition, more negotiating room, and greater differentiation between properties.",
      },
      {
        label: "$2M+",
        desc: "Ultra-luxury — estates, gated communities, and bespoke architecture. Many transactions happen off-market. Relationships and discretion are everything at this tier.",
      },
    ],
  },
  {
    number: "03",
    title: "Choose the Right Neighborhood for Your Life",
    body: "San Antonio's luxury neighborhoods are not interchangeable. The Dominion offers gated prestige. Alamo Heights offers walkability and schools. Hill Country Village offers seclusion and natural beauty. Understanding each community's character — not just its price range — is essential to a decision you'll be happy with for decades.",
    link: { href: "/neighborhoods", label: "Explore the Neighborhoods Guide →" },
  },
  {
    number: "04",
    title: "Know What to Inspect in a Luxury Home",
    body: "Not all luxury homes are created equal. A higher price tag doesn't guarantee quality construction, premium materials, or sound systems. Knowing what to look for — from gunite pools to Sub-Zero appliances to zoned HVAC — allows you to evaluate what you're actually buying and negotiate from an informed position.",
    link: { href: "/luxury-features", label: "See the Luxury Features Guide →" },
  },
  {
    number: "05",
    title: "Work With a Luxury Specialist",
    body: "The luxury segment requires a different skill set than general real estate. You need an agent with deep local market knowledge, off-market access, construction and design literacy, and the discretion that high-value transactions demand. Not all agents who sell luxury homes are luxury specialists. The distinction matters.",
    link: { href: "/working-with-realtor", label: "Why the right realtor changes everything →" },
  },
  {
    number: "06",
    title: "Make an Educated Offer",
    body: "Luxury homes require nuanced negotiation. Fewer comparable sales make pricing less straightforward. Days on market tell a different story at this tier. Contingencies, inspection periods, and closing timelines all require more sophistication. An experienced luxury specialist will guide you through structuring an offer that's competitive without leaving money on the table.",
    aside: null,
  },
];

export default function HowToChoosePage() {
  return (
    <>
      <PageHero
        title="How to Choose Your Luxury Home in San Antonio"
        subtitle="A structured framework that separates confident buyers from overwhelmed ones — built from two decades of luxury real estate experience."
      />

      <section className="bg-obsidian py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-16">
            {steps.map((step, i) => (
              <div key={step.number}>
                <div className="flex gap-6 md:gap-10 items-start">
                  {/* Step number */}
                  <div className="flex-shrink-0">
                    <span className="font-display text-5xl md:text-6xl font-light text-gold/30 leading-none">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h2 className="font-display text-2xl md:text-3xl font-light text-ivory mb-5">
                      {step.title}
                    </h2>
                    <p className="font-body text-taupe text-base leading-relaxed mb-6">
                      {step.body}
                    </p>

                    {/* Tier breakdown */}
                    {step.aside && (
                      <div className="border-l-2 border-gold/40 pl-6 space-y-4 mb-6">
                        {step.aside.map((tier) => (
                          <div key={tier.label}>
                            <p className="font-body text-gold text-xs tracking-[0.15em] uppercase mb-1">
                              {tier.label}
                            </p>
                            <p className="font-body text-ivory text-sm leading-relaxed">
                              {tier.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Internal link */}
                    {step.link && (
                      <Link
                        href={step.link.href}
                        className="font-body text-gold text-sm hover:text-gold-light transition-colors duration-300 underline underline-offset-4"
                      >
                        {step.link.label}
                      </Link>
                    )}
                  </div>
                </div>

                {i < steps.length - 1 && <SectionDivider className="mt-16" />}
              </div>
            ))}
          </div>

          <SectionDivider className="my-20" />

          <div className="text-center">
            <p className="font-display text-2xl font-light text-ivory italic mb-4">
              Ready to start?
            </p>
            <p className="font-body text-taupe text-sm leading-relaxed max-w-xl mx-auto mb-8">
              Schedule a consultation with Juli and walk through this framework together —
              tailored to your specific budget, priorities, and timeline.
            </p>
            <Button href="/contact" variant="primary">
              Schedule a Consultation with Juli
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
