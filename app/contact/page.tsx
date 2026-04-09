import type { Metadata } from "next";
import { Suspense } from "react";
import SectionDivider from "@/components/ui/SectionDivider";
import ContactFormWrapper from "./ContactFormWrapper";

export const metadata: Metadata = {
  title: "Schedule a Consultation | Juli Valencia Luxury Real Estate",
  description:
    "Ready to explore San Antonio's luxury market? Schedule a consultation with Juli Valencia. Response within 24 hours.",
  openGraph: {
    title: "Schedule a Consultation | Juli Valencia",
    description:
      "Start your luxury home search in San Antonio with a private consultation. Juli responds within 24 hours.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-midnight pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-body text-gold text-xs tracking-[0.25em] uppercase mb-6">
            Get in Touch
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-ivory mb-6">
            Schedule a Consultation
          </h1>
          <p className="font-body text-taupe text-base leading-relaxed max-w-2xl mx-auto">
            Every luxury home purchase begins with the right conversation. Tell Juli what
            you&apos;re looking for and she&apos;ll respond personally within 24 hours.
          </p>
        </div>
      </section>

      <section className="bg-obsidian py-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <Suspense fallback={<div className="text-taupe text-sm">Loading form...</div>}>
                <ContactFormWrapper />
              </Suspense>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <SectionDivider className="lg:hidden mb-12" />

              <div className="space-y-10">
                <div>
                  <p className="font-body text-gold text-xs tracking-[0.2em] uppercase mb-4">
                    Response Time
                  </p>
                  <p className="font-body text-ivory text-sm leading-relaxed">
                    Juli responds to every inquiry personally within 24 hours.
                  </p>
                </div>

                <div className="gold-divider" />

                <div>
                  <p className="font-body text-gold text-xs tracking-[0.2em] uppercase mb-4">
                    Instagram
                  </p>
                  <p className="font-body text-ivory text-sm">@julivalenciare</p>
                </div>

                <div className="gold-divider" />

                <div>
                  <p className="font-body text-gold text-xs tracking-[0.2em] uppercase mb-4">
                    What to Expect
                  </p>
                  <ul className="space-y-3">
                    {[
                      "A private, no-pressure conversation",
                      "Honest market insight for your budget",
                      "Neighborhood recommendations tailored to your lifestyle",
                      "A clear next step — whatever that looks like for you",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-gold text-xs mt-0.5">◆</span>
                        <span className="font-body text-taupe text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
