const tickerItems = [
  "Luxury Residential",
  "San Antonio TX",
  "Emirates Airlines Alumni",
  "Marriott International",
  "New York Real Estate",
  "Bilingual EN / ES",
  "22+ Years Experience",
  "House Flipping Expert",
];

const stats = [
  { value: "22+", label: "Years of Experience" },
  { value: "$2M", label: "Luxury Threshold" },
  { value: "EN/ES", label: "Bilingual Service" },
  { value: "3", label: "Industries Combined" },
];

export default function IntroStrip() {
  const tickerContent = tickerItems.join(" \u2726 ");

  return (
    <>
      {/* Scrolling ticker */}
      <div className="border-y border-gray-light overflow-hidden py-4 md:py-5">
        <div className="animate-marquee flex whitespace-nowrap">
          {/* Duplicate for seamless loop */}
          {[0, 1].map((i) => (
            <span key={i} className="font-ui text-xs md:text-sm tracking-[0.15em] uppercase text-gray mx-0 shrink-0">
              {tickerContent} &ensp;✦&ensp; {tickerContent} &ensp;✦&ensp;
            </span>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <section className="bg-white py-16 md:py-20 px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="font-display text-4xl md:text-5xl lg:text-6xl font-bold italic text-forest leading-none">
                  {stat.value}
                </p>
                <p className="font-ui text-[10px] md:text-xs tracking-[0.2em] uppercase text-gray mt-3">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
