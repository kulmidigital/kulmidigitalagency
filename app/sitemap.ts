import { MetadataRoute } from 'next'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { slugify } from '@/lib/utils'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://kulmi.digital'

  // Add static routes
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/website-packages`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/our-work`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/estatebax`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ] as MetadataRoute.Sitemap;

  // Fetch blog posts
  try {
    const postsRef = collection(db, 'posts')
    const querySnapshot = await getDocs(postsRef)
    
    const blogRoutes = querySnapshot.docs.map(doc => {
      const data = doc.data()
      return {
        url: `${baseUrl}/blog/${slugify(data.title)}`,
        lastModified: new Date(data.date),
        changeFrequency: 'monthly' as const,
        priority: 0.6
      }
    })

    return [...staticRoutes, ...blogRoutes]
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
    return staticRoutes
  }
} 