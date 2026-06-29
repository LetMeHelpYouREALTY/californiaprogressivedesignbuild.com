'use client'

import { useState } from 'react'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { siteConfig } from '@/config/site'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Breadcrumb items={[{ label: 'Contact' }]} />
      <section className="container-page pb-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h1 className="font-display text-3xl font-bold text-primary sm:text-4xl">
              Schedule a California PDB Consultation
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Discuss delivery method selection, RFQ planning, GMP strategy, or Owner&apos;s Representative services with
              Griffin Structures.
            </p>

            <div className="mt-8 space-y-6 rounded-lg border border-slate-200 bg-surface p-6">
              <div>
                <p className="font-semibold text-primary">Kelly Boyle, EVP Business Development</p>
                <p className="text-sm text-slate-600">Public sector &amp; healthcare PDB inquiries</p>
                <a href={siteConfig.kellyPhoneHref} className="mt-1 block text-accent hover:underline">
                  {siteConfig.kellyPhone}
                </a>
              </div>
              <div>
                <p className="font-semibold text-primary">Main Office</p>
                <a href={siteConfig.phoneHref} className="text-accent hover:underline">
                  {siteConfig.phone}
                </a>
                <p className="mt-2 text-sm text-slate-600">{siteConfig.hours}</p>
              </div>
              {siteConfig.offices.map((office) => (
                <address key={office.name} className="not-italic text-sm text-slate-600">
                  <p className="font-semibold text-primary">{office.name}</p>
                  {office.street}
                  <br />
                  {office.city}, {office.state} {office.zip}
                </address>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center">
                <p className="font-display text-xl font-semibold text-primary">Thank you for your inquiry.</p>
                <p className="mt-2 text-slate-600">A Griffin Structures representative will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm font-medium text-slate-700">
                    First Name
                    <input required name="firstName" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
                  </label>
                  <label className="block text-sm font-medium text-slate-700">
                    Last Name
                    <input required name="lastName" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
                  </label>
                </div>
                <label className="block text-sm font-medium text-slate-700">
                  Agency / Organization
                  <input required name="organization" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                  Email
                  <input required type="email" name="email" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                  Phone
                  <input type="tel" name="phone" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                  Agency Type
                  <select name="agencyType" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2">
                    <option>City</option>
                    <option>County</option>
                    <option>Special District</option>
                    <option>Transit Agency</option>
                    <option>Water Agency</option>
                    <option>Healthcare District</option>
                    <option>Other</option>
                  </select>
                </label>
                <label className="block text-sm font-medium text-slate-700">
                  Message
                  <textarea required name="message" rows={4} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
                </label>
                <button type="submit" className="btn-primary w-full">
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
