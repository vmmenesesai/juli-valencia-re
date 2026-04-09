"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

interface FormData {
  name: string;
  email: string;
  phone: string;
  intent: string;
  budget: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  intent: "",
  budget: "",
  message: "",
};

export default function ContactForm({ neighborhood }: { neighborhood?: string }) {
  const [form, setForm] = useState<FormData>({
    ...initialForm,
    message: neighborhood ? `I'm interested in learning more about ${neighborhood}.` : "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setForm(initialForm);
      } else {
        throw new Error(data.error || "Something went wrong");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Please try again.");
    }
  };

  const inputClass =
    "w-full bg-transparent border border-gold/30 text-ivory font-body text-sm px-4 py-3 focus:outline-none focus:border-gold placeholder:text-taupe/60 transition-colors duration-300";
  const labelClass = "block font-body text-xs tracking-[0.15em] uppercase text-gold mb-2";

  if (status === "success") {
    return (
      <div className="text-center py-16">
        <p className="font-display text-3xl font-light text-ivory mb-4">Thank You</p>
        <p className="font-body text-taupe text-base leading-relaxed mb-8 max-w-md mx-auto">
          Your consultation request has been received. Juli will respond within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="font-body text-xs tracking-[0.15em] uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors duration-300"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={inputClass}
          />
        </div>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone <span className="text-taupe normal-case tracking-normal">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="+1 (210) 000-0000"
          className={inputClass}
        />
      </div>

      {/* Intent + Budget */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="intent" className={labelClass}>
            What are you looking for? *
          </label>
          <select
            id="intent"
            name="intent"
            required
            value={form.intent}
            onChange={handleChange}
            className={`${inputClass} cursor-pointer`}
          >
            <option value="" disabled className="bg-obsidian">
              Select one
            </option>
            <option value="buying" className="bg-obsidian">
              Buying a luxury home
            </option>
            <option value="general" className="bg-obsidian">
              General inquiry
            </option>
            <option value="exploring" className="bg-obsidian">
              Just exploring
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="budget" className={labelClass}>
            Budget Range *
          </label>
          <select
            id="budget"
            name="budget"
            required
            value={form.budget}
            onChange={handleChange}
            className={`${inputClass} cursor-pointer`}
          >
            <option value="" disabled className="bg-obsidian">
              Select range
            </option>
            <option value="800k-1.2m" className="bg-obsidian">
              $800K – $1.2M
            </option>
            <option value="1.2m-2m" className="bg-obsidian">
              $1.2M – $2M
            </option>
            <option value="2m+" className="bg-obsidian">
              $2M+
            </option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell Juli what you're looking for, your timeline, or any questions you have."
          className={inputClass}
        />
      </div>

      {/* Error */}
      {status === "error" && (
        <p className="font-body text-sm text-red-400">{errorMsg}</p>
      )}

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        disabled={status === "loading"}
        className="w-full md:w-auto"
      >
        {status === "loading" ? "Sending..." : "Request a Consultation"}
      </Button>
    </form>
  );
}
