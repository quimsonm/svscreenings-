# Signal View Screenings - Website Rebuild

## Project Overview
Full rebuild of svscreenings.com — a **premium concierge-style** preventative healthcare / medical ultrasound screening service in Las Vegas, NV. Replacing the current single-page Carrd site with a polished, multi-page website that conveys high-end white-glove service while maintaining the trustworthiness and empathy expected of healthcare.

## Design Approach
We are using the **frontend design skill** to develop a visually compelling, trust-building website that catches customer attention and maximizes appointment bookings. The aesthetic should feel like a premium concierge health service — elevated, professional, warm, and empathetic. Not clinical or cold.

## Brand Positioning
- **Premium concierge healthcare** — not budget screenings, but a white-glove experience
- Professional with empathy — patients should feel cared for, not sold to
- Trust is paramount — credentials, reviews, professionalism
- Convey exclusivity and quality while remaining approachable

## Business Details
- **Company:** Signal View Screening Services
- **Domain:** svscreenings.com
- **Industry:** Preventative healthcare / medical ultrasound screenings
- **Location:** Frontline Medical Group, 3150 N Tenaya Wy Suite 400, Las Vegas, NV 89128
- **Hours:** Saturdays 9am – 1pm
- **Phone:** 702.843.6612
- **Payments:** Square (required — all booking flows must integrate with Square for payment)
- **Booking:** Custom on-site form → email notification → Square for payment processing
- **Google Business:** Recently set up, collecting reviews
- **Google Reviews Link:** https://g.page/r/CbQeS1Xa-WUYEBM/review
- **Service Area:** Greater Las Vegas (Henderson, Summerlin, North Las Vegas, etc.)

## Key Priorities (Ranked)
1. Fix layout — content visible and well-spaced on all screen sizes
2. CTA above the fold — "Book Your Screening" immediately visible
3. Sticky navigation with Book Now + Phone
4. Pricing visible early — don't bury packages
5. Trust signals — Google reviews, credentials, stats
6. Multi-page structure (Home, Services, Pricing, About, Contact, FAQ)
7. SEO optimization — structured data, rich meta, keywords
8. Mobile-first responsive design
9. Fast loading (<2s)
10. Analytics & tracking (to be set up — GA4, GTM, Meta Pixel)

## Tech Stack
- **Framework:** Astro (static-first, fast, SEO-friendly — ideal for a content-driven conversion site)
- **Styling:** Tailwind CSS
- **Hosting:** Self-hosted on ZimaOS server
- **Images:** AI-generated (Nano Banana 2) + stock imagery
- **Logo:** To be created as SVG
- **Booking:** Custom on-site booking form (name, phone, email, screening, preferred date/time) → email notification to owner. Square used for payment processing only.
- **Forms:** Lightweight email-based (no Square forms)
- **Analytics:** GA4 + GTM + Meta Pixel (to be set up)
- **Blog/CMS:** Not now, but architecture should allow for future addition

## Design Direction
- **Aesthetic:** Premium concierge healthcare — think luxury wellness clinic, not strip-mall urgent care
- **Colors:** Keep dark navy/teal (`#004D78`) as primary, add warm gold or refined accent for CTAs
- **Typography:** Clean, elegant sans-serif (Inter, DM Sans, or similar — upgrade from Lato)
- **Imagery:** Full-width hero banners, professional/AI-generated medical imagery, warm tones
- **Corners:** Subtle rounded (12-16px), not pill-shaped
- **Icons:** Custom SVG medical icons, not photo thumbnails
- **Animations:** Subtle, purposeful fade-in/scroll reveals
- **Tone:** Warm, empathetic, confident — "We care about your health" not "Buy now"

## Square Booking Links
- General: `https://book.squareup.com/appointments/65hfsxzse0og5r/location/L0YY91RC4GBKX/services`
- Vascular Health: `...services/NFKPOQ3TZNUTK3EXQMH7YDQ3`
- Heart Health: `...services/HCX6T2SKQJIWQJ5GI64CLPFC`
- Leg Veins: `...services/PA57N7OOXL7Z3Y6QCFZBKTD6`

## Services Offered
1. Aorta Aneurysm Screening
2. Carotid Artery Screening
3. Echocardiogram
4. Peripheral Artery Disease Screening
(DVT & Varicose Veins — dropped for now, may reintroduce later)

## Pricing Model
- Packages only — no a la carte single screenings (protects revenue per visit)

## Packages (NEW — Premium Concierge Pricing)
1. **Essential Wellness — $199**
   - Carotid Ultrasound
   - Aorta Ultrasound
   - Leg Arterial Ultrasound

2. **Executive Heart Package — $349**
   - Everything in Essential Wellness PLUS
   - Cardiac (Echo) Ultrasound Screening

3. **The Gold Standard — $597**
   - ALL ultrasound screenings included
   - **We come to you** — anywhere in the Greater Las Vegas area
   - Scheduled at your convenience (reasonable daytime/evening hours, based on tech availability)
   - Full white-glove concierge experience
   - Screening reports signed by a board-certified physician

## Staff & Credibility
- Highly trained sonographers with 5+ years of experience
- 10+ years partnering with Las Vegas clinics for full diagnostic ultrasounds
- Recently launched screening services — position as seasoned experts bringing hospital-grade diagnostics direct to patients
- Gold Standard package includes screening reports signed by a board-certified physician (keep general, don't name specific doctors)

## Contact
- **Email:** info@svscreenings.com (may change in future)
- **Phone:** 702.843.6612

## Service Area
- Greater Las Vegas metro: Las Vegas, Henderson, Summerlin, North Las Vegas
- Important for SEO and customer clarity — this is a local service

## Commands
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview production build

## Reference
- Full rebuild brief: `svscreenings rebuild.rtf` in project root
