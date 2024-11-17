import React from 'react'
import BlogPost from '@/components/BlogPost'
import { notFound } from 'next/navigation'

export default function BlogPostPage({ params }: { params: { id: string } }) {
  return <BlogPost id={params.id} />
}
