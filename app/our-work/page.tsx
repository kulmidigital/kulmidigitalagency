import OurWork from '@/components/OurWork'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Work - Kulmi Digital Agency',
  description: 'See our latest projects and learn how we can help your business grow.',
}

const page = () => {
  return (
    <div>
      <OurWork />
    </div>
  )
}

export default page