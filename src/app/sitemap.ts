import type { MetadataRoute } from "next";

import { routes, site } from "@/content/site";

/**
 * Generated from `routes` so a new page is listed the moment it is routed —
 * there is no second list to remember to update.
 *
 * `priority` and `changeFrequency` are hints Google largely ignores; they are
 * here to express intent for the crawlers that do read them.
 */
const WEIGHTS: Record<string, { priority: number; changeFrequency: "monthly" | "yearly" }> = {
  [routes.home]: { priority: 1, changeFrequency: "monthly" },
  [routes.how]: { priority: 0.9, changeFrequency: "monthly" },
  [routes.who]: { priority: 0.9, changeFrequency: "monthly" },
  [routes.contact]: { priority: 0.8, changeFrequency: "yearly" },
  [routes.about]: { priority: 0.7, changeFrequency: "yearly" },
  [routes.testimonials]: { priority: 0.6, changeFrequency: "monthly" },
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return Object.values(routes).map((path) => ({
    url: new URL(path, site.meta.url).toString(),
    lastModified,
    ...(WEIGHTS[path] ?? { priority: 0.5, changeFrequency: "monthly" as const }),
  }));
}
