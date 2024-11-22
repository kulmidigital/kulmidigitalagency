import { MetadataRoute } from 'next'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { slugify } from '@/lib/utils'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://kulmi.digital'
  
  // Get current date in ISO format
  const currentDate = new Date().toISOString()

  // Add static routes
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/website-packages`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/our-work`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/estatebax`,
      lastModified: currentDate,
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
      // Ensure we have a valid date
      let lastMod: string
      try {
        // Try to parse the date from the post
        lastMod = new Date(data.date).toISOString()
      } catch (e) {
        // Fallback to current date if parsing fails
        lastMod = currentDate
      }

      return {
        url: `${baseUrl}/blog/${slugify(data.title)}`,
        lastModified: lastMod,
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