import About from '@/components/About'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Kulmi Digital Agency',
  description: 'Learn about Kulmi Digital Agency, our team, and how we can help your business grow.',
}

const page = () => {
  return (
    <div> <About/> </div>
  )
}

export default page