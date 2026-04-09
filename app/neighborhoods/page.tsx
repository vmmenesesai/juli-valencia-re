import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import NeighborhoodCard from "@/components/neighborhoods/NeighborhoodCard";
import SectionDivider from "@/components/ui/SectionDivider";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "San Antonio Luxury Neighborhoods | Juli Valencia",
  description:
    "Explore San Antonio's premier luxury neighborhoods — The Dominion, Alamo Heights, Terrell Hills, and more. A curated guide by luxury specialist Juli Valencia.",
  openGraph: {
    title: "San Antonio Luxury Neighborhoods | Juli Valencia",
    description:
      "Explore San Antonio's premier luxury neighborhoods. Know where to look before you search.",
  },
};

const neighborhoods = [
  {
    name: "The Dominion",
    tagline: "Where prestige meets privacy",
    priceRange: "$1M – $12M+",
    highlights: [
      "Gated, guard-secured community with world-class golf course and country club",
      "Celebrity residents and San Antonio's most recognized luxury address",
      "The Dominion Country Club offers golf, tennis, swimming, and fine dining",
    ],
    architecturalStyle: "Grand estates, Mediterranean, contemporary custom builds",
    bestFor: "Executives, celebrities, and buyers seeking ultimate prestige and privacy",
  },
  {
    name: "Alamo Heights",
    tagline: "Historic elegance, walkable charm",
    priceRange: "$500K – $5M+",
    highlights: [
      "Top-rated Alamo Heights ISD schools — consistently among the best in Texas",
      "Walkable village atmosphere with boutique shopping and acclaimed restaurants",
      "Just 5 miles from downtown San Antonio with easy access to the city's best",
    ],
    architecturalStyle: "Historic bungalows, updated Tudors, contemporary renovations",
    bestFor: "Families, professionals, and buyers who value schools and walkability",
  },
  {
    name: "Terrell Hills",
    tagline: "Classic estates, central location",
    priceRange: "$500K – $3M+",
    highlights: [
      "Large lots and mature trees create a sense of space rare this close to the city",
      "Central location provides quick access to downtown, the Medical Center, and major highways",
      "Mix of meticulously maintained historic estates and stunning contemporary renovations",
    ],
    architecturalStyle: "Traditional estates, ranch-style, and mid-century modern",
    bestFor: "Buyers seeking space and privacy without sacrificing urban convenience",
  },
  {
    name: "Olmos Park",
    tagline: "Grand homes, old-world character",
    priceRange: "$500K – $5M+",
    highlights: [
      "Grand homes on expansive, tree-lined lots with a distinctly European ambiance",
      "Bordered by Olmos Basin Park — a natural greenbelt with trails and wildlife",
      "Tight-knit community feel with annual events and a fiercely loyal resident base",
    ],
    architecturalStyle: "Mediterranean, Spanish Colonial, French Provincial",
    bestFor: "Architecture enthusiasts, empty nesters, and buyers who love green space",
  },
  {
    name: "Shavano Park",
    tagline: "Quiet, exclusive, and family-first",
    priceRange: "$500K – $3M+",
    highlights: [
      "Peaceful, secluded atmosphere with large lots and deed restrictions protecting character",
      "Northside ISD and private school options including San Antonio Academy nearby",
      "Own police force and city services create an exceptionally safe, well-maintained community",
    ],
    architecturalStyle: "Custom contemporary, transitional, and traditional estate homes",
    bestFor: "Families with children prioritizing safety, schools, and quiet surroundings",
  },
  {
    name: "Hill Country Village",
    tagline: "Secluded estates, natural beauty",
    priceRange: "$500K – $5M+",
    highlights: [
      "One of the smallest incorporated cities in Texas — intimate, exclusive, and intentionally quiet",
      "Stunning Hill Country views and natural landscape with mature oaks and limestone outcroppings",
      "Private feel with strict ordinances preserving the natural environment and low density",
    ],
    architecturalStyle: "Hill Country contemporary, limestone estate homes, ranch-modern",
    bestFor: "Buyers seeking maximum privacy, natural beauty, and a retreat-like lifestyle",
  },
  {
    name: "King William Historic District",
    tagline: "Victorian grandeur, arts district soul",
    priceRange: "$500K – $2M+",
    highlights: [
      "San Antonio's first historic district — Victorian mansions built by 19th-century German merchants",
      "Walking distance to the Pearl Brewery district, San Antonio River Walk, and world-class dining",
      "Active arts community and neighborhood association with a strong sense of identity and culture",
    ],
    architecturalStyle: "Victorian, Italianate, Queen Anne, and beautifully restored historics",
    bestFor: "Urban professionals, architecture lovers, and buyers who want cultural richness",
  },
];

export default function NeighborhoodsPage() {
  return (
    <>
      <PageHero
        title="San Antonio's Premier Luxury Neighborhoods"
        subtitle="Before you search, know where to look. A curated guide to the communities that define luxury living in San Antonio."
      />

      <section className="bg-obsidian py-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-8">
            {neighborhoods.map((n) => (
              <NeighborhoodCard key={n.name} {...n} />
            ))}
          </div>

          <SectionDivider className="my-20" />

          <div className="text-center">
            <p className="font-display text-2xl font-light text-ivory italic mb-6">
              Not sure which neighborhood is right for you?
            </p>
            <p className="font-body text-taupe text-sm leading-relaxed max-w-xl mx-auto mb-8">
              The right neighborhood depends on your lifestyle, your priorities, and how you plan
              to live. Juli can walk you through each community in detail and help you identify
              the one that truly fits.
            </p>
            <Button href="/contact" variant="primary">
              Talk to Juli About Neighborhoods
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
