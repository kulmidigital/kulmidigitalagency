import React from 'react'
import Bananapay from '@/components/casestudies/Bananapay'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bananapay - Kulmi Digital Agency',
  description: 'Learn about Bananapay, our team, and how we can help your business grow.',
}

const BananapayPage = () => {
  return (
      <div>
          <Bananapay />
    </div>
  )
}

export default BananapayPage