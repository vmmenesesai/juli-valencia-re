import type { Metadata } from "next";
import SectionDivider from "@/components/ui/SectionDivider";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Juli Valencia | Luxury Real Estate San Antonio",
  description:
    "Meet Juli Valencia — luxury realtor, global hospitality professional, and San Antonio's guide to exceptional residential real estate. 22+ years of luxury experience.",
  openGraph: {
    title: "About Juli Valencia | Luxury Realtor San Antonio",
    description:
      "22+ years across luxury real estate, Emirates Airlines, and Marriott International — now bringing a global standard to San Antonio's most prestigious properties.",
  },
};

const credentials = [
  { label: "22+ Years", detail: "In luxury industries across three continents" },
  { label: "New York", detail: "Real estate experience in America's most competitive market" },
  { label: "Emirates Airlines", detail: "Global luxury hospitality at the highest standard" },
  { label: "Marriott International", detail: "Five-star service philosophy and operations" },
  { label: "House Flipping", detail: "Hands-on renovation and design project management" },
  { label: "Bilingual", detail: "English and Spanish — serving all of San Antonio's luxury buyers" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-midnight pt-28 pb-0 px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            {/* Text side */}
            <div className="pb-20 lg:pb-24">
              <p className="font-body text-gold text-xs tracking-[0.25em] uppercase mb-6">
                About
              </p>
              <h1 className="font-display text-5xl md:text-6xl font-light text-ivory leading-tight mb-8">
                Juli Valencia
              </h1>
              <p className="font-body text-taupe text-lg leading-relaxed mb-8">
                Luxury Residential Realtor<br />
                San Antonio, TX
              </p>
              <div className="gold-divider mb-8 max-w-24" />
              <p className="font-body text-ivory text-base leading-relaxed">
                {/* TODO: Replace with approved bio copy */}
                Juli Valencia brings a perspective to San Antonio real estate that no local
                market alone could produce. With 22+ years working at the intersection of luxury
                hospitality, global travel, and residential design, she approaches every property
                transaction the way a seasoned hotelier approaches a guest experience — with
                meticulous attention to detail, unwavering discretion, and a standard defined by
                the world&apos;s most demanding clients.
              </p>
            </div>

            {/* Photo side */}
            <div className="relative lg:self-stretch flex items-end">
              {/* Photo placeholder — TODO: Replace with approved editorial photo */}
              <div className="w-full aspect-[3/4] bg-obsidian border border-gold/20 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-body text-gold/40 text-xs tracking-[0.2em] uppercase mb-2">
                    Photo
                  </p>
                  <p className="font-body text-taupe text-xs">
                    TODO: Editorial photo of Juli
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-obsidian to-transparent" />
      </section>

      {/* Bio & Credentials */}
      <section className="bg-obsidian py-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          {/* Full bio */}
          <div className="max-w-3xl mx-auto mb-20">
            {/* TODO: Replace with approved bio copy */}
            <p className="font-body text-taupe text-base leading-relaxed mb-6">
              Her career began in New York real estate — one of the world&apos;s most competitive and
              sophisticated markets — where she developed the pricing intuition, negotiation discipline,
              and client service standards that define her practice today. From there, a two-decade
              career with Emirates Airlines and Marriott International deepened her understanding of
              what truly world-class service looks and feels like.
            </p>
            <p className="font-body text-taupe text-base leading-relaxed mb-6">
              Juli has personally designed and overseen the renovation of multiple residential
              properties — giving her a hands-on perspective on construction quality, material value,
              and design integrity that most realtors simply don&apos;t have. When she walks through
              a luxury home with a client, she sees what the finishes are made of, how the structure
              was built, and where the value actually lives.
            </p>
            <p className="font-body text-taupe text-base leading-relaxed">
              Today, Juli works exclusively in San Antonio&apos;s luxury residential market — serving
              a deliberately small number of clients with the full attention their investment deserves.
              She is bilingual in English and Spanish, and her international background allows her to
              serve buyers arriving from across the country and around the world.
            </p>
          </div>

          <SectionDivider className="mb-20" />

          {/* Credential grid */}
          <div className="mb-20">
            <p className="font-body text-gold text-xs tracking-[0.25em] uppercase mb-10 text-center">
              Background & Credentials
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {credentials.map((c) => (
                <div key={c.label} className="border border-gold/20 p-6 hover:border-gold/40 transition-colors duration-300">
                  <p className="font-display text-2xl font-light text-gold mb-2">{c.label}</p>
                  <p className="font-body text-taupe text-sm leading-relaxed">{c.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <SectionDivider className="mb-20" />

          {/* Tagline & CTA */}
          <div className="text-center">
            <p className="font-display text-3xl md:text-4xl font-light text-ivory italic mb-6 max-w-2xl mx-auto leading-relaxed">
              &ldquo;Every luxury purchase deserves a guide who&apos;s been there — not just sold there.&rdquo;
            </p>
            <p className="font-body text-gold text-xs tracking-[0.2em] uppercase mb-10">
              — Juli Valencia
            </p>
            <Button href="/contact" variant="primary">
              Let&apos;s Talk About Your Next Home
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
