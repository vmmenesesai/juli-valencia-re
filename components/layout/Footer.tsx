import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-champagne/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl font-light tracking-widest text-ivory-light uppercase mb-4">
              Juli Valencia
            </p>
            <p className="font-body text-ivory-light/60 text-sm leading-relaxed">
              Luxury Residential Realtor<br />
              San Antonio, TX
            </p>
            <p className="font-body text-ivory-light/50 text-xs mt-4 tracking-wide">
              @julivalenciare
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-body text-xs tracking-[0.15em] uppercase text-champagne-light mb-5">
              Explore
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/neighborhoods", label: "Neighborhoods Guide" },
                { href: "/how-to-choose", label: "How to Choose" },
                { href: "/luxury-features", label: "Luxury Features" },
                { href: "/working-with-realtor", label: "Why a Specialist" },
                { href: "/about", label: "About Juli" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-ivory-light/60 hover:text-ivory-light transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CTA */}
          <div>
            <p className="font-body text-xs tracking-[0.15em] uppercase text-champagne-light mb-5">
              Ready to Begin?
            </p>
            <p className="font-body text-ivory-light/60 text-sm leading-relaxed mb-6">
              Buying a luxury home in San Antonio starts with the right conversation.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-champagne text-charcoal font-body text-xs tracking-[0.12em] uppercase hover:bg-champagne-light transition-colors duration-300"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>

        <div className="gold-divider my-12" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-ivory-light/40 text-xs">
            © {new Date().getFullYear()} Juli Valencia. All rights reserved.
          </p>
          <p className="font-body text-ivory-light/40 text-xs">
            Luxury Real Estate · San Antonio, TX
          </p>
        </div>
      </div>
    </footer>
  );
}
