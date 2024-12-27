import Contact from '@/components/Contact'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Kulmi Digital Agency',
  description: 'Get in touch with Kulmi Digital Agency, and learn how we can help your business grow.',
}

const page = () => {
  return (
    <div>
      <Contact />
    </div>
  )
}

export default page