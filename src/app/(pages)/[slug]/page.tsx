import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ContentPage } from '@/components/ContentPage'
import { getPageContent } from '@/config/page-content'
import { faqSchema, webPageSchema } from '@/lib/schema'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const { getAllPageSlugs } = await import('@/config/page-content')
  return getAllPageSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const content = getPageContent(slug)
  if (!content) return {}

  return {
    title: `${content.title} | California Progressive Design-Build`,
    description: content.description,
  }
}

export default async function DynamicContentPage({ params }: PageProps) {
  const { slug } = await params
  const content = getPageContent(slug)
  if (!content) notFound()

  const path = `/${slug}`
  const pageSchema = webPageSchema(content.title, content.description, path)
  const faqJson = content.faqs ? faqSchema(content.faqs) : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      {faqJson && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }} />
      )}
      <ContentPage content={content} />
    </>
  )
}
