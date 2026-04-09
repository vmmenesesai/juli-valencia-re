"use client";

import { useSearchParams } from "next/navigation";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactFormWrapper() {
  const params = useSearchParams();
  const neighborhood = params.get("neighborhood") ?? undefined;
  return <ContactForm neighborhood={neighborhood} />;
}
