import type { Metadata } from 'next'
import { ContactForm } from '@/components/ContactForm'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Schedule a California Progressive Design-Build consultation with ${siteConfig.name}.`,
}

export default function ContactPage() {
  return <ContactForm />
}
