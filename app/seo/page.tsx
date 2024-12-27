import Seo from '@/components/seo/Seo'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO - Kulmi Digital Agency',
  description: 'See our latest SEO projects and learn how we can help your business grow.',
}

const SeoPage = () => {
  return <Seo />
}

export default SeoPage 