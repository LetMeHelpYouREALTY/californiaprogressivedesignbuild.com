import type { PageSection } from '@/config/page-content'
import { cn } from '@/lib/utils'

function SectionBlock({ section }: { section: PageSection }) {
  switch (section.type) {
    case 'paragraph':
      return <p className="text-base leading-7 text-slate-600">{section.content}</p>

    case 'heading':
      return <h2 className="section-heading">{section.content}</h2>

    case 'list':
      return (
        <div>
          {section.title && <h2 className="section-heading mb-4">{section.title}</h2>}
          <ul className="list-disc space-y-2 pl-5 text-slate-600">
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )

    case 'cards':
      return (
        <div>
          {section.title && <h2 className="section-heading mb-6">{section.title}</h2>}
          <div className="grid gap-4 sm:grid-cols-2">
            {section.items.map((item) => (
              <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-display font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      )

    case 'callout':
      return (
        <div
          className={cn(
            'rounded-lg border-l-4 p-5',
            section.variant === 'warning' && 'border-amber-500 bg-amber-50',
            section.variant === 'legal' && 'border-slate-500 bg-slate-50',
            (!section.variant || section.variant === 'info') && 'border-secondary bg-blue-50',
          )}
        >
          <h3 className="font-display font-semibold text-primary">{section.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">{section.content}</p>
        </div>
      )

    case 'table':
      return (
        <div>
          {section.title && <h2 className="section-heading mb-4">{section.title}</h2>}
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-surface">
                <tr>
                  {section.headers.map((header) => (
                    <th key={header} className="px-4 py-3 text-left font-semibold text-primary">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {section.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-3 text-slate-600">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )

    case 'quote':
      return (
        <blockquote className="rounded-lg border border-slate-200 bg-surface p-6">
          <p className="text-lg italic leading-8 text-slate-700">&ldquo;{section.content}&rdquo;</p>
          <footer className="mt-4 text-sm font-semibold text-primary">
            — {section.author}
            {section.role && <span className="font-normal text-slate-500">, {section.role}</span>}
          </footer>
        </blockquote>
      )

    default: {
      const _exhaustive: never = section
      return _exhaustive
    }
  }
}

export function PageSections({ sections }: { sections: PageSection[] }) {
  return (
    <div className="space-y-10">
      {sections.map((section, index) => (
        <SectionBlock key={index} section={section} />
      ))}
    </div>
  )
}
