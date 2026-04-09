"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/neighborhoods", label: "Neighborhoods" },
  { href: "/how-to-choose", label: "How to Choose" },
  { href: "/luxury-features", label: "Luxury Features" },
  { href: "/working-with-realtor", label: "Why a Specialist" },
  { href: "/about", label: "About Juli" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ivory/95 backdrop-blur-sm border-b border-champagne/15">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-18 flex items-center justify-between" style={{ height: "72px" }}>
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl font-light tracking-widest text-charcoal hover:text-champagne transition-colors duration-300 uppercase"
        >
          Juli Valencia
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body text-xs tracking-[0.12em] uppercase transition-colors duration-300 ${
                pathname === link.href
                  ? "text-champagne"
                  : "text-stone hover:text-charcoal"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 px-5 py-2 border border-champagne text-champagne text-xs tracking-[0.12em] uppercase font-body hover:bg-champagne hover:text-warm-white transition-all duration-300"
          >
            Schedule a Consultation
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-charcoal p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-px bg-charcoal transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-px bg-charcoal transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-charcoal transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-warm-white border-t border-champagne/15 py-6 px-6">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-body text-sm tracking-[0.12em] uppercase transition-colors duration-300 ${
                  pathname === link.href ? "text-champagne" : "text-stone"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-5 py-3 border border-champagne text-champagne text-xs tracking-[0.12em] uppercase text-center font-body hover:bg-champagne hover:text-warm-white transition-all duration-300"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
