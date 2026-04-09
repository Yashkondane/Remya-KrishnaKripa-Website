import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://remyakrishnakripa.com"

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/akashic-record-reading",
    "/blog",
    "/career-accelerator",
    "/confident-communication",
    "/contact",
    "/inner-child-healing",
    "/journal",
    "/my-book",
    "/past-life-regression",
    "/services",
    "/stress-anxiety",
    "/video-testimonials",
  ]

  const staticSitemaps = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  // Blog post slugs (matching app/blog/[slug]/page.tsx)
  const blogSlugs = [
    "what-are-akashic-records",
    "akashic-reading-changed-my-life",
    "signs-ready-for-akashic-reading",
    "past-life-memories-vs-imagination",
  ]

  const blogSitemaps = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...staticSitemaps, ...blogSitemaps]
}
