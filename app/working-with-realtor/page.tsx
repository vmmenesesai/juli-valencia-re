import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionDivider from "@/components/ui/SectionDivider";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Why Your Realtor Choice Matters in Luxury Real Estate | Juli Valencia",
  description:
    "The luxury market is different — and it requires a specialist. Learn what separates a true luxury realtor from a general agent, and why Juli Valencia is San Antonio's expert.",
  openGraph: {
    title: "Why Your Realtor Matters More in Luxury Real Estate | Juli Valencia",
    description:
      "Off-market access, design literacy, and high-stakes negotiation. What a luxury specialist actually brings — and why it matters.",
  },
};

const marketDifferences = [
  {
    heading: "Fewer Comps, More Judgment",
    detail:
      "In the general market, pricing is largely algorithmic — comps are plentiful and recent. In the luxury segment, comparable sales are few, outdated, or non-public. Pricing requires nuanced judgment, deep market knowledge, and the ability to evaluate qualitative factors that don't appear in data.",
  },
  {
    heading: "Longer Days on Market",
    detail:
      "Luxury homes take longer to sell — not because they're overpriced, but because the pool of qualified buyers is smaller and the decision is more deliberate. Patience and strategy are essential. An inexperienced agent may push for a price reduction when market timing is the actual variable.",
  },
  {
    heading: "Off-Market Is Where Deals Are Made",
    detail:
      "A meaningful percentage of luxury transactions never appear on the MLS. They move through agent networks, private client lists, and direct conversations. Without a luxury specialist with deep local relationships, you may never know these properties exist.",
  },
  {
    heading: "Negotiation at This Level Is Different",
    detail:
      "At $1M+, the stakes of every negotiation variable — price, contingencies, inspection periods, closing timelines, and personal property inclusions — are significantly higher. An experienced luxury negotiator knows when to push, when to hold, and when the details matter more than the headline number.",
  },
];

const lookFor = [
  {
    trait: "Deep Local Market Knowledge",
    explanation:
      "Not general real estate knowledge — specific, granular expertise in the luxury segment. How does The Dominion's off-season pricing compare to its peak? Which blocks in Alamo Heights carry a premium? What's the actual absorption rate at $2M+ in this quarter?",
  },
  {
    trait: "Off-Market Access",
    explanation:
      "A network built on trust and relationships that allows your agent to surface properties before they're publicly listed — or to present your interest to sellers who haven't formally listed at all.",
  },
  {
    trait: "Design & Construction Literacy",
    explanation:
      "An agent who can walk a luxury home and immediately identify what's exceptional, what's staged to impress, and what's a red flag. This requires genuine knowledge of architecture, materials, and systems — not just a design aesthetic.",
  },
  {
    trait: "Discretion & Professionalism",
    explanation:
      "Luxury clients value privacy. They don't want their purchase announced on social media or discussed casually. The right agent handles every interaction — from first showing to closing — with the discretion their clients expect.",
  },
  {
    trait: "Negotiation Skill at the Highest Price Points",
    explanation:
      "Strong negotiators at the luxury level are rare. They know how to structure offers that are compelling without exposing their clients unnecessarily, and how to manage the emotional dynamics that inevitably accompany high-stakes decisions.",
  },
];

export default function WorkingWithRealtorPage() {
  return (
    <>
      <PageHero
        title="Why Your Realtor Choice Matters More in Luxury Real Estate"
        subtitle="The luxury segment operates by different rules. The right specialist doesn't just find you a home — they give you access, insight, and protection that a general agent cannot."
      />

      <section className="bg-obsidian py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Section 1: Luxury is Different */}
          <div className="mb-20">
            <p className="font-body text-gold text-xs tracking-[0.25em] uppercase mb-4">
              The Market
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-ivory mb-10">
              Luxury Is a Different Market
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {marketDifferences.map((item) => (
                <div key={item.heading} className="border-l-2 border-gold/40 pl-6">
                  <p className="font-display text-lg text-ivory mb-3">{item.heading}</p>
                  <p className="font-body text-taupe text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <SectionDivider className="mb-20" />

          {/* Section 2: What to Look For */}
          <div className="mb-20">
            <p className="font-body text-gold text-xs tracking-[0.25em] uppercase mb-4">
              What to Look For
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-ivory mb-10">
              What to Look for in a Luxury Realtor
            </h2>
            <div className="flex flex-col gap-8">
              {lookFor.map((item, i) => (
                <div key={item.trait} className="flex gap-6">
                  <span className="font-display text-2xl font-light text-gold/30 flex-shrink-0 w-6 leading-none pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-display text-xl text-ivory mb-3">{item.trait}</p>
                    <p className="font-body text-taupe text-sm leading-relaxed">
                      {item.explanation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <SectionDivider className="mb-20" />

          {/* Section 3: Why Juli */}
          <div className="mb-20">
            <p className="font-body text-gold text-xs tracking-[0.25em] uppercase mb-4">
              Why Juli Valencia
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-ivory mb-8">
              A Global Luxury Background, Applied Locally
            </h2>

            <div className="bg-midnight border border-gold/20 p-8 md:p-12 mb-10">
              <p className="font-display text-xl md:text-2xl font-light text-ivory italic leading-relaxed mb-8">
                &ldquo;I didn&apos;t come to luxury real estate from the sales side. I came from 22 years
                of living and working at the intersection of hospitality, travel, and design —
                industries where the standard is set by the world&apos;s most demanding clients.&rdquo;
              </p>
              <p className="font-body text-gold text-xs tracking-[0.2em] uppercase">
                — Juli Valencia
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  credential: "New York Real Estate",
                  detail:
                    "Hands-on experience in one of the world's most competitive and sophisticated real estate markets — where precision, speed, and discretion are non-negotiable.",
                },
                {
                  credential: "Emirates Airlines",
                  detail:
                    "22+ years serving the world's most discerning travelers, understanding the expectations, communication style, and service standards of globally-minded luxury clients.",
                },
                {
                  credential: "Marriott International",
                  detail:
                    "Deep experience in luxury hospitality — the operations, design standards, and guest experience philosophy that defines five-star service.",
                },
                {
                  credential: "House Flipping & Renovation",
                  detail:
                    "Hands-on experience purchasing, designing, and overseeing renovation of residential properties — so she evaluates a luxury home the way a developer would, not just as a buyer.",
                },
                {
                  credential: "Bilingual (English / Spanish)",
                  detail:
                    "Serves a broader spectrum of San Antonio's luxury buyers — including the city's growing base of Latin American and international buyers — with full fluency and cultural understanding.",
                },
                {
                  credential: "Boutique, High-Touch Service",
                  detail:
                    "Every client is a priority — not a transaction in a pipeline. Juli limits her client base deliberately so that every engagement receives the attention it deserves.",
                },
              ].map((item) => (
                <div key={item.credential} className="flex items-start gap-4">
                  <span className="text-gold mt-1">◆</span>
                  <div>
                    <p className="font-body text-ivory text-sm font-medium mb-1">{item.credential}</p>
                    <p className="font-body text-taupe text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <SectionDivider className="mb-12" />

          <div className="text-center">
            <p className="font-display text-2xl font-light text-ivory italic mb-4">
              Ready to work with a true luxury specialist?
            </p>
            <p className="font-body text-taupe text-sm leading-relaxed max-w-xl mx-auto mb-8">
              Every engagement begins with a conversation. Tell Juli what you&apos;re looking for
              and she&apos;ll tell you honestly whether she can help — and how.
            </p>
            <Button href="/contact" variant="primary">
              Work with Juli — Schedule Your Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
