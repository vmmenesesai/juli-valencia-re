"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/neighborhoods", label: "Neighborhoods" },
  { href: "/how-to-choose", label: "How to Choose" },
  { href: "/luxury-features", label: "Luxury Features" },
  { href: "/working-with-realtor", label: "Why a Specialist" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between" style={{ height: "72px" }}>
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl md:text-2xl font-bold italic text-black hover:text-forest transition-colors duration-300"
        >
          Juli Valencia
        </Link>

        {/* Desktop nav — lg only */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-ui text-[11px] tracking-[0.15em] uppercase transition-colors duration-300 ${
                pathname === link.href
                  ? "text-forest"
                  : "text-gray hover:text-black"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 px-6 py-2.5 rounded-full bg-forest text-white font-ui text-[11px] tracking-[0.12em] uppercase hover:bg-forest-light transition-colors duration-300"
          >
            Contact Juli
          </Link>
        </div>

        {/* Hamburger — mobile + tablet */}
        <button
          className="lg:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-px bg-black transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-px bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile + tablet menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-light py-8 px-6 md:px-10">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-ui text-sm tracking-[0.12em] uppercase transition-colors duration-300 min-h-[44px] flex items-center ${
                  pathname === link.href ? "text-forest" : "text-gray hover:text-black"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-6 py-3 rounded-full bg-forest text-white font-ui text-sm tracking-[0.12em] uppercase text-center hover:bg-forest-light transition-colors duration-300 min-h-[44px] flex items-center justify-center"
            >
              Contact Juli
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
