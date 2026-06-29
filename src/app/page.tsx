import type { Metadata } from 'next'
import Link from 'next/link'
import { CTABand, FAQAccordion, ProcessTimeline, StatsBar } from '@/components/sections/HomeSections'
import { SectorCards } from '@/components/ContentPage'
import { faqSchema, webPageSchema } from '@/lib/schema'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'California Progressive Design-Build Guide',
  description: siteConfig.description,
}

const homeFaqs = [
  {
    question: 'What is California Progressive Design-Build?',
    answer:
      'A two-phase delivery method where a design-build team is selected on qualifications at the earliest feasible stage, completes preconstruction and design, then negotiates a Guaranteed Maximum Price through open-book costing before construction proceeds.',
  },
  {
    question: 'Which California agencies can use PDB?',
    answer:
      'Cities, counties, special districts, transit agencies, water agencies, and state departments — each under specific Public Contract Code authority with project thresholds, typically $5 million minimum for local agencies.',
  },
  {
    question: 'How does Griffin Structures help with PDB?',
    answer:
      "As Owner's Representative, Griffin provides delivery method evaluation, RFQ/RFP development, evaluation panel facilitation, GMP negotiation support, and construction oversight — acting solely in the agency's interest.",
  },
]

export default function HomePage() {
  const pageSchema = webPageSchema(
    'California Progressive Design-Build Guide',
    siteConfig.description,
    '/',
  )
  const faqJson = faqSchema(homeFaqs)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }} />

      <section className="hero-grid-bg border-b border-slate-200 bg-surface">
        <div className="container-page grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">California Public Works</p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              California Progressive Design-Build
            </h1>
            <p className="mt-2 font-display text-xl text-secondary">Deliver Complex Public Projects with Confidence</p>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              {siteConfig.name} guides cities, counties, special districts, transit agencies, and healthcare authorities
              through every phase of California&apos;s two-phase Progressive Design-Build process — from RFQ to GMP to
              construction closeout.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Schedule Consultation
              </Link>
              <Link href="/two-phase-delivery-model" className="btn-secondary">
                Explore the Process
              </Link>
            </div>
          </div>
          <div>
            <ProcessTimeline />
            <p className="mt-4 text-sm text-slate-500">
              Qualifications-based selection → open-book GMP → construction with continuity
            </p>
          </div>
        </div>
      </section>

      <StatsBar />

      <section className="container-page py-16">
        <h2 className="section-heading">Why California Agencies Are Adopting PDB</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Early Collaboration',
              description: 'Design-builder engaged at the earliest feasible stage after conceptual design.',
            },
            {
              title: 'Open-Book GMP',
              description: 'Transparent cost negotiation before construction commitment.',
            },
            {
              title: 'Off-Ramp Flexibility',
              description: 'Agency protection if parties cannot agree on final price.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-slate-200 p-6 shadow-sm">
              <h3 className="font-display text-lg font-semibold text-primary">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container-page">
          <h2 className="section-heading">Expanded 2024 Authority</h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            SB 706 authorizes cities, counties, and special districts. SB 617 covers transit agencies. SB 991 and AB 1845
            expanded water agency authority. Each allows up to 10 projects exceeding $5 million through January 1, 2030.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/sb-706-local-agencies" className="btn-secondary">
              SB 706 Guide
            </Link>
            <Link href="/california-legal-framework" className="btn-secondary">
              Legal Framework
            </Link>
            <Link href="/eligible-agencies-thresholds" className="btn-secondary">
              Check Eligibility
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <h2 className="section-heading">Featured Sectors</h2>
        <div className="mt-8">
          <SectorCards />
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16">
        <div className="container-page max-w-3xl">
          <h2 className="section-heading">Griffin&apos;s Role as Owner&apos;s Representative</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Acting solely in your interest, Griffin provides guidance on delivery method selection, procurement strategy,
            RFQ/RFP development, evaluation panel facilitation, GMP negotiation support, and construction oversight —
            from concept to completion.
          </p>
          <Link href="/owners-representative-pdb" className="btn-primary mt-6 inline-flex">
            Learn About Owner Representation
          </Link>
        </div>
      </section>

      <section className="container-page py-16">
        <FAQAccordion faqs={homeFaqs} />
      </section>

      <CTABand />
    </>
  )
}
