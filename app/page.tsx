import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import IntroStrip from "@/components/home/IntroStrip";
import TeaserCards from "@/components/home/TeaserCards";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Juli Valencia | Luxury Real Estate San Antonio",
  description:
    "Your guide to luxury living in San Antonio. Expert insight from a global luxury professional with 22+ years of experience. Schedule a consultation today.",
  openGraph: {
    title: "Juli Valencia | Luxury Real Estate San Antonio",
    description:
      "Your guide to luxury living in San Antonio. Expert insight from a global luxury professional with 22+ years of experience.",
    url: "https://julivalencia.com",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroStrip />
      <TeaserCards />

      {/* Final CTA Banner */}
      <section className="bg-ivory py-24 px-6 lg:px-8 text-center">
        <p className="font-body text-champagne text-xs tracking-[0.25em] uppercase mb-6">
          Ready When You Are
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal mb-6 max-w-2xl mx-auto">
          Let&apos;s Find Your Luxury Home in San Antonio
        </h2>
        <p className="font-body text-stone text-base leading-relaxed max-w-xl mx-auto mb-10">
          Every luxury purchase begins with a conversation. Tell Juli what you&apos;re
          looking for and she&apos;ll guide you from research to keys in hand.
        </p>
        <Button href="/contact" variant="primary">
          Schedule a Consultation
        </Button>
      </section>
    </>
  );
}
