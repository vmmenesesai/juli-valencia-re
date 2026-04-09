import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://julivalencia.com";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/neighborhoods`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/how-to-choose`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/luxury-features`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/working-with-realtor`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.9 },
  ];
}
