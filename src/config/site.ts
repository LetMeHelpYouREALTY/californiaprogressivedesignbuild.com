export const siteConfig = {
  name: 'Griffin Structures',
  legalName: 'Griffin Structures, Inc.',
  tagline: 'Excellence in Project Delivery',
  description:
    'Griffin Structures helps California public agencies navigate Progressive Design-Build — RFQ, GMP, open-book pricing, and construction oversight.',
  url: 'https://californiaprogressivedesignbuild.com',
  phone: '(949) 474-0431',
  phoneHref: 'tel:+19494740431',
  kellyPhone: '(949) 324-8880',
  kellyPhoneHref: 'tel:+19493248880',
  email: 'info@griffinstructures.com',
  founded: 1981,
  hours: 'Mon–Fri 8:00 AM – 5:00 PM PT',
  offices: [
    {
      name: 'Irvine Headquarters',
      street: '1 Technology Drive, Building I, Suite 829',
      city: 'Irvine',
      state: 'CA',
      zip: '92618',
      phone: '(949) 474-0431',
    },
    {
      name: 'Santa Clara Office',
      street: '1850 Warburton Ave, Suite 120',
      city: 'Santa Clara',
      state: 'CA',
      zip: '95050',
      phone: '(949) 474-0431',
    },
  ],
  social: {
    linkedin: 'https://www.linkedin.com/company/griffinstructures',
    griffin: 'https://griffinstructures.com',
  },
} as const

export type NavItem = {
  label: string
  href?: string
  children?: NavItem[]
}

export const navigation: NavItem[] = [
  {
    label: 'What Is PDB',
    children: [
      { label: 'Overview', href: '/what-is-progressive-design-build' },
      { label: 'vs Other Methods', href: '/pdb-vs-design-build-vs-design-bid-build' },
      { label: 'Two-Phase Model', href: '/two-phase-delivery-model' },
    ],
  },
  {
    label: 'California Law',
    children: [
      { label: 'Legal Framework', href: '/california-legal-framework' },
      { label: 'SB 706', href: '/sb-706-local-agencies' },
      { label: 'SB 617', href: '/sb-617-transit-agencies' },
      { label: 'Water Agencies', href: '/water-agency-pdb-authority' },
      { label: 'Caltrans PDB', href: '/caltrans-progressive-design-build' },
    ],
  },
  {
    label: 'Process',
    children: [
      { label: 'Phase 1: RFQ & Selection', href: '/phase-1-qualifications-selection' },
      { label: 'Phase 2: GMP & Open Book', href: '/phase-2-gmp-open-book-pricing' },
      { label: 'Off-Ramp Provisions', href: '/off-ramp-provisions' },
      { label: 'Workforce Requirements', href: '/skilled-trained-workforce' },
    ],
  },
  {
    label: 'By Sector',
    children: [
      { label: 'Healthcare', href: '/pdb-healthcare-projects' },
      { label: 'Municipal & Civic', href: '/pdb-municipal-civic' },
      { label: 'Parks & Cultural', href: '/pdb-parks-recreation-cultural' },
      { label: 'Education', href: '/pdb-education-campus' },
    ],
  },
  {
    label: 'Resources',
    children: [
      { label: 'Eligibility & Thresholds', href: '/eligible-agencies-thresholds' },
      { label: 'Legislative Reporting', href: '/legislative-reporting-compliance' },
      { label: 'Procurement Best Practices', href: '/procurement-best-practices' },
      { label: "Owner's Representative", href: '/owners-representative-pdb' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Resources Hub', href: '/resources' },
    ],
  },
  { label: 'Contact', href: '/contact' },
]

export const stats = [
  { value: '40+', label: 'Years Owner Representation' },
  { value: '$3B+', label: 'Regional Project Delivery' },
  { value: '6', label: 'Delivery Methods Supported' },
  { value: '2', label: 'California Offices' },
] as const
