import type { MetadataRoute } from "next";
import { programmes } from "@/lib/content";

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

const updated = "2026-11-07";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: updated, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: updated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/programs`, lastModified: updated, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/donate`, lastModified: updated, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/get-involved`, lastModified: updated, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: updated, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/legal/privacy`, lastModified: updated, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/legal/terms`, lastModified: updated, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/legal/refund`, lastModified: updated, changeFrequency: "yearly", priority: 0.3 },
  ];

  const programmeRoutes: MetadataRoute.Sitemap = programmes.map((programme) => ({
    url: `${baseUrl}/programs/${programme.slug}`,
    lastModified: updated,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...programmeRoutes];
}
