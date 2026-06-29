'use client'

import Link from 'next/link'
import { useState } from 'react'
import { navigation, siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex min-w-0 flex-col">
          <span className="font-display text-lg font-bold text-primary">{siteConfig.name}</span>
          <span className="hidden text-xs text-slate-500 sm:block">{siteConfig.tagline}</span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main">
          {navigation.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  type="button"
                  className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-surface hover:text-primary"
                  aria-expanded={openMenu === item.label}
                >
                  {item.label}
                </button>
                {openMenu === item.label && (
                  <div className="absolute left-0 top-full z-50 min-w-[220px] rounded-lg border border-slate-200 bg-white py-2 shadow-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href!}
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-surface hover:text-primary"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-surface hover:text-primary"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={siteConfig.phoneHref} className="text-sm font-medium text-primary">
            {siteConfig.phone}
          </a>
          <Link href="/contact" className="btn-primary">
            Schedule Consultation
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-primary xl:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-slate-200 bg-white xl:hidden" aria-label="Mobile">
          <div className="container-page space-y-4 py-4">
            {navigation.map((item) => (
              <div key={item.label}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">{item.label}</p>
                {item.children ? (
                  <div className="space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href!}
                        className="block rounded-md px-2 py-2 text-sm text-slate-700 hover:bg-surface"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    href={item.href!}
                    className="block rounded-md px-2 py-2 text-sm text-slate-700 hover:bg-surface"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link href="/contact" className={cn('btn-primary w-full')} onClick={() => setMobileOpen(false)}>
              Schedule Consultation
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
