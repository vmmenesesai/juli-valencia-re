import Link from "next/link";
import Badge from "@/components/ui/Badge";

interface NeighborhoodCardProps {
  name: string;
  tagline: string;
  priceRange: string;
  highlights: string[];
  architecturalStyle: string;
  bestFor: string;
}

export default function NeighborhoodCard({
  name,
  tagline,
  priceRange,
  highlights,
  architecturalStyle,
  bestFor,
}: NeighborhoodCardProps) {
  return (
    <div className="group bg-obsidian border border-gold/20 hover:border-gold/60 transition-all duration-500 p-8 md:p-10">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-light text-ivory mb-2 group-hover:text-gold transition-colors duration-300">
            {name}
          </h2>
          <p className="font-body text-taupe text-sm italic">{tagline}</p>
        </div>
        <Badge>{priceRange}</Badge>
      </div>

      <div className="gold-divider mb-6" />

      <ul className="mb-6 space-y-2">
        {highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-gold mt-1 text-xs">◆</span>
            <span className="font-body text-ivory text-sm leading-relaxed">{h}</span>
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div>
          <p className="font-body text-gold text-xs tracking-[0.15em] uppercase mb-1">
            Architectural Style
          </p>
          <p className="font-body text-taupe text-sm">{architecturalStyle}</p>
        </div>
        <div>
          <p className="font-body text-gold text-xs tracking-[0.15em] uppercase mb-1">
            Best For
          </p>
          <p className="font-body text-taupe text-sm">{bestFor}</p>
        </div>
      </div>

      <Link
        href={`/contact?neighborhood=${encodeURIComponent(name)}`}
        className="inline-block font-body text-xs tracking-[0.14em] uppercase px-6 py-3 border border-gold text-gold hover:bg-gold hover:text-obsidian transition-all duration-300"
      >
        Talk to Juli about {name} →
      </Link>
    </div>
  );
}
