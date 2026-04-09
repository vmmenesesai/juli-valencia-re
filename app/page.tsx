import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import IntroStrip from "@/components/home/IntroStrip";
import TeaserCards from "@/components/home/TeaserCards";

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
    </>
  );
}
