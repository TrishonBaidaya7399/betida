import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/`,
      lastModified: new Date("2025-09-21"),
      changeFrequency: "daily",
      priority: 1,
      alternates: {
        languages: {
          tr: "/tr", 
          en: "/en",
        },
      },
    },
    {
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/login`,
      lastModified: new Date("2025-09-21"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/register`,
      lastModified: new Date("2025-09-21"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/games`,
      lastModified: new Date("2025-09-21"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/slots`,
      lastModified: new Date("2025-09-21"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/table-games`,
      lastModified: new Date("2025-09-21"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/live-casino`,
      lastModified: new Date("2025-09-21"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/sports-betting`,
      lastModified: new Date("2025-09-21"),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/promotions`,
      lastModified: new Date("2025-09-21"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/about`,
      lastModified: new Date("2025-09-21"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/contact`,
      lastModified: new Date("2025-09-21"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/terms`,
      lastModified: new Date("2025-09-21"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/privacy`,
      lastModified: new Date("2025-09-21"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/responsible-gaming`,
      lastModified: new Date("2025-09-21"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
