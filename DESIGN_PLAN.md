# Signal View Screenings — Full Design & Implementation Plan

---

## 1. Color Palette

### Primary Colors
| Role | Name | Hex | Usage |
|------|------|-----|-------|
| Primary | Deep Navy | `#004D78` | Header, footer, hero overlays, section backgrounds |
| Primary Dark | Midnight Navy | `#003352` | Hover states, footer background |
| Primary Light | Soft Teal | `#0A6FA0` | Links, secondary buttons, active states |

### Accent / CTA Colors
| Role | Name | Hex | Usage |
|------|------|-----|-------|
| Accent | Concierge Gold | `#C8963E` | Primary CTA buttons, pricing highlights, badge accents |
| Accent Hover | Deep Gold | `#A87A2F` | CTA hover state |
| Accent Light | Warm Champagne | `#F5E6C8` | Accent backgrounds, highlighted cards, Gold Standard tier glow |

### Neutrals
| Role | Name | Hex | Usage |
|------|------|-----|-------|
| Background | Warm Ivory | `#FAF8F5` | Page background (not pure white — warmer, more premium) |
| Surface | Soft White | `#FFFFFF` | Cards, modals, form inputs |
| Border | Warm Gray | `#E5E0DA` | Card borders, dividers |
| Text Primary | Charcoal | `#1A1A2E` | Headings, body text |
| Text Secondary | Slate | `#4A5568` | Captions, secondary text |

**Why warm ivory instead of white?** Pure white reads as clinical. The warm ivory (`#FAF8F5`) immediately signals "premium wellness" and creates a softer, more inviting experience.

---

## 2. Typography

### Font Pairing
| Role | Font | Why |
|------|------|-----|
| Headings | **DM Serif Display** | Warm editorial elegance — reads as "premium wellness" not "medical chart" |
| Body / UI | **DM Sans** | Clean geometric companion — modern without being sterile |

Both from the same DM family, so proportions are naturally harmonious. This pairing says: *"trusted expert who also cares about the experience."*

### Scale
| Token | Mobile | Desktop | Usage |
|-------|--------|---------|-------|
| Display | 36px | 56px | Hero headline |
| H1 | 30px | 44px | Page titles |
| H2 | 24px | 36px | Section headings |
| H3 | 20px | 24px | Card titles |
| Body Large | 18px | 20px | Lead paragraphs |
| Body | 16px | 16px | Standard copy |
| Button | 16px | 16px | CTA text (semibold) |
| Overline | 12px | 13px | Uppercase labels, badges |

---

## 3. Page-by-Page Wireframes

---

### 3.1 HOME PAGE (`/`)

The homepage must accomplish three things in the first 5 seconds: communicate what you do, establish trust, and present a clear path to booking.

**STICKY HEADER** (all pages)
- Left: SVG logo
- Center: Nav links — Services, Pricing, About, FAQ, Contact
- Right: Phone number + gold "Book Your Screening" button
- On scroll: gains subtle shadow, slightly reduces height
- Mobile: Logo + gold "Book" button + hamburger menu

**HERO** (85vh desktop, 70vh mobile)
- Full-width with AI-generated image (warm, well-lit screening environment)
- Dark gradient overlay from left
- Overline badge: `PREMIUM CONCIERGE SCREENINGS IN LAS VEGAS` (gold)
- H1: *"Hospital-Grade Screenings. White-Glove Experience."*
- Subheading: "Non-invasive ultrasound screenings that detect heart disease, stroke risk, and vascular conditions early — when treatment is most effective. No referrals needed."
- Two CTAs: Gold "Book Your Screening" + Outlined "View Our Packages"
- Trust strip: "10+ Years Experience" | "5-Star Rated" | "Saturdays in Las Vegas"

**TRUST BAR**
- 4 items with gold icons: "10+ Years" / "Hospital-Grade Equipment" / "Certified Sonographers" / "Results Within 48 Hours"

**HOW IT WORKS — 3 Steps**
- Heading: *"Simple. Fast. Life-Saving."*
- Step 1: Book Online → Step 2: Visit Our Clinic → Step 3: Get Your Results
- Connected by dotted line on desktop
- Gold CTA at bottom

**SCREENING SERVICES OVERVIEW**
- Navy background, white text
- Heading: *"Comprehensive Screening Exams"*
- 5 cards (white, rounded, shadowed) with SVG icons: Aorta, Carotid, Echo, PAD, DVT
- Each card: icon, title, 2-line description, "Learn More" link

