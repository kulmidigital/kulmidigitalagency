import Web from '@/components/webdevelopment/Web'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Development - Kulmi Digital Agency',
  description: 'Get your website built by the best web development agency in the world.',
}

const WebDevelopment = () => {
  return <Web />
}

export default WebDevelopment
