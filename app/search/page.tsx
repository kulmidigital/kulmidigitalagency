'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'

interface SearchResult {
  type: 'blog' | 'service' | 'page'
  title: string
  url: string
  description?: string
  excerpt?: string
  date?: string
}

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function performSearch() {
      if (!query) return

      setLoading(true)
      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
        const data = await response.json()
        setResults(data.results)
      } catch (error) {
        console.error('Search failed:', error)
      } finally {
        setLoading(false)
      }
    }

    performSearch()
  }, [query])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Search Results for: {query}
      </h1>

      {loading ? (
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      ) : results.length > 0 ? (
        <div className="space-y-6">
          {results.map((result, index) => (
            <div key={index} className="border-b pb-4">
              <Link href={result.url} className="group">
                <h2 className="text-xl font-semibold group-hover:text-blue-600">
                  {result.title}
                </h2>
                <p className="text-sm text-gray-500 mb-2">
                  {result.type.charAt(0).toUpperCase() + result.type.slice(1)}
                  {result.date && ` • ${new Date(result.date).toLocaleDateString()}`}
                </p>
                <p className="text-gray-600">
                  {result.description || result.excerpt}
                </p>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">
          No results found for "{query}"
        </p>
      )}
    </div>
  )
} 