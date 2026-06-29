import Link from 'next/link'
import { siteConfig } from '@/config/site'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-primary text-white">
      <div className="container-page grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-bold">{siteConfig.legalName}</p>
          <p className="mt-2 text-sm text-blue-100">{siteConfig.tagline}</p>
          <p className="mt-4 text-sm text-blue-100">Founded {siteConfig.founded}</p>
        </div>

        {siteConfig.offices.map((office) => (
          <div key={office.name}>
            <p className="font-semibold">{office.name}</p>
            <address className="mt-2 not-italic text-sm text-blue-100">
              {office.street}
              <br />
              {office.city}, {office.state} {office.zip}
            </address>
          </div>
        ))}

        <div>
          <p className="font-semibold">Contact</p>
          <p className="mt-2 text-sm text-blue-100">
            <a href={siteConfig.phoneHref} className="hover:text-white">
              {siteConfig.phone}
            </a>
          </p>
          <p className="mt-1 text-sm text-blue-100">
            Kelly Boyle:{' '}
            <a href={siteConfig.kellyPhoneHref} className="hover:text-white">
              {siteConfig.kellyPhone}
            </a>
          </p>
          <p className="mt-2 text-sm text-blue-100">{siteConfig.hours}</p>
        </div>

        <div>
          <p className="font-semibold">Quick Links</p>
          <ul className="mt-2 space-y-1 text-sm text-blue-100">
            <li>
              <Link href="/what-is-progressive-design-build" className="hover:text-white">
                What Is PDB
              </Link>
            </li>
            <li>
              <Link href="/sb-706-local-agencies" className="hover:text-white">
                SB 706 Guide
              </Link>
            </li>
            <li>
              <Link href="/case-studies" className="hover:text-white">
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Schedule Consultation
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-blue-900">
        <div className="container-page flex flex-col gap-2 py-4 text-xs text-blue-200 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
          <p>Educational content — not legal advice. Consult agency counsel for compliance.</p>
        </div>
      </div>
    </footer>
  )
}
