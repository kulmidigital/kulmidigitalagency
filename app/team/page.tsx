import Team from '@/components/Team';
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team - Kulmi Digital Agency',
  description: 'Meet the team at Kulmi Digital Agency and learn how we can help your business grow.',
}

const TeamPage = () => {
  return (
    <div>
      <Team />
    </div>
  )
}

export default TeamPage;
