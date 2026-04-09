import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-obsidian">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl md:text-3xl font-bold italic text-white mb-4">
              Juli Valencia
            </p>
            <p className="font-body text-white/50 text-sm font-light leading-relaxed">
              Luxury Residential Realtor<br />
              San Antonio, TX
            </p>
            <p className="font-body text-white/40 text-xs font-light mt-4 tracking-wide">
              @julivalenciare
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-ui text-[10px] tracking-[0.2em] uppercase text-gold mb-6">
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
                  className="font-body text-sm text-white/50 hover:text-white transition-colors duration-300 font-light"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CTA */}
          <div>
            <p className="font-ui text-[10px] tracking-[0.2em] uppercase text-gold mb-6">
              Ready to Begin?
            </p>
            <p className="font-body text-white/50 text-sm font-light leading-relaxed mb-8">
              Buying a luxury home in San Antonio starts with the right
              conversation.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 rounded-full bg-forest text-white font-ui text-xs tracking-[0.12em] uppercase hover:bg-forest-light transition-colors duration-300 min-h-[44px] leading-[44px]"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-white/30 text-xs font-light">
            © {new Date().getFullYear()} Juli Valencia. All rights reserved.
          </p>
          <p className="font-body text-white/30 text-xs font-light">
            Luxury Real Estate · San Antonio, TX
          </p>
        </div>
      </div>
    </footer>
  );
}
