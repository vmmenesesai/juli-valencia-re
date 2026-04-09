import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionDivider from "@/components/ui/SectionDivider";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Luxury Home Features to Look For in San Antonio | Juli Valencia",
  description:
    "What separates a true luxury home from a merely expensive one? Architecture, finishes, outdoor living, technology, and location — a detailed guide by Juli Valencia.",
  openGraph: {
    title: "What to Look for in a San Antonio Luxury Home | Juli Valencia",
    description:
      "Learn what separates a true luxury home from a merely expensive one. Expert guidance from Juli Valencia.",
  },
};

const sections = [
  {
    id: "architecture",
    label: "01",
    title: "Architecture & Structure",
    intro:
      "The bones of a home matter more than any finish. A stunning kitchen cannot compensate for poor foundation work or a roof approaching end of life — especially in Texas.",
    items: [
      {
        heading: "Custom vs. Production",
        detail:
          "Custom-designed homes are built to specification, not to a floor plan template. Look for architect involvement, unique spatial decisions, and site-specific orientation. Production builders — even at premium price points — repeat the same layouts with different facades.",
      },
      {
        heading: "Materials Quality",
        detail:
          "Stone, hardwood, and steel are hallmarks of true luxury construction. Engineered substitutes — luxury vinyl plank, fiber cement, manufactured stone veneer — can look similar but behave differently over time. Ask for material specs and warranties.",
      },
      {
        heading: "Roof Age & Type",
        detail:
          "Texas heat accelerates roof aging. In the luxury segment, expect slate, clay tile, or standing-seam metal — not three-tab asphalt shingles. Always get the installation date and last inspection report before making an offer.",
      },
      {
        heading: "Foundation",
        detail:
          "San Antonio's expansive clay soils make foundation monitoring essential. In Hill Country areas, pier-and-beam construction over caliche and limestone is common. Slab-on-grade is standard in urban neighborhoods. Look for recent soil reports and any history of movement.",
      },
    ],
  },
  {
    id: "interiors",
    label: "02",
    title: "Interior Finishes",
    intro:
      "Interior finishes are where the luxury experience lives day-to-day. The difference between premium and exceptional is often in the details most buyers don't notice until they've lived there.",
    items: [
      {
        heading: "Kitchen Appliances",
        detail:
          "Sub-Zero refrigeration, Wolf ranges, and Thermador ovens are the standard of the luxury kitchen. Builder-grade stainless steel — regardless of brand — is not. Look for commercial-style ventilation, panel-ready refrigerators, and steam ovens as markers of a serious kitchen.",
      },
      {
        heading: "Flooring",
        detail:
          "Solid hardwood, large-format marble tile, or hand-set natural stone throughout — not just in public spaces. Consistency of material quality from foyer to master suite indicates a home built to a standard, not to a budget.",
      },
      {
        heading: "Cabinetry",
        detail:
          "Custom millwork with dovetail joinery, soft-close hardware, and full-overlay doors is the mark of a true luxury kitchen and bath. Semi-custom and stock cabinetry — even when painted white and fitted with new hardware — will show wear differently over time.",
      },
      {
        heading: "Ceiling Height & Detail",
        detail:
          "Ceiling height changes how a space feels. 10' is the minimum in the luxury tier; 12'–14' is more common in custom builds. Look for coffered ceilings, plaster medallions, or architectural beams — details that require craft and time to execute.",
      },
    ],
  },
  {
    id: "outdoor",
    label: "03",
    title: "Outdoor Living",
    intro:
      "San Antonio's climate — 300+ days of sun annually — means outdoor living isn't a luxury add-on. It's a core part of the home. Evaluate it with the same rigor as interior spaces.",
    items: [
      {
        heading: "Pool Quality",
        detail:
          "Gunite (concrete) pools are the luxury standard — durable, fully customizable, and better suited to Texas heat than fiberglass alternatives. Look for water features, sun shelves, automation systems, and gas heating. A pool should complement the architecture, not contradict it.",
      },
      {
        heading: "Outdoor Kitchen & Entertaining",
        detail:
          "Covered outdoor living with a full kitchen setup — built-in grill, outdoor refrigeration, sink, and seating — is expected in the $1M+ segment. Evaluate the quality of the roof system (wood-frame vs. insulated patio cover) and the ceiling fans, lighting, and AV integration.",
      },
      {
        heading: "Landscaping",
        detail:
          "Mature trees cannot be rushed — they represent decades of growth and significantly impact property value. Evaluate the irrigation system (automated zoning), turf quality (bermuda or zoysia for San Antonio's climate), and the overall relationship between landscape and structure.",
      },
      {
        heading: "Privacy & Lot Orientation",
        detail:
          "Lot orientation affects energy efficiency, privacy, and livability. A west-facing primary suite will receive brutal afternoon sun. A pool with southern exposure will be swimmable year-round. Evaluate sight lines from neighbor windows and street visibility.",
      },
    ],
  },
  {
    id: "technology",
    label: "04",
    title: "Technology & Systems",
    intro:
      "Modern luxury homes integrate technology at the infrastructure level — not as add-ons. The quality and age of a home's systems directly affect operating costs and comfort.",
    items: [
      {
        heading: "Smart Home Integration",
        detail:
          "Lutron lighting control, Savant or Control4 automation, and structured wiring for AV distribution are hallmarks of a well-integrated smart home. Be wary of homes with multiple disconnected smart devices — true integration means centralized control of lighting, shades, security, and climate.",
      },
      {
        heading: "Generator Backup",
        detail:
          "Post-Winter Storm Uri, whole-home generator backup has become increasingly standard in San Antonio luxury. Look for Generac or Kohler whole-home standby generators with automatic transfer switches and adequate capacity for HVAC loads.",
      },
      {
        heading: "Security Systems",
        detail:
          "In the luxury tier, expect camera coverage of all entry points with cloud or local storage, gated entry with video intercom, and monitoring integration. For gated community homes, understand the community security protocol in addition to the home's individual system.",
      },
      {
        heading: "HVAC Systems",
        detail:
          "Zoned HVAC is essential in large square footage homes — a single zone cannot efficiently condition 5,000+ square feet. Look for multi-zone systems with separate air handlers, high-efficiency ratings (SEER 18+), and recent installation dates. Texas heat is relentless on HVAC equipment.",
      },
    ],
  },
  {
    id: "location",
    label: "05",
    title: "Location Factors",
    intro:
      "The home itself is only part of the equation. In luxury real estate, location variables — school districts, HOA quality, flood status — can have outsized impact on long-term value and daily quality of life.",
    items: [
      {
        heading: "School District Ratings",
        detail:
          "Alamo Heights ISD, Northside ISD, and North East ISD are consistently among the strongest districts in the San Antonio area. Even for buyers without school-age children, school district quality has a measurable effect on resale value and neighborhood stability.",
      },
      {
        heading: "HOA Quality & Fees",
        detail:
          "In gated communities especially, HOA governance directly impacts your property. Review the financials, reserve fund health, and any pending assessments. A well-run HOA protects your investment; a poorly managed one can create unexpected costs and community disputes.",
      },
      {
        heading: "Flood Zone Status",
        detail:
          "Always check FEMA flood zone designations before making an offer. San Antonio has experienced significant flash flooding events, and certain areas — particularly near the Olmos Basin and low-lying creek corridors — carry measurable flood risk. Flood insurance can add substantially to annual carrying costs.",
      },
      {
        heading: "Future Development",
        detail:
          "Research planned development in surrounding areas. A secluded estate can lose its privacy to a new commercial corridor or high-density residential project. Check with the city's development office, review zoning maps, and ask your agent about known development plans in the vicinity.",
      },
    ],
  },
];

