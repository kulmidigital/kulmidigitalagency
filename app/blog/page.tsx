import React from 'react'
import Blog from '@/components/Blog'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Kulmi Digital Agency',
  description: 'Read our latest blog posts and stay updated on the latest trends in digital marketing.',
}

export default function BlogPage() {
  return <Blog />
}