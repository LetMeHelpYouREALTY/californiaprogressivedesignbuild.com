# V0 Prompt: California Progressive Design-Build — 24-Page Site

> **Copy everything below the line into [v0.dev](https://v0.dev) to generate the full site.**

---

Build a production-ready, 24-page marketing and education website for **Griffin Structures** focused on **California Progressive Design-Build (PDB)**. The site positions Griffin as the owner's representative and program/construction management expert helping public agencies navigate California's expanded PDB authority.

## Tech & Quality Bar

- Next.js 15 App Router, React 19, TypeScript, Tailwind CSS, shadcn/ui
- Mobile-first, WCAG 2.1 AA, Core Web Vitals optimized
- JSON-LD on every page: `Organization`, `LocalBusiness`, `WebPage`, `FAQPage` where applicable
- Shared layout: sticky header, footer with NAP, breadcrumb on inner pages
- Reusable sections: Hero, StatsBar, ComparisonTable, ProcessTimeline, CTABand, FAQAccordion, ResourceCard, CaseStudyCard, TeamQuote, LegalCallout, ContactForm
- No lorem ipsum — use the real copy outlines below

---

## Brand

| Token | Value |
|-------|-------|
| Company | Griffin Structures |
| Tagline | Excellence in Project Delivery |
| Primary | `#1B365D` (deep navy) |
| Secondary | `#2C5282` (steel blue) |
| Accent | `#C8922A` (warm gold — construction prestige) |
| Neutral | `#F7F8FA`, `#64748B`, `#0F172A` |
| Typography | Headings: **DM Sans** or **Inter** bold; Body: **Inter** |
| Tone | Authoritative, collaborative, public-sector trusted — not salesy |
| Imagery | California civic infrastructure, healthcare campuses, parks, construction collaboration, RFQ workshops — professional stock; no cheesy hard-hat clichés |

### NAP (match exactly sitewide + schema)

```
Griffin Structures, Inc.
1 Technology Drive, Building I, Suite 829
Irvine, CA 92618
Phone: (949) 474-0431
Secondary office: 1850 Warburton Ave, Suite 120, Santa Clara, CA 95050
Web: https://griffinstructures.com
Founded: 1981
```

### Key People to Reference

- **Jon Hughes, CCM, DBIA** — President; APWA presenter on Progressive Design-Build
- **Kelly Boyle** — EVP Business Development; 25+ years public sector delivery; APWA SoCal Top Leader of the Year 2024 (Private Sector); direct line for consultation: (949) 324-8880
- **Gary Chubb** — Project Executive; expertise in PDB, P3, Mass Timber, IPD
- **Roger Torriero** — Chairman & CEO; Design-Build Institute member; 45+ years

---

## Global Navigation (24 pages)

```
Home
├── What Is PDB
│   ├── Overview (/what-is-progressive-design-build)
│   ├── vs Other Methods (/pdb-vs-design-build-vs-design-bid-build)
│   └── Two-Phase Model (/two-phase-delivery-model)
├── California Law
│   ├── Legal Framework (/california-legal-framework)
│   ├── SB 706 (/sb-706-local-agencies)
│   ├── SB 617 (/sb-617-transit-agencies)
│   ├── Water Agency Authority (/water-agency-pdb-authority)
│   └── Caltrans PDB (/caltrans-progressive-design-build)
├── Process
│   ├── Phase 1: RFQ & Selection (/phase-1-qualifications-selection)
│   ├── Phase 2: GMP & Open Book (/phase-2-gmp-open-book-pricing)
│   ├── Off-Ramp Provisions (/off-ramp-provisions)
│   └── Workforce Requirements (/skilled-trained-workforce)
├── By Sector
│   ├── Healthcare (/pdb-healthcare-projects)
│   ├── Municipal & Civic (/pdb-municipal-civic)
│   ├── Parks & Cultural (/pdb-parks-recreation-cultural)
│   └── Education (/pdb-education-campus)
├── Resources
│   ├── Eligibility & Thresholds (/eligible-agencies-thresholds)
│   ├── Legislative Reporting (/legislative-reporting-compliance)
│   ├── Procurement Best Practices (/procurement-best-practices)
│   └── Case Studies (/case-studies)
└── Contact (/contact)
```

Primary CTA sitewide: **Schedule a PDB Consultation** → `/contact`
Secondary CTA: **Download California PDB Guide** (lead capture modal)

---

## PAGE 1 — Home (`/`)

**Hero**
- H1: *California Progressive Design-Build — Deliver Complex Public Projects with Confidence*
- Subhead: Griffin Structures guides cities, counties, special districts, transit agencies, and healthcare authorities through every phase of California's two-phase Progressive Design-Build process — from RFQ to GMP to construction closeout.
- CTAs: Schedule Consultation | Explore the Process
- Hero visual: Split — left copy, right animated 2-phase timeline diagram

**Stats bar**
- 40+ Years Owner Representation
- $3B+ in Regional Project Delivery (Griffin Holdings portfolio)
- 6 Delivery Methods Supported including PDB
- 2 California Offices — Irvine & Santa Clara

**Section: Why California Agencies Are Adopting PDB**
3 cards:
1. **Early Collaboration** — Design-builder engaged at earliest feasible stage after conceptual design
2. **Open-Book GMP** — Transparent cost negotiation before construction commitment
3. **Off-Ramp Flexibility** — Agency protection if parties cannot agree on price

**Section: Expanded 2024 Authority**
Brief explainer: SB 706 (cities/counties/special districts), SB 617 (transit), SB 991/AB 1845 (water) — up to 10 projects >$5M per agency through Jan 1, 2030

**Section: Featured Sectors** — 4 linked cards to sector pages

**Section: Griffin's Role**
"As your Owner's Representative, Griffin acts solely in your interest — delivery method evaluation, RFQ/RFP development, evaluation panel facilitation, GMP negotiation support, and construction oversight."

**Section: Latest Insights** — 3 resource cards linking to inner pages

**FAQ (3 items)** with FAQ schema

**CTA band** — Kelly Boyle quote + phone (949) 324-8880

---

## PAGE 2 — What Is Progressive Design-Build? (`/what-is-progressive-design-build`)

**H1:** What Is Progressive Design-Build?

Define PDB per California Public Contract Code:
> A project delivery process in which design, preconstruction services, and construction are procured from a single design-build entity selected through qualifications-based selection at the earliest feasible stage. The entity completes design and preconstruction sufficient to establish a Guaranteed Maximum Price (GMP); the owner then decides whether to proceed.

**Visual:** Circular diagram — Owner ↔ Design-Builder collaboration loop

**Key characteristics (6 icon cards):**
- Qualifications-based team selection (not low bid)
- Early contractor/designer involvement
- Collaborative scope development
- Open-book cost transparency
- GMP negotiated mid-project
- Contractual off-ramp if no GMP agreement

**When PDB makes sense:**
- Complex, evolving scope
- Budget uncertainty at award
- Need for constructability input early
- Stakeholder-heavy public projects
- Healthcare, civic, parks, water, transit

**When to consider alternatives** — brief honest comparison link to page 3

**Sidebar:** "Griffin helps you determine if PDB is right for your project" → Contact CTA

---

## PAGE 3 — PDB vs Design-Build vs Design-Bid-Build (`/pdb-vs-design-build-vs-design-bid-build`)

**H1:** Compare California Delivery Methods

**Comparison table (responsive):**

| Factor | Design-Bid-Build | Design-Build | Progressive Design-Build |
|--------|------------------|--------------|--------------------------|
| Team selection | Low bid (construction) | Qualifications or best value | Qualifications-based at earliest stage |
| Design completion at award | 100% (bid phase) | ~30% bridge design typical | Conceptual / early design |
| Price at award | Construction bid sum | Lump sum at award | No construction price at award |
| Cost transparency | Bid breakdown | Fixed price | Open-book → GMP |
| Off-ramp | N/A | Limited | Statutory + contractual |
| Owner effort | Moderate | Moderate–High | High (collaborative) |
| Best for | Well-defined scope | Defined program, schedule pressure | Complex, evolving, high-stakes public work |

**Decision flowchart** (interactive accordion or mermaid-style visual)

**Griffin callout:** "We evaluate all six delivery methods — including CM at Risk, Multi-Prime, and P3 — and recommend the approach aligned to your goals, not ours."

---

## PAGE 4 — Two-Phase Delivery Model (`/two-phase-delivery-model`)

**H1:** California's Two-Phase Progressive Design-Build Model

**Full-width timeline:**

**Phase 1 — Design & Preconstruction Services**
- RFQ issued
- SOQ submissions (certified under penalty of perjury)
- Qualifications evaluation & team selection
- Preconstruction agreement executed
- Collaborative design development (concept → schematic → design development)
- Open-book estimating
- Risk register & constructability reviews
- GMP proposal submitted

**Decision Gate** — Owner accepts GMP, negotiates, or exercises off-ramp

**Phase 2 — Design Completion & Construction**
- GMP amendment / Phase 2 agreement
- Final design & construction documents
- Permitting & procurement of trade partners
- Construction & commissioning
- Closeout & warranty

**Download:** "Phase Gate Checklist for Agency Project Managers" (email gate)

---

## PAGE 5 — California Legal Framework (`/california-legal-framework`)

**H1:** California Progressive Design-Build — Legal Framework

**Overview map** of statutory chapters:
- PCC Article 6.7 §10215–10215.8 — State department projects
- PCC Chapter 4.1 §22170–22174 — Local agency PDB
- PCC §22185–22185.11 — Additional local agency provisions
- SB 706, SB 617, SB 991, AB 1845 — Expansion bills

**Timeline graphic:** 2022 water authority → 2023 SB 991/AB 1845 → 2024 SB 706/SB 617 → 2030 sunset

**Agency type matrix** — who can use PDB, project limits, exclusions (state-owned facilities)

**Disclaimer footer:** "Information is educational, not legal advice. Consult agency counsel for project-specific compliance."

---

## PAGE 6 — SB 706: Local Agencies (`/sb-706-local-agencies`)

**H1:** SB 706 — Progressive Design-Build for Cities, Counties & Special Districts

**Effective:** January 1, 2024 | **Sunset:** January 1, 2030

**Key provisions:**
- Up to **10 public works projects** per agency
- Minimum **$5,000,000** per project
- Excludes state-owned or state-operated facilities
- Qualifications-based RFQ required
- Skilled & trained workforce commitment required
- SOQ information certified under **penalty of perjury**
- Legislative report due **December 31, 2028**

**Procurement steps** (numbered list matching PCC §22171)

**Griffin services for SB 706 agencies:**
- Delivery method feasibility
- RFQ/SOQ template development
- Evaluation criteria & scoring matrices
- Interview panel facilitation
- Preconstruction oversight

**FAQ (5 items)** — eligibility, project counting, cost threshold, reporting

---

## PAGE 7 — SB 617: Transit Agencies (`/sb-617-transit-agencies`)

**H1:** SB 617 — Progressive Design-Build for Transit & Regional Transportation

Same structure as SB 706 page, tailored to:
- Transit agencies, JPAs, regional transportation agencies
- Effective Jan 1, 2024
- Interchange, station, maintenance facility, guideway examples
- Coordination with FTA/state funding requirements callout

---

## PAGE 8 — Water Agency PDB Authority (`/water-agency-pdb-authority`)

**H1:** Progressive Design-Build for California Water Agencies

Cover **SB 991** and **AB 1845** (effective Jan 1, 2023):
- Water production, storage, supply, treatment, distribution projects
- Preceded broader 2024 expansion

**Use cases:** treatment plant upgrades, reservoir work, pipeline complexes, recycled water facilities

**Case study teaser:** Municipal water treatment $75M+ upgrade scenario (generic, no false claims)

---

## PAGE 9 — Caltrans Progressive Design-Build (`/caltrans-progressive-design-build`)

**H1:** Caltrans Progressive Design-Build (PD-B) Program

Content from Caltrans PD-B program:
- State highway/infrastructure 2-phase variation of design-build
- Design up to 100%, then GMP for final design + construction
- Link to Caltrans PD-B resources (external)
- Note: Griffin supports **local agency** owners; Caltrans page is educational for municipal clients building adjacent infrastructure

---

## PAGE 10 — Phase 1: Qualifications Selection (`/phase-1-qualifications-selection`)

**H1:** Phase 1 — RFQ, SOQ & Qualifications-Based Selection

**RFQ must include (per statute):**
1. Basic scope, needs, expected cost range
2. Evaluation methodology
3. Final selection procedure
4. Standard SOQ template with team experience, licenses, bonding capacity
5. Skilled & trained workforce commitment

**Griffin-led activities:**
- RFQ drafting & industry outreach strategy
- SOQ compliance review for proposers (owner-side)
- Evaluation panel training
- Best-value scoring facilitation
- Conflict-of-interest protocols

**Checklist component** — interactive 12-item Phase 1 readiness checklist

**Warning callout:** "Price must not be evaluated in Phase 1 selection."

---

## PAGE 11 — Phase 2: GMP & Open-Book Pricing (`/phase-2-gmp-open-book-pricing`)

**H1:** Phase 2 — Guaranteed Maximum Price & Open-Book Negotiation

**Explain open-book:**
- Labor, materials, subcontractor quotes visible to owner
- Markups agreed in preconstruction terms
- Iterative estimate validation as design progresses
- GMP = direct costs + agreed fee structure

**GMP negotiation topics:**
- Scope validation
- Allowances & contingencies
- Schedule integration
- Escalation assumptions
- Change order protocols post-GMP

**Visual:** Sample open-book cost stack diagram (sanitized mock)

**Griffin value:** Independent GMP review, comparable project benchmarking, negotiation support

---

## PAGE 12 — Off-Ramp Provisions (`/off-ramp-provisions`)

**H1:** Off-Ramp Provisions — Protecting the Public Owner

**Why off-ramps matter:**
- PDB award does not include construction price
- Statutory flexibility to retain different entity if GMP fails
- Reduces owner risk vs traditional design-build lump sum

**Best practices (Hanson Bridgett / industry aligned):**
1. Robust off-ramp requiring 100% CDs if agency exits
2. Clear agency budget — design-builder designs to budget
3. Collaborative contracting culture on agency team
4. Document decision points & meeting cadence

**Scenario cards:**
- GMP exceeds budget → value engineering workshop
- Parties cannot agree → off-ramp to design-bid-build or new procurement
- Partial off-ramp → complete docs, rebid construction

---

## PAGE 13 — Skilled & Trained Workforce (`/skilled-trained-workforce`)

**H1:** Skilled & Trained Workforce Requirements in California PDB

Per PCC §22171(b): Design-build entity must commit that entity and all subcontractors use **skilled and trained workforce** for apprenticeable building/construction trades (Chapter 2.9 §2600+)

**Owner action items:**
- Verify commitment in SOQ
- Flow-down to subcontracts
- Document compliance during construction

**FAQ:** DSA, prevailing wage interaction, PLA considerations (high-level, counsel referral)

---

## PAGE 14 — Eligible Agencies & Thresholds (`/eligible-agencies-thresholds`)

**H1:** Who Can Use Progressive Design-Build in California?

**Interactive eligibility wizard** (simple 4-question filter):
1. Agency type → 2. Project cost → 3. State vs local facility → 4. Projects used to date

**Results:** Eligible / May need counsel / Consider alternative delivery

**Table:** Agency type | Statute | Max projects | Min $ | Sunset

---

## PAGE 15 — Legislative Reporting & Compliance (`/legislative-reporting-compliance)

**H1:** Legislative Reporting Requirements for California PDB Projects

**Deadline:** December 31, 2028 — report to policy & fiscal committees

**Report must describe:**
- Projects awarded using PDB
- Outcomes, lessons learned (per statute intent)

**Griffin support:** Project data compilation, delivery method documentation, closeout reporting templates

---

## PAGE 16 — Healthcare PDB Projects (`/pdb-healthcare-projects`)

**H1:** Progressive Design-Build for Healthcare & Hospital Projects

**Why healthcare fits PDB:**
- Complex MEP, infection control, phased occupancy
- Unknown conditions (utilities, tie-ins)
- Regulatory evolution during design

**Reference patterns:** Large patient tower PDB examples (UC Davis California Tower model — 950K SF; collaborative budget validation)

**Griffin experience callout:**
- Public healthcare districts & county medical centers
- Arrowhead Regional Medical Center (San Bernardino County) — ongoing CM
- Program management from needs assessment through occupancy

**Services list** + CTA

---

## PAGE 17 — Municipal & Civic (`/pdb-municipal-civic`)

**H1:** Progressive Design-Build for Municipal & Civic Infrastructure

**Project types:** City halls, public safety, libraries, community centers, civic centers

**Griffin projects referenced:**
- West Hollywood City Hall
- Riverside Family Law Court
- Delhi Community Center
- City of Santa Ana Development Services Center

**Kelly Boyle APWA recognition** — Top Leader of the Year 2024

---

## PAGE 18 — Parks, Recreation & Cultural (`/pdb-parks-recreation-cultural`)

**H1:** Progressive Design-Build for Parks, Recreation & Cultural Facilities

**Featured case study: Irvine Great Park Framework Plan**
- Client: City of Irvine
- ~1,300 acres; iconic destination vision
- Botanical Garden, Veterans Memorial, Heart of the Park, Sports Park, Cultural Terrace West
- Griffin role: Construction Management

**Related projects grid:** Corona City Park, Great Park Live, Great Park Ice & FivePoint Arena

---

## PAGE 19 — Education & Campus (`/pdb-education-campus`)

**H1:** Progressive Design-Build for Schools & Campus Projects

**Example pattern:** LA County / school district stormwater capture — PDB for complex multi-stakeholder campus work above $5M threshold

**Benefits for education agencies:**
- Occupied campus phasing
- DSA coordination
- Community stakeholder alignment

---

## PAGE 20 — Owner's Representative Role (`/owners-representative-pdb`) 
*(Note: use slug `/owners-representative-pdb` — counts toward 24 with Contact as 24)*

**H1:** The Owner's Representative in Progressive Design-Build

**Griffin as independent advisor:**
- No conflict — not designer or builder
- Delivery strategy evaluation
- Procurement planning & RFQ/RFP
- Evaluation panel facilitation
- Contract negotiation support
- Design & construction oversight
- Budget & schedule management
- Stakeholder & grant coordination

**Quote:** Jon Hughes on APWA presentations re: PDB successes

**Team credentials:** CCM, DBIA, CPA, licensed broker, Harvard IPM

---

## PAGE 21 — Procurement Best Practices (`/procurement-best-practices`)

**H1:** California PDB Procurement Best Practices

**10 practice cards:**
1. Start with delivery method study
2. Secure executive & board alignment early
3. Invest in RFQ quality — scope clarity
4. Train evaluation panel before SOQ opening
5. Document scoring contemporaneously
6. Establish collaborative workshop cadence in Phase 1
7. Define budget cap before design progresses
8. Pre-negotiate open-book markup & fee structure
9. Pre-plan off-ramp scenarios
10. Assign experienced owner PM — or engage Owner's Rep

**Download:** Procurement playbook PDF (lead form)

---

## PAGE 22 — Case Studies (`/case-studies`)

**H1:** Progressive Design-Build Success Stories

**Filterable grid** by sector: Healthcare | Municipal | Parks | Education | Water

**Featured cards (use Griffin portfolio where real; label industry examples as "Industry Pattern"):**

1. **Irvine Great Park Framework Plan** — Parks/Cultural — City of Irvine — CM
2. **Arrowhead Regional Medical Center** — Healthcare — San Bernardino County
3. **West Hollywood City Hall** — Municipal — Civic landmark delivery
4. **Industry Pattern: Medical Center Expansion** — PDB for ER/surgical wing with underground unknowns
5. **Industry Pattern: Water Treatment Upgrade** — $75M+ municipal PDB
6. **Industry Pattern: Interchange / Transit** — $200M regional agency PDB

Each card: Client | Location | Delivery Method | Griffin Role | Key outcome | Link to detail modal

---

## PAGE 23 — Resources Hub (`/resources`)

**H1:** California Progressive Design-Build Resources

**Resource library grid:**
- California PDB Statute Quick Reference (PDF)
- RFQ/SOQ Template Checklist
- Phase 1 Evaluation Matrix Sample
- GMP Review Worksheet
- Off-Ramp Decision Tree
- Legislative Report Outline
- External: Caltrans PD-B page, LegInfo PCC links, APWA SoCal events

**Events callout:** Griffin APWA presentations on PDB (Sacramento & SoCal chapters)

---

## PAGE 24 — Contact (`/contact`)

**H1:** Schedule a California PDB Consultation

**Split layout:**
- **Form:** Name, Agency/Organization, Title, Email, Phone, Agency Type (dropdown), Project Type, Est. Budget (dropdown), Message, "How did you hear about us?"
- **Direct contact:**
  - Kelly Boyle, EVP — (949) 324-8880 — Public sector & healthcare PDB inquiries
  - Main office — (949) 474-0431
  - Irvine HQ + Santa Clara office addresses
- **Map embed** — Irvine HQ pin
- **Hours:** Mon–Fri 8:00 AM – 5:00 PM PT

**Trust badges:** APWA member, DBIA, CMAA, ULI, 40+ years

**LocalBusiness schema** with both offices, geo, telephone, areaServed: California

---

## Global Components to Generate

1. **Header** — logo left, mega-menu matching sitemap, phone prominent, CTA button
2. **Footer** — 4-column links, NAP, social (LinkedIn), disclaimer, © 2026 Griffin Structures
3. **Breadcrumb** — all inner pages
4. **ProcessTimeline** — reusable 2-phase visual
5. **ComparisonTable** — delivery methods
6. **LegalCallout** — amber border, "Not legal advice"
7. **StatBar** — 4 metrics
8. **ContactForm** — server action ready
9. **LeadMagnetModal** — email capture for PDF guide
10. **SectorCard** — icon, title, description, link

---

## SEO Metadata (apply pattern to all pages)

**Home title:** California Progressive Design-Build Guide | Griffin Structures
**Home description:** Griffin Structures helps California public agencies navigate Progressive Design-Build — RFQ, GMP, open-book pricing & construction oversight. Irvine & Santa Clara.

Each inner page: `{Page Topic} | California Progressive Design-Build | Griffin Structures`

Include canonical URLs, Open Graph, Twitter card.

---

## Design Direction

- Clean, institutional-modern — think **public works annual report meets SaaS landing page**
- Generous whitespace, strong typographic hierarchy
- Subtle blueprint grid background on heroes (low opacity)
- Gold accent for CTAs and stat highlights
- Phase 1 / Phase 2 color coding: Phase 1 = blue, Phase 2 = gold, Decision Gate = neutral dashed
- Photography: warm California light, civic architecture
- Avoid: clip-art hard hats, generic skyscraper stock, dark mode default

---

## Output Request

Generate the **complete 24-page site** with:
- All routes listed above
- Shared layout & navigation
- Mobile-responsive design
- Placeholder images with descriptive alt text
- Working internal links across all pages
- Contact form UI
- Sample FAQ accordions on 5+ pages
- One comprehensive homepage and at least full content on pages 1–6; other pages may use consistent template with page-specific hero + 3–4 content sections

Start with the **Home page** and **global layout**, then build remaining routes.
