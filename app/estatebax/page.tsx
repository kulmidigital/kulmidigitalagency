import React from 'react'
import Estatebax from '@/components/estatebax/Estatebax'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Estatebax - Kulmi Digital Agency',
  description: 'Learn about Estatebax, our team, and how we can help your business grow.',
}
  

const EstatebaxPage = () => {
  return (
    <Estatebax />
  )
}

export default EstatebaxPage