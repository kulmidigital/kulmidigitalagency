import React from 'react'
import { getPostData, getAllPostIds } from '@/lib/posts'
import BlogPost from '@/components/BlogPost'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path) => ({
    id: path.params.id,
  }));
}

async function BlogPostPage({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);
  
  if (!postData) {
    notFound(); 
  }

  return (
    <div>
      <BlogPost postData={postData} />
    </div>
  )
}

export default BlogPostPage
