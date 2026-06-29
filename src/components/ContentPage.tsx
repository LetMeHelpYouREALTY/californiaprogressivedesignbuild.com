import Link from 'next/link'
import type { PageContent } from '@/config/page-content'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { PageSections } from '@/components/sections/PageSections'
import { CTABand, FAQAccordion } from '@/components/sections/HomeSections'

type ContentPageProps = {
  content: PageContent
  breadcrumb?: { label: string; href?: string }[]
}

export function ContentPage({ content, breadcrumb = [] }: ContentPageProps) {
  return (
    <>
      <Breadcrumb items={[...breadcrumb, { label: content.h1 }]} />
      <article className="container-page pb-16">
        <header className="mb-10 max-w-3xl">
          <h1 className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">{content.h1}</h1>
          {content.subtitle && <p className="mt-4 text-lg leading-8 text-slate-600">{content.subtitle}</p>}
        </header>
        <div className="max-w-4xl">
          <PageSections sections={content.sections} />
          {content.faqs && content.faqs.length > 0 && (
            <div className="mt-12">
              <FAQAccordion faqs={content.faqs} />
            </div>
          )}
        </div>
      </article>
      <CTABand />
    </>
  )
}

export function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="hero-grid-bg border-b border-slate-200 bg-surface py-16">
      <div className="container-page max-w-3xl">
        <h1 className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 text-lg leading-8 text-slate-600">{subtitle}</p>}
      </div>
    </section>
  )
}

export function SectorCards() {
  const sectors = [
    { title: 'Healthcare', href: '/pdb-healthcare-projects', description: 'Hospital expansions, medical centers, and county healthcare districts.' },
    { title: 'Municipal & Civic', href: '/pdb-municipal-civic', description: 'City halls, courts, public safety, and community centers.' },
    { title: 'Parks & Cultural', href: '/pdb-parks-recreation-cultural', description: 'Great Park-scale destinations, recreation, and museums.' },
    { title: 'Education', href: '/pdb-education-campus', description: 'Campus projects with DSA coordination and occupied phasing.' },
  ]

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {sectors.map((sector) => (
        <Link
          key={sector.href}
          href={sector.href}
          className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:border-accent hover:shadow-md"
        >
          <h3 className="font-display font-semibold text-primary group-hover:text-accent">{sector.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{sector.description}</p>
        </Link>
      ))}
    </div>
  )
}