export default function LuxuryFeaturesPage() {
  return (
    <>
      <PageHero
        title="What to Look for in a San Antonio Luxury Home"
        subtitle="The difference between expensive and exceptional is in the details. A category-by-category guide to evaluating true luxury."
      />

      <section className="bg-obsidian py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section nav (desktop sticky-style) */}
          <nav className="hidden md:flex gap-6 mb-16 border-b border-gold/20 pb-6">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="font-body text-xs tracking-[0.12em] uppercase text-taupe hover:text-gold transition-colors duration-300"
              >
                {s.title}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-24">
            {sections.map((section, i) => (
              <div key={section.id} id={section.id}>
                <div className="flex items-start gap-4 mb-6">
                  <span className="font-display text-4xl font-light text-gold/30 leading-none pt-1">
                    {section.label}
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-light text-ivory">
                    {section.title}
                  </h2>
                </div>

                <p className="font-body text-taupe text-base leading-relaxed mb-10 pl-12">
                  {section.intro}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-0 md:pl-12">
                  {section.items.map((item) => (
                    <div
                      key={item.heading}
                      className="border border-gold/20 p-6 hover:border-gold/40 transition-colors duration-300"
                    >
                      <p className="font-body text-gold text-xs tracking-[0.15em] uppercase mb-3">
                        {item.heading}
                      </p>
                      <p className="font-body text-ivory text-sm leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>

                {i < sections.length - 1 && <SectionDivider className="mt-16" />}
              </div>
            ))}
          </div>

          <SectionDivider className="my-20" />

          <div className="text-center">
            <p className="font-display text-2xl font-light text-ivory italic mb-4">
              Not sure what to prioritize?
            </p>
            <p className="font-body text-taupe text-sm leading-relaxed max-w-xl mx-auto mb-8">
              Juli&apos;s background in construction, design, and luxury living means she can
              walk through a home and immediately identify what&apos;s exceptional — and what&apos;s
              overpriced. Schedule a call to talk through what matters most to you.
            </p>
            <Button href="/contact" variant="primary">
              Schedule a Call with Juli
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
