import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pu-vault.vercel.app";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${baseUrl}/placement-materials`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${baseUrl}/software-links`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${baseUrl}/assignments`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${baseUrl}/nptel-assignment-answers`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${baseUrl}/attendance-calculator`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${baseUrl}/settings`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${baseUrl}/code`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${baseUrl}/flash-cards`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${baseUrl}/mcqs`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${baseUrl}/message-generator`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${baseUrl}/professors`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${baseUrl}/interview`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
      priority: 0.7,
    },
  ];
}
