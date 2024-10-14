import React from 'react'
import { getSortedPostsData } from '@/lib/posts'
import Blog from '@/components/Blog'

async function BlogPage() {
  const allPostsData = getSortedPostsData();
  return (
    <div>
      <Blog allPostsData={allPostsData} />
    </div>
  )
}

export default BlogPage
