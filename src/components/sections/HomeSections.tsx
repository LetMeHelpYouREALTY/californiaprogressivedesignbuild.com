import Link from 'next/link'
import type { PageFAQ } from '@/config/page-content'

export function StatsBar() {
  const stats = [
    { value: '40+', label: 'Years Owner Representation' },
    { value: '$3B+', label: 'Regional Project Delivery' },
    { value: '6', label: 'Delivery Methods Supported' },
    { value: '2', label: 'California Offices' },
  ]

  return (
    <section className="border-y border-slate-200 bg-surface">
      <div className="container-page grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-3xl font-bold text-accent">{stat.value}</p>
            <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function CTABand() {
  return (
    <section className="bg-primary py-12 text-white">
      <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h2 className="font-display text-2xl font-bold">Ready to discuss your PDB project?</h2>
          <p className="mt-2 max-w-xl text-blue-100">
            Kelly Boyle and the Griffin Structures team provide Owner&apos;s Representative services from RFQ through closeout.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="btn-primary">
            Schedule Consultation
          </Link>
          <a href="tel:+19493248880" className="btn-secondary border-white text-white hover:bg-white/10">
            Call Kelly: (949) 324-8880
          </a>
        </div>
      </div>
    </section>
  )
}

export function FAQAccordion({ faqs }: { faqs: PageFAQ[] }) {
  return (
    <section className="space-y-4">
      <h2 className="section-heading">Frequently Asked Questions</h2>
      <div className="divide-y divide-slate-200 rounded-lg border border-slate-200">
        {faqs.map((faq) => (
          <details key={faq.question} className="group px-5 py-4">
            <summary className="cursor-pointer list-none font-semibold text-primary marker:content-none [&::-webkit-details-marker]:hidden">
              {faq.question}
            </summary>
            <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export function ProcessTimeline() {
  const phases = [
    { phase: 'Phase 1', title: 'Design & Preconstruction', color: 'bg-secondary' },
    { phase: 'Gate', title: 'GMP Decision', color: 'bg-slate-400' },
    { phase: 'Phase 2', title: 'Construction & Closeout', color: 'bg-accent' },
  ]

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch">
      {phases.map((item, i) => (
        <div key={item.phase} className="relative flex-1">
          <div className={`rounded-lg ${item.color} p-5 text-white`}>
            <p className="text-xs font-semibold uppercase tracking-wide opacity-80">{item.phase}</p>
            <p className="mt-1 font-display text-lg font-bold">{item.title}</p>
          </div>
          {i < phases.length - 1 && (
            <span className="absolute -right-2 top-1/2 hidden h-0.5 w-4 -translate-y-1/2 bg-slate-300 sm:block" />
          )}
        </div>
      ))}
    </div>
  )
}
