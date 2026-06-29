import { siteConfig } from '@/config/site'

export function organizationSchema() {
  const office = siteConfig.offices[0]
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    name: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    foundingDate: String(siteConfig.founded),
    address: {
      '@type': 'PostalAddress',
      streetAddress: office.street,
      addressLocality: office.city,
      addressRegion: office.state,
      postalCode: office.zip,
      addressCountry: 'US',
    },
    areaServed: { '@type': 'State', name: 'California' },
    sameAs: [siteConfig.social.linkedin, siteConfig.social.griffin],
  }
}

export function webPageSchema(title: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: `${siteConfig.url}${path}`,
    isPartOf: { '@type': 'WebSite', name: siteConfig.name, url: siteConfig.url },
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}
