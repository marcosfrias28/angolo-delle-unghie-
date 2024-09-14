import { MetadataRoute } from 'next'
import config from "@/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/dashboard/',
    },
    sitemap: config.baseUrl + '/sitemap.xml',
  }
}