**PRICING PREVIEW**
- Heading: *"Choose Your Screening Package"*
- Sub: "Transparent pricing. No hidden fees. No referrals needed."
- 3 cards side by side:
  - **Essential Wellness — $199**: Clean card, gold outline button
  - **Executive Heart — $349**: Elevated card, "MOST POPULAR" gold badge, solid gold button
  - **The Gold Standard — $597**: Premium gold border, "WHITE-GLOVE" badge, highlights "We come to you" + "Physician interpretation included"

**WHY SCREENING MATTERS**
- 2-column: stats/copy left, image right
- *"80% of strokes are preventable with early detection"*
- Bullet points: No referral required, results in plain language, 30-60 min, HSA/FSA eligible

**TESTIMONIALS**
- Heading: *"What Our Patients Say"*
- Carousel with review cards (quote, name, 5 gold stars)
- Google Reviews badge

**CTA BANNER**
- Full-width navy with gold CTA
- *"Your Health Can't Wait"*
- "Limited Saturday appointments available."

**FOOTER**
- Midnight Navy background, 4 columns:
  - Logo + tagline
  - Quick Links
  - Contact info (address, phone, hours)
  - Service Area (Las Vegas, Henderson, Summerlin, North Las Vegas)
- Bottom bar: Copyright + Privacy Policy + Terms

---

### 3.2 SERVICES PAGE (`/services`)

**Hero**: Short (40vh), navy. H1: *"Our Screening Services"*

**5 Service Detail Sections** (alternating layout):
Each service gets its own full section with alternating image left/right:
- Large SVG icon (gold, 64px)
- H2: Service name
- "What It Is" — 1-2 sentence description
- "Why It Matters" — medical context in accessible language
- "Who Should Get Screened" — risk factor bullet list
- "What to Expect" — screening experience description
- Gold badges: "Included in: Essential Wellness, Executive Heart, Gold Standard"
- AI-generated image specific to each screening area

**Package Comparison CTA**: *"Find the Right Package for You"* → links to /pricing

**FAQ Snippet**: 3-4 service-related questions in accordion

---

### 3.3 PRICING PAGE (`/pricing`)

**Hero**: *"Transparent, Simple Pricing"* / "No hidden fees. No referrals. No insurance headaches."

**Package Cards** (expanded detail):
- Each card includes: full screening list with descriptions, "Best for:" line, duration, location, CTA
- Executive Heart centered and elevated as recommended tier
- Gold Standard gets premium gold styling + highlights for mobile service and physician interpretation

**Comparison Table**:
- Rows: Each screening + features (physician interpretation, mobile service, duration)
- Columns: Essential / Executive / Gold Standard
- Check/X marks, prices at bottom

**Value Justification**:
- *"Why These Screenings Are Worth Every Dollar"*
- Stats: "Average ER visit for a stroke: $20,000+"
- HSA/FSA eligible mention

**Booking Form**:
- Fields: Name, Phone, Email, Package (dropdown), Preferred Date (Saturdays only), Preferred Time, Notes
- Gold submit: "Request Your Appointment"
- "We'll confirm within 24 hours. Payment via Square."
- Alternative: "Prefer to call? 702.843.6612"

---

### 3.4 ABOUT PAGE (`/about`)

**Hero**: *"About Signal View Screenings"* / "A decade of diagnostic experience. Now available directly to you."

**Our Story**: 10+ years with Las Vegas clinics → recognized patients weren't getting screened → launched Signal View to bring hospital-grade diagnostics directly to patients

**Team/Credentials**: Sonographer cards with credentials, 5+ years experience badges

**Our Commitment**: 3-column grid — Hospital-Grade Equipment / Certified Professionals / Results You Understand

**Service Area**: Google Maps embed, list of areas, Gold Standard mobile coverage note

---

### 3.5 CONTACT PAGE (`/contact`)

**Hero**: *"Get in Touch"*

**2-column layout**:
- Left: Phone (clickable), hours, address, Google Maps embed
- Right: Contact form (Name, Phone, Email, Subject dropdown, Message)

**Quick Booking CTA**: Navy banner, gold button

---

### 3.6 FAQ PAGE (`/faq`)

**Hero**: *"Frequently Asked Questions"*

**Accordion sections**:
- **About Our Screenings** (6 questions)
- **Pricing & Insurance** (5 questions)
- **Booking & Location** (5 questions)
- **Medical & Results** (4 questions)

Each uses FAQPage schema markup for Google rich snippets.

**CTA**: "Didn't find your answer?" → Contact link

---

## 4. Logo Concept — "Signal Wave Shield"

**Mark (Icon):**
- Circular badge/shield shape (slightly squared circle — "squircle")
- Inside: 2-3 concentric ultrasound wave arcs from a focal point, suggesting both ultrasound signal and a pulse wave
- Arcs integrate with a subtle "V" shape (for "View") that also reads as a check mark — symbolizing health verification
- Color: Gold arcs on Navy background

**Wordmark:**
- "SIGNAL VIEW" — DM Sans Medium, tracked, all caps
- "SCREENINGS" — DM Sans Regular, tracked wider, smaller
- Navy on light backgrounds, white on dark

**Variations:** Full lockup, mark-only (favicon/mobile), white-on-navy, gold-on-white

---

## 5. Key Conversion Strategy

| Element | Where | Purpose |
|---------|-------|---------|
| Sticky header CTA | Every page, always visible | Never more than 0 scrolls from booking |
| Hero dual CTA | Homepage top | Immediate action path |
| Pricing on homepage | Mid-page | Don't make them hunt for prices |
| Trust bar | Below hero | Instant credibility |
| How It Works | Early homepage | Remove anxiety about the unknown |
| Testimonials | Post-education | Social proof after they understand the service |
| CTA banner | Pre-footer | Final push before they leave |
| Mobile sticky CTA | Bottom bar on phones | Thumb-friendly booking on mobile |
| Urgency | Near CTAs | "Limited Saturday Availability" (true — 4 hours/week) |
| Value stats | Pricing page | "$20K+ ER visit vs $199 screening" |

---

## 6. Mobile-First Responsive Strategy

| Breakpoint | Adaptation |
|------------|------------|
| < 768px (mobile) | Single column, hamburger menu, stacked cards, sticky bottom "Book" bar |
| 768px+ (tablet) | 2-column grids, full nav visible |
| 1024px+ (desktop) | 3-column grids, hero split layout, comparison table |

- All buttons: minimum 48px tap target
- Form inputs: 16px font (prevents iOS auto-zoom)
- Images: WebP + JPEG fallback, srcset for retina
- Touch carousel with CSS scroll-snap

---

## 7. SEO Strategy

**Structured Data:** LocalBusiness + MedicalBusiness schema on home, FAQPage schema on FAQ, MedicalProcedure schema on services

**Top Keyword Targets:**
1. "ultrasound screening las vegas"
2. "preventative health screening las vegas"
3. "echocardiogram screening las vegas"
4. "carotid artery screening las vegas"
5. "mobile ultrasound screening las vegas"
6. "concierge health screening"

**Local SEO:** Consistent NAP across all pages, Google Maps embeds, service area mentions, Google Business Profile alignment

---

## 8. Tech Architecture

**Stack:** Astro + Tailwind CSS, self-hosted on ZimaOS

**Booking Flow:**
1. Custom form on site captures appointment request
2. Email notification sent to you
3. Confirmation page shows "Complete Payment" button → Square payment link
4. You confirm and process via Square

**Project Structure:**
```
src/
├── layouts/BaseLayout.astro
├── pages/ (index, services, pricing, about, contact, faq)
├── components/ (Header, Footer, PricingCard, ServiceCard, etc.)
├── data/ (siteConfig, services, packages, faq, testimonials)
├── icons/ (custom SVG medical icons)
├── styles/global.css
└── assets/images/
```

**Performance Targets:** <500KB initial load, LCP <2s, minimal JS (only for menu, carousel, forms)

---

## 9. Implementation Phases

| Phase | Work | 
|-------|------|
| **1 — Foundation** | Astro setup, Tailwind config, fonts, BaseLayout, Header, Footer, utility components |
| **2 — Home Page** | Hero, TrustBar, HowItWorks, ServiceCards, PricingCards, Testimonials, CTABanner |
| **3 — Interior Pages** | Services, Pricing (with booking form), About, Contact, FAQ |
| **4 — Polish** | Logo SVG, custom icons, AI imagery, scroll animations, form endpoints, analytics |
| **5 — Launch Prep** | Lighthouse audit, accessibility check, cross-browser testing, deploy to ZimaOS, DNS/SSL |

---

*Ready to build on your go.*
