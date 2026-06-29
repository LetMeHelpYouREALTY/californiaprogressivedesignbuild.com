export type PageSection =
  | { type: 'paragraph'; content: string }
  | { type: 'heading'; content: string }
  | { type: 'list'; title?: string; items: string[] }
  | { type: 'cards'; title?: string; items: { title: string; description: string }[] }
  | { type: 'callout'; title: string; content: string; variant?: 'info' | 'warning' | 'legal' }
  | { type: 'table'; title?: string; headers: string[]; rows: string[][] }
  | { type: 'quote'; content: string; author: string; role?: string }

export type PageFAQ = { question: string; answer: string }

export type PageContent = {
  slug: string
  title: string
  description: string
  h1: string
  subtitle?: string
  sections: PageSection[]
  faqs?: PageFAQ[]
  cta?: { title: string; description: string }
}

export const pages: Record<string, PageContent> = {
  'what-is-progressive-design-build': {
    slug: 'what-is-progressive-design-build',
    title: 'What Is Progressive Design-Build?',
    description:
      'California Progressive Design-Build defined — qualifications-based selection, open-book GMP, and two-phase public project delivery.',
    h1: 'What Is Progressive Design-Build?',
    subtitle:
      'A collaborative California delivery method where design, preconstruction, and construction are procured from a single team selected on qualifications.',
    sections: [
      {
        type: 'paragraph',
        content:
          'Progressive Design-Build (PDB) is a project delivery process in which design, preconstruction services, and construction are procured from a single design-build entity selected through qualifications-based selection at the earliest feasible stage. The entity completes design and preconstruction sufficient to establish a Guaranteed Maximum Price (GMP); the owner then decides whether to proceed to construction.',
      },
      {
        type: 'cards',
        title: 'Key Characteristics',
        items: [
          { title: 'Qualifications-Based Selection', description: 'Team chosen on experience and capability — not low bid at award.' },
          { title: 'Early Collaboration', description: 'Design-builder engaged when scope is still evolving.' },
          { title: 'Open-Book Transparency', description: 'Owner reviews labor, materials, and markups before GMP.' },
          { title: 'GMP Decision Gate', description: 'Construction price negotiated mid-project, not at initial award.' },
          { title: 'Off-Ramp Flexibility', description: 'Statutory protection if parties cannot agree on price.' },
          { title: 'Public Sector Fit', description: 'Ideal for complex civic, healthcare, parks, water, and transit work.' },
        ],
      },
      {
        type: 'list',
        title: 'When PDB Makes Sense',
        items: [
          'Complex or evolving project scope',
          'Budget uncertainty at time of award',
          'Need for constructability input during design',
          'Stakeholder-heavy public projects',
          'Healthcare, civic, parks, water, or transit facilities',
        ],
      },
      {
        type: 'callout',
        variant: 'info',
        title: 'Griffin Structures',
        content:
          "As your Owner's Representative, Griffin evaluates whether PDB aligns with your agency's goals — then manages RFQ through closeout if you proceed.",
      },
    ],
    faqs: [
      {
        question: 'Is Progressive Design-Build the same as Design-Build?',
        answer:
          'No. Traditional design-build typically awards a lump-sum price at ~30% design. PDB selects the team earlier, without a construction price, and negotiates a GMP through open-book preconstruction.',
      },
      {
        question: 'Who can use PDB in California?',
        answer:
          'Cities, counties, special districts, transit agencies, water agencies, and state departments — each under specific Public Contract Code authority with project thresholds and limits.',
      },
    ],
  },
  'pdb-vs-design-build-vs-design-bid-build': {
    slug: 'pdb-vs-design-build-vs-design-bid-build',
    title: 'PDB vs Design-Build vs Design-Bid-Build',
    description: 'Compare California project delivery methods — design-bid-build, design-build, and progressive design-build.',
    h1: 'Compare California Delivery Methods',
    subtitle: 'Every project has different priorities, risks, and constraints. Choose the method that fits.',
    sections: [
      {
        type: 'table',
        title: 'Delivery Method Comparison',
        headers: ['Factor', 'Design-Bid-Build', 'Design-Build', 'Progressive Design-Build'],
        rows: [
          ['Team selection', 'Low bid (construction)', 'Qualifications or best value', 'Qualifications at earliest stage'],
          ['Design at award', '100% complete', '~30% bridge design typical', 'Conceptual / early design'],
          ['Price at award', 'Construction bid sum', 'Lump sum at award', 'No construction price at award'],
          ['Cost transparency', 'Bid breakdown', 'Fixed price', 'Open-book → GMP'],
          ['Off-ramp', 'N/A', 'Limited', 'Statutory + contractual'],
          ['Owner effort', 'Moderate', 'Moderate–High', 'High (collaborative)'],
          ['Best for', 'Well-defined scope', 'Defined program, schedule pressure', 'Complex, evolving public work'],
        ],
      },
      {
        type: 'callout',
        variant: 'info',
        title: 'Independent Guidance',
        content:
          'Griffin evaluates all six delivery methods — including CM at Risk, Multi-Prime, and P3 — and recommends the approach aligned to your goals, not ours.',
      },
    ],
  },
  'two-phase-delivery-model': {
    slug: 'two-phase-delivery-model',
    title: 'Two-Phase Delivery Model',
    description: "California's two-phase Progressive Design-Build model — Phase 1 preconstruction through GMP and Phase 2 construction.",
    h1: "California's Two-Phase Progressive Design-Build Model",
    sections: [
      {
        type: 'cards',
        title: 'Phase 1 — Design & Preconstruction Services',
        items: [
          { title: 'RFQ & SOQ', description: 'Agency issues RFQ; teams submit Statements of Qualifications.' },
          { title: 'Team Selection', description: 'Qualifications-based evaluation and interview process.' },
          { title: 'Collaborative Design', description: 'Concept through design development with constructability input.' },
          { title: 'Open-Book Estimating', description: 'Transparent cost validation as design progresses.' },
          { title: 'GMP Proposal', description: 'Design-builder submits Guaranteed Maximum Price for Phase 2.' },
        ],
      },
      {
        type: 'callout',
        variant: 'warning',
        title: 'Decision Gate',
        content: 'Owner accepts GMP, negotiates further, or exercises off-ramp provisions before committing to construction.',
      },
      {
        type: 'cards',
        title: 'Phase 2 — Design Completion & Construction',
        items: [
          { title: 'GMP Amendment', description: 'Phase 2 agreement executed upon GMP acceptance.' },
          { title: 'Final Design', description: 'Construction documents, permitting, and trade procurement.' },
          { title: 'Construction', description: 'Build, commission, and turnover with continuity from Phase 1.' },
          { title: 'Closeout', description: 'Warranty, documentation, and legislative reporting support.' },
        ],
      },
    ],
  },
  'california-legal-framework': {
    slug: 'california-legal-framework',
    title: 'California Legal Framework',
    description: 'California Progressive Design-Build statutory framework — PCC Article 6.7, Chapter 4.1, and expansion bills.',
    h1: 'California Progressive Design-Build — Legal Framework',
    sections: [
      {
        type: 'list',
        title: 'Key Statutory References',
        items: [
          'PCC Article 6.7 §10215–10215.8 — State department projects',
          'PCC Chapter 4.1 §22170–22174 — Local agency PDB',
          'PCC §22185–22185.11 — Additional local agency provisions',
          'SB 706 (2024) — Cities, counties, special districts',
          'SB 617 (2024) — Transit agencies and JPAs',
          'SB 991 / AB 1845 (2023) — Water agencies',
        ],
      },
      {
        type: 'paragraph',
        content:
          'California expanded PDB authority significantly in 2022–2024. SB 706 and SB 617 (effective January 1, 2024) authorized cities, counties, special districts, and transit agencies to use PDB for up to 10 public works projects exceeding $5 million each through January 1, 2030.',
      },
      {
        type: 'callout',
        variant: 'legal',
        title: 'Disclaimer',
        content: 'Information on this site is educational, not legal advice. Consult agency counsel for project-specific compliance.',
      },
    ],
  },
  'sb-706-local-agencies': {
    slug: 'sb-706-local-agencies',
    title: 'SB 706 — Local Agencies',
    description: 'SB 706 Progressive Design-Build authority for California cities, counties, and special districts.',
    h1: 'SB 706 — Progressive Design-Build for Cities, Counties & Special Districts',
    subtitle: 'Effective January 1, 2024 | Sunset January 1, 2030',
    sections: [
      {
        type: 'list',
        title: 'Key Provisions',
        items: [
          'Up to 10 public works projects per agency',
          'Minimum $5,000,000 per project',
          'Excludes state-owned or state-operated facilities',
          'Qualifications-based RFQ required',
          'Skilled & trained workforce commitment required',
          'SOQ information certified under penalty of perjury',
          'Legislative report due December 31, 2028',
        ],
      },
      {
        type: 'cards',
        title: 'Griffin Services for SB 706 Agencies',
        items: [
          { title: 'Feasibility Study', description: 'Delivery method evaluation and board-ready recommendation.' },
          { title: 'RFQ Development', description: 'Scope, evaluation criteria, and SOQ template drafting.' },
          { title: 'Panel Facilitation', description: 'Evaluation training, scoring, and interview management.' },
          { title: 'Preconstruction Oversight', description: 'GMP review, open-book validation, and negotiation support.' },
        ],
      },
    ],
    faqs: [
      { question: 'How many PDB projects can our agency award?', answer: 'Up to 10 public works projects in excess of $5 million each under SB 706 authority through January 1, 2030.' },
      { question: 'Can we evaluate price in the RFQ phase?', answer: 'No. Phase 1 selection must be qualifications-based. Price is negotiated later through open-book GMP development.' },
    ],
  },
  'sb-617-transit-agencies': {
    slug: 'sb-617-transit-agencies',
    title: 'SB 617 — Transit Agencies',
    description: 'SB 617 Progressive Design-Build for California transit agencies, JPAs, and regional transportation agencies.',
    h1: 'SB 617 — Progressive Design-Build for Transit & Regional Transportation',
    subtitle: 'Effective January 1, 2024',
    sections: [
      {
        type: 'paragraph',
        content:
          'SB 617 provides transit agencies, joint powers authorities, and regional transportation agencies the same Progressive Design-Build authority as SB 706 — up to 10 projects exceeding $5 million each through January 1, 2030.',
      },
      {
        type: 'list',
        title: 'Typical Transit PDB Projects',
        items: [
          'Interchange and guideway improvements',
          'Transit stations and maintenance facilities',
          'Bus rapid transit infrastructure',
          'Multi-modal hub developments',
        ],
      },
      {
        type: 'callout',
        variant: 'info',
        title: 'Funding Coordination',
        content: 'PDB procurement must align with FTA, state, and local funding requirements. Griffin coordinates delivery strategy with your grant and compliance teams.',
      },
    ],
  },
  'water-agency-pdb-authority': {
    slug: 'water-agency-pdb-authority',
    title: 'Water Agency PDB Authority',
    description: 'Progressive Design-Build for California water agencies under SB 991 and AB 1845.',
    h1: 'Progressive Design-Build for California Water Agencies',
    sections: [
      {
        type: 'paragraph',
        content:
          'SB 991 and AB 1845 (effective January 1, 2023) first expanded PDB authority to water agencies for production, storage, supply, treatment, and distribution projects — preceding the broader 2024 expansion to cities, counties, and transit agencies.',
      },
      {
        type: 'list',
        title: 'Common Water Sector Applications',
        items: [
          'Treatment plant upgrades and expansion',
          'Reservoir and storage facilities',
          'Pipeline and distribution complexes',
          'Recycled water and advanced treatment systems',
        ],
      },
    ],
  },
  'caltrans-progressive-design-build': {
    slug: 'caltrans-progressive-design-build',
    title: 'Caltrans Progressive Design-Build',
    description: 'Caltrans PD-B program — state highway and infrastructure progressive design-build delivery.',
    h1: 'Caltrans Progressive Design-Build (PD-B) Program',
    sections: [
      {
        type: 'paragraph',
        content:
          'Caltrans operates a Progressive Design-Build program as a two-phase variation of design-build for state highway and infrastructure projects. The design-build team is engaged during earliest project development, completes design up to 100%, then agrees to a GMP for final design and construction.',
      },
      {
        type: 'list',
        title: 'Resources',
        items: [
          'Caltrans PD-B Program page: dot.ca.gov/programs/design/progressive-design-build-pd-b',
          'Preconstruction services contract templates',
          'Information sharing meetings and industry outreach events',
        ],
      },
      {
        type: 'callout',
        variant: 'info',
        title: 'Local Agency Note',
        content: 'Griffin Structures supports local agency owners. This page helps municipal clients understand state PDB programs affecting adjacent infrastructure coordination.',
      },
    ],
  },
  'phase-1-qualifications-selection': {
    slug: 'phase-1-qualifications-selection',
    title: 'Phase 1 — RFQ & Selection',
    description: 'California PDB Phase 1 — RFQ, SOQ, and qualifications-based team selection requirements.',
    h1: 'Phase 1 — RFQ, SOQ & Qualifications-Based Selection',
    sections: [
      {
        type: 'list',
        title: 'RFQ Must Include',
        items: [
          'Basic scope, needs, and expected cost range',
          'Evaluation methodology and selection procedure',
          'Standard SOQ template with team experience and credentials',
          'Bonding, insurance, and licensing documentation requirements',
          'Skilled & trained workforce commitment',
        ],
      },
      {
        type: 'cards',
        title: 'Griffin-Led Phase 1 Activities',
        items: [
          { title: 'RFQ Drafting', description: 'Industry outreach strategy and compliant document preparation.' },
          { title: 'Evaluation Design', description: 'Scoring matrices, best-value criteria, and panel training.' },
          { title: 'Interview Facilitation', description: 'Structured presentations and conflict-of-interest protocols.' },
          { title: 'Compliance Review', description: 'SOQ completeness and statutory requirement verification.' },
        ],
      },
      {
        type: 'callout',
        variant: 'warning',
        title: 'Critical Requirement',
        content: 'Price must not be evaluated in Phase 1 selection. Teams are chosen on qualifications, experience, and capability.',
      },
    ],
  },
  'phase-2-gmp-open-book-pricing': {
    slug: 'phase-2-gmp-open-book-pricing',
    title: 'Phase 2 — GMP & Open Book',
    description: 'Guaranteed Maximum Price negotiation and open-book pricing in California Progressive Design-Build.',
    h1: 'Phase 2 — Guaranteed Maximum Price & Open-Book Negotiation',
    sections: [
      {
        type: 'paragraph',
        content:
          'Open-book pricing means the owner can review labor rates, material costs, subcontractor quotes, and agreed markups as design progresses. The GMP combines validated direct costs with a pre-negotiated fee structure.',
      },
      {
        type: 'list',
        title: 'GMP Negotiation Topics',
        items: [
          'Scope validation against program requirements',
          'Allowances, contingencies, and escalation assumptions',
          'Schedule integration and milestone alignment',
          'Change order protocols after GMP execution',
          'Shared risk register and constructability resolutions',
        ],
      },
      {
        type: 'callout',
        variant: 'info',
        title: 'Independent GMP Review',
        content: 'Griffin provides comparable project benchmarking, open-book validation, and owner-side negotiation support — ensuring the GMP reflects market conditions and design scope.',
      },
    ],
  },
  'off-ramp-provisions': {
    slug: 'off-ramp-provisions',
    title: 'Off-Ramp Provisions',
    description: 'Off-ramp provisions in California Progressive Design-Build — protecting public owners when GMP negotiations fail.',
    h1: 'Off-Ramp Provisions — Protecting the Public Owner',
    sections: [
      {
        type: 'paragraph',
        content:
          'Because PDB award does not include a construction price, California law and best-practice contracts include off-ramp provisions allowing the agency to exit the relationship if a GMP cannot be agreed upon — reducing owner risk compared to traditional lump-sum design-build.',
      },
      {
        type: 'list',
        title: 'Industry Best Practices',
        items: [
          'Robust off-ramp requiring 100% construction documents if agency exits',
          'Clear agency budget with design-builder obligation to design to budget',
          'Collaborative contracting culture on the agency project team',
          'Documented decision points and regular workshop cadence',
        ],
      },
      {
        type: 'cards',
        title: 'Common Scenarios',
        items: [
          { title: 'GMP Exceeds Budget', description: 'Value engineering workshops and scope realignment before decision gate.' },
          { title: 'No Agreement', description: 'Off-ramp to design-bid-build or new procurement with completed documents.' },
          { title: 'Partial Exit', description: 'Complete design documents, then rebid construction separately.' },
        ],
      },
    ],
  },
  'skilled-trained-workforce': {
    slug: 'skilled-trained-workforce',
    title: 'Skilled & Trained Workforce',
    description: 'Skilled and trained workforce requirements for California Progressive Design-Build projects.',
    h1: 'Skilled & Trained Workforce Requirements in California PDB',
    sections: [
      {
        type: 'paragraph',
        content:
          'Per Public Contract Code requirements, the design-build entity must provide an enforceable commitment that the entity and all subcontractors at every tier will use a skilled and trained workforce for apprenticeable building and construction trades.',
      },
      {
        type: 'list',
        title: 'Owner Action Items',
        items: [
          'Verify skilled & trained workforce commitment in SOQ submissions',
          'Flow-down requirements to all subcontracts',
          'Document compliance during construction administration',
          'Coordinate with prevailing wage and PLA requirements as applicable',
        ],
      },
      {
        type: 'callout',
        variant: 'legal',
        title: 'Counsel Referral',
        content: 'Workforce compliance intersects with DSA, prevailing wage, and project labor agreement requirements. Consult agency counsel for project-specific obligations.',
      },
    ],
  },
  'eligible-agencies-thresholds': {
    slug: 'eligible-agencies-thresholds',
    title: 'Eligible Agencies & Thresholds',
    description: 'Who can use Progressive Design-Build in California — agency types, project limits, and $5M thresholds.',
    h1: 'Who Can Use Progressive Design-Build in California?',
    sections: [
      {
        type: 'table',
        title: 'Agency Eligibility Matrix',
        headers: ['Agency Type', 'Statute', 'Max Projects', 'Min Value', 'Sunset'],
        rows: [
          ['Cities, counties, special districts', 'SB 706 / PCC Ch. 4.1', '10', '$5M', 'Jan 1, 2030'],
          ['Transit agencies, JPAs, RTAs', 'SB 617', '10', '$5M', 'Jan 1, 2030'],
          ['Water agencies', 'SB 991 / AB 1845', '10', '$5M', 'Varies'],
          ['State departments', 'PCC Art. 6.7', 'Program', 'Varies', 'Ongoing'],
        ],
      },
      {
        type: 'callout',
        variant: 'info',
        title: 'Exclusions',
        content: 'SB 706 projects on state-owned or state-operated facilities are excluded. Verify facility ownership before selecting PDB.',
      },
    ],
  },
  'legislative-reporting-compliance': {
    slug: 'legislative-reporting-compliance',
    title: 'Legislative Reporting & Compliance',
    description: 'California PDB legislative reporting requirements — December 31, 2028 deadline.',
    h1: 'Legislative Reporting Requirements for California PDB Projects',
    sections: [
      {
        type: 'paragraph',
        content:
          'Local agencies using the progressive design-build process must submit a report to the appropriate policy and fiscal committees of the Legislature no later than December 31, 2028, describing projects awarded using PDB and outcomes achieved.',
      },
      {
        type: 'list',
        title: 'Report Should Include',
        items: [
          'Description of projects awarded using PDB',
          'Procurement approach and evaluation methodology',
          'GMP outcomes and off-ramp usage if applicable',
          'Schedule and budget performance',
          'Lessons learned and recommendations',
        ],
      },
      {
        type: 'callout',
        variant: 'info',
        title: 'Griffin Support',
        content: 'We compile project delivery documentation, outcome data, and closeout records to support your legislative reporting obligations.',
      },
    ],
  },
  'pdb-healthcare-projects': {
    slug: 'pdb-healthcare-projects',
    title: 'Healthcare PDB Projects',
    description: 'Progressive Design-Build for California healthcare and hospital projects.',
    h1: 'Progressive Design-Build for Healthcare & Hospital Projects',
    sections: [
      {
        type: 'list',
        title: 'Why Healthcare Fits PDB',
        items: [
          'Complex MEP, infection control, and phased occupancy',
          'Unknown subsurface and utility conditions',
          'Regulatory evolution during design development',
          'Multi-stakeholder clinical and operational input',
        ],
      },
      {
        type: 'cards',
        title: 'Griffin Healthcare Experience',
        items: [
          { title: 'Arrowhead Regional Medical Center', description: 'Ongoing construction management for San Bernardino County.' },
          { title: 'Public Healthcare Districts', description: 'Program management from needs assessment through occupancy.' },
          { title: 'PDB Advisory', description: 'Delivery method selection, RFQ, GMP review, and construction oversight.' },
        ],
      },
    ],
  },
  'pdb-municipal-civic': {
    slug: 'pdb-municipal-civic',
    title: 'Municipal & Civic PDB',
    description: 'Progressive Design-Build for California municipal and civic infrastructure projects.',
    h1: 'Progressive Design-Build for Municipal & Civic Infrastructure',
    sections: [
      {
        type: 'list',
        title: 'Project Types',
        items: [
          'City halls and civic centers',
          'Public safety facilities',
          'Libraries and community centers',
          'Development services and admin buildings',
        ],
      },
      {
        type: 'cards',
        title: 'Griffin Portfolio',
        items: [
          { title: 'West Hollywood City Hall', description: 'Landmark civic delivery in a complex urban environment.' },
          { title: 'Riverside Family Law Court', description: 'Judicial facility program and construction management.' },
          { title: 'Delhi Community Center', description: 'Community-serving public facility delivery.' },
          { title: 'Santa Ana Development Services Center', description: 'Municipal services facility from concept to keys.' },
        ],
      },
      {
        type: 'quote',
        content: 'Kelly Boyle was recognized as APWA Southern California Chapter Top Leader of the Year 2024 (Private Sector) for transformative infrastructure leadership.',
        author: 'American Public Works Association',
        role: 'Southern California Chapter',
      },
    ],
  },
  'pdb-parks-recreation-cultural': {
    slug: 'pdb-parks-recreation-cultural',
    title: 'Parks, Recreation & Cultural',
    description: 'Progressive Design-Build for California parks, recreation, and cultural facilities.',
    h1: 'Progressive Design-Build for Parks, Recreation & Cultural Facilities',
    sections: [
      {
        type: 'cards',
        title: 'Featured: Irvine Great Park Framework Plan',
        items: [
          { title: 'Client', description: 'City of Irvine' },
          { title: 'Scope', description: '~1,300 acres — botanical garden, veterans memorial, amphitheater, cultural terrace, sports park.' },
          { title: 'Griffin Role', description: 'Construction Management supporting transformation into an iconic California destination.' },
        ],
      },
      {
        type: 'list',
        title: 'Related Projects',
        items: [
          'Corona City Park Revitalization',
          'Great Park Live',
          'Great Park Ice & FivePoint Arena',
        ],
      },
    ],
  },
  'pdb-education-campus': {
    slug: 'pdb-education-campus',
    title: 'Education & Campus PDB',
    description: 'Progressive Design-Build for California schools and campus projects.',
    h1: 'Progressive Design-Build for Schools & Campus Projects',
    sections: [
      {
        type: 'paragraph',
        content:
          'Campus projects with evolving scope, occupied phasing, DSA coordination, and multi-stakeholder input benefit from PDB\'s early collaboration and open-book GMP — particularly when project value exceeds the $5 million statutory threshold.',
      },
      {
        type: 'list',
        title: 'Benefits for Education Agencies',
        items: [
          'Phased construction on occupied campuses',
          'DSA and regulatory coordination during design',
          'Community and board stakeholder alignment',
          'Budget certainty before construction commitment',
        ],
      },
    ],
  },
  'owners-representative-pdb': {
    slug: 'owners-representative-pdb',
    title: "Owner's Representative in PDB",
    description: "Griffin Structures as Owner's Representative for California Progressive Design-Build projects.",
    h1: "The Owner's Representative in Progressive Design-Build",
    sections: [
      {
        type: 'paragraph',
        content:
          "Griffin Structures acts solely in the owner's interest — not as designer or builder. We provide independent guidance through delivery method selection, procurement, GMP negotiation, and construction closeout.",
      },
      {
        type: 'list',
        title: 'Owner Representative Services',
        items: [
          'Delivery strategy evaluation and board-ready recommendations',
          'RFQ/RFP development and industry outreach',
          'Evaluation panel facilitation and scoring oversight',
          'Contract negotiation and preconstruction agreement support',
          'Design and construction oversight',
          'Budget, schedule, and stakeholder coordination',
          'Grant funding and compliance coordination',
        ],
      },
      {
        type: 'quote',
        content: 'Jon Hughes, CCM, DBIA, presents Progressive Design-Build successes at APWA Sacramento and Southern California chapter events.',
        author: 'Jon Hughes',
        role: 'President, Griffin Structures',
      },
    ],
  },
  'procurement-best-practices': {
    slug: 'procurement-best-practices',
    title: 'Procurement Best Practices',
    description: 'California Progressive Design-Build procurement best practices for public agencies.',
    h1: 'California PDB Procurement Best Practices',
    sections: [
      {
        type: 'list',
        title: '10 Best Practices',
        items: [
          'Start with a delivery method feasibility study',
          'Secure executive and board alignment before RFQ release',
          'Invest in RFQ quality — scope clarity drives SOQ quality',
          'Train evaluation panel members before SOQ opening',
          'Document scoring contemporaneously with clear rationale',
          'Establish collaborative workshop cadence in Phase 1',
          'Define agency budget cap before design progresses too far',
          'Pre-negotiate open-book markup and fee structures',
          'Pre-plan off-ramp scenarios with counsel',
          'Assign experienced PM — or engage an Owner\'s Representative',
        ],
      },
    ],
  },
  'case-studies': {
    slug: 'case-studies',
    title: 'Case Studies',
    description: 'Progressive Design-Build case studies — Griffin Structures portfolio and industry patterns.',
    h1: 'Progressive Design-Build Success Stories',
    sections: [
      {
        type: 'cards',
        items: [
          { title: 'Irvine Great Park Framework Plan', description: 'City of Irvine — Parks/Cultural — Construction Management for 1,300-acre iconic destination.' },
          { title: 'Arrowhead Regional Medical Center', description: 'San Bernardino County — Healthcare — Ongoing program and construction management.' },
          { title: 'West Hollywood City Hall', description: 'City of West Hollywood — Municipal — Civic landmark project delivery.' },
          { title: 'Industry Pattern: Medical Center Expansion', description: 'PDB for ER/surgical expansion with underground utility unknowns and phased occupancy.' },
          { title: 'Industry Pattern: Water Treatment Upgrade', description: '$75M+ municipal treatment facility with evolving regulatory requirements.' },
          { title: 'Industry Pattern: Interchange / Transit', description: '$200M regional transportation agency interchange delivered via PDB open-book costing.' },
        ],
      },
    ],
  },
  resources: {
    slug: 'resources',
    title: 'Resources Hub',
    description: 'California Progressive Design-Build resources — statutes, checklists, templates, and external links.',
    h1: 'California Progressive Design-Build Resources',
    sections: [
      {
        type: 'list',
        title: 'Griffin Resources',
        items: [
          'California PDB Statute Quick Reference',
          'RFQ/SOQ Template Checklist',
          'Phase 1 Evaluation Matrix Sample',
          'GMP Review Worksheet',
          'Off-Ramp Decision Tree',
          'Legislative Report Outline',
        ],
      },
      {
        type: 'list',
        title: 'External Resources',
        items: [
          'Caltrans PD-B Program — dot.ca.gov/programs/design/progressive-design-build-pd-b',
          'California Public Contract Code — leginfo.legislature.ca.gov',
          'APWA Southern California Chapter — southernca.apwa.org',
        ],
      },
      {
        type: 'callout',
        variant: 'info',
        title: 'Events',
        content: 'Griffin Structures presents on Progressive Design-Build at APWA Sacramento and Southern California chapter events. Contact us to schedule a board workshop.',
      },
    ],
  },
}

export function getPageContent(slug: string): PageContent | undefined {
  return pages[slug]
}

export function getAllPageSlugs(): string[] {
  return Object.keys(pages)
}
