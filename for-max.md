# Signal View Screenings — Action Plan for Max

> **Last updated: 2026-04-18**
> Items marked ✅ are DONE. Items marked 🔄 are IN PROGRESS. Items marked ⬜ are TODO.
> This file is the source of truth for the other Claude Code instance (Max's personal assistant).

---

## What We Built (Complete Website)

- 11-page website live at **svscreenings.com** (hosted on GitHub Pages)
- GitHub repo: `quimsonm/svscreenings-`
- Tech stack: Astro + Tailwind CSS, static site, GitHub Actions auto-deploy on push
- Hero video (Seedance 2.0 generated, concierge home visit)
- AI-generated images (Nano Banana 2) across all pages
- Real Google reviews in testimonial carousel (5 reviews from actual patients)
- New logo (signal wave icon, navy/gold) integrated site-wide + favicon + OG image
- Google Analytics 4 tracking live (G-CZRBE70YJM)

### Pages:
1. **Home** (`/`) — Hero video, trust bar, how it works, service cards, pricing preview, testimonials, CTA
2. **Services** (`/services`) — 4 screening services with symptom-focused images, FAQ snippet
3. **Pricing** (`/pricing`) — 3 package cards, comparison table, Gold Standard inquiry form with video
4. **Diagnostics** (`/diagnostics`) — 8 cash-pay diagnostic studies with pricing, inquiry form
5. **About** (`/about`) — Story, credentials, where we screen, service areas
6. **FAQ** (`/faq`) — 20+ questions with accordion
7. **Contact** (`/contact`) — Contact form, phone, email, hours
8. **Partners** (`/partners`) — For physicians & clinics, B2B inquiry form
9. **Privacy** (`/privacy`) — Privacy policy
10. **Terms** (`/terms`) — Terms of service
11. **404** (`/404`) — Custom error page

### Booking Flow:
- **Essential Wellness ($199)** → Square direct booking
- **Executive Heart ($349)** → Square direct booking
- **Gold Standard ($597)** → Inquiry form on pricing page (mailto), owner calls to confirm, sends Square payment link
- **Cash-Pay Diagnostics ($250-300)** → Inquiry form on diagnostics page (mailto)

### Business Details on Site:
- Hours: Wed 12–5pm | Fri 12–5pm | Sat 9am–1pm
- Location: 3150 N Tenaya Wy, Suite 400, Las Vegas, NV 89128 — now published on website (approved 2026-04-16)
- Gold Standard: mobile service, anywhere in Greater Las Vegas
- Phone: 702.843.6612
- Email: info@svscreenings.com

---

## ✅ COMPLETED ITEMS

### Website & Technical
- ✅ Full website built and deployed to svscreenings.com
- ✅ Custom domain configured (Namecheap DNS → GitHub Pages)
- ✅ SSL/HTTPS enabled via GitHub Pages
- ✅ Google Analytics 4 wired up (G-CZRBE70YJM)
- ✅ Google Search Console verified, sitemap submitted
- ✅ Sitemap auto-generated via @astrojs/sitemap
- ✅ Schema.org structured data (MedicalBusiness)
- ✅ OG image for social sharing (Signal View Ultrasound logo)
- ✅ Favicon updated to new logo
- ✅ Privacy Policy and Terms of Service pages created
- ✅ 404 error page created
- ✅ Mobile hamburger menu fixed (was broken due to stacking context)
- ✅ All internal links use link() helper for path flexibility
- ✅ robots.txt with sitemap reference

### Content & Branding
- ✅ Hero video generated (Seedance 2.0) and integrated
- ✅ AI-generated images for all service pages (symptom-focused)
- ✅ Real Google reviews replace placeholder testimonials
- ✅ New logo generated (Nano Banana 2) and integrated everywhere
- ✅ Google banner created (HTML template in `google-banner.html`)
- ✅ "Certified sonographers" changed to "highly trained and experienced sonographers" site-wide
- ✅ "Partner with us" changed to "Work with us" on partners page (contract, not partnership)
- ✅ Location messaging updated — no specific address on site, "Summerlin area, address upon booking"
- ✅ Google Maps embeds removed (not our location to claim)

### Booking & Business Setup
- ✅ Square booking configured with correct service links
- ✅ Gold Standard Square link updated to correct service ID
- ✅ Booking flow streamlined: Square for clinic packages, inquiry form for Gold Standard
- ✅ Cash-pay diagnostics page built with all 8 services
- ✅ Square availability set: Wed 12-5pm, Fri 12-5pm, Sat 9am-1pm
- ✅ Square fake-it filter enabled at 40%
- ✅ Square confirmation email configured with address and appointment details
- ✅ Square settings: auto-accept bookings, locked to business timezone, accepts at business + customer location
- ✅ Essential & Executive: "Same-day screening summary from sonographer" + "Physician interpretation +$49 add-on"
- ✅ Gold Standard: includes physician-signed report
- ✅ Square booking URLs updated to new location ID (L0GR90314NDDP) on 2026-04-16

### Marketing & Ads
- ✅ Google Business Profile updated with all services, pricing, logo, banner
- ✅ Google Ads account created (ID: 166-345-7449)
- ✅ Advertiser verification completed (Quimson Development LLC)
- ✅ First campaign created: "Ultrasound Screenings — $199"
- ✅ Campaign set to active, awaiting first impressions
- ✅ Google Reviews separated: view URL vs leave-review URL
- ✅ "Leave Us a Review" CTA added to testimonial section
- ✅ Mailchimp account set up, newsletter signup embedded in blog section
- ✅ Google Search Console linked to GA4

### Website Optimization (Apr 15-16)
- ✅ **GA4 conversion tracking fixed** — removed phantom `ads_conversion_Book_appointment_1` event. Added real tracking: `generate_lead` (form submissions), `begin_checkout` (Square link clicks), `click_phone`, `click_text`, `cta_click`
- ✅ **Homepage Round 1** — hero shrunk 85vh→60vh, price anchor ("From $199 · HSA/FSA · No Referral"), phone CTA on mobile, section reorder (pricing moved up from section 5→4), services section removed, testimonial+hours strip added, overline changed to "Preventative Ultrasound Screenings"
- ✅ **Homepage Round 2** — team photos (Mike/Jackie/Priya/Remi), full clinic address shown (3150 N Tenaya Wy Suite 400), physician add-on clarified ($49), dual testimonials (Caleb T + Kathy B), "Bringing a parent" strip, cash-pay/HSA line, CTA urgency softened, "white-glove" de-emphasized (Gold Standard only)
- ✅ **Header redesigned** — mobile: logo on top row, Call Us / Text Us / Book Online as three labeled buttons on second row. Desktop: single row with text buttons. Eliminates icon confusion.
- ✅ **Text Us option added** — sms: link throughout site (header, hero, mobile menu) with `click_text` tracking
- ✅ **Hero CTAs** — Book Your Screening (gold), Call number, Text Us stacked below
- ✅ **Nav updated** — "Learn More" renamed to "Health Articles"
- ✅ **Hero headline** — "White-Glove Experience" → "No Referrals, No Waiting"
- ✅ **siteConfig tagline** — "Premium Concierge" → "Preventative Ultrasound Screenings"
- ✅ **CTABanner defaults** — "Your Health Can't Wait" → "Take the First Step", softened urgency copy

### Social Media & Facebook (Apr 17-18)
- ✅ **Facebook page set up** — Signal View Ultrasound Screenings (facebook.com/profile.php?id=61581400856896)
- ✅ Profile pic (logo), cover photo, about section, hours, address, Square booking connected
- ✅ 4+ organic posts published (intro, cost comparison, parent/caregiver, blog share)
- ✅ Top organic post hit **1,985 views in 1 hour** (caregiver angle — "Thinking about getting your parent screened?")
- ✅ **Two Facebook ads launched** — boosted posts, $7/day total ($4 caregiver post + $3 cost comparison), Las Vegas 15mi radius, ages 45-65+, Advantage+ Creative enabled
- ✅ **Meta Pixel installed** on website (ID: 2602063206805705) for Facebook ad conversion tracking
- ✅ **Facebook link added to website footer** alongside Google Reviews link
- ✅ **Footer tagline updated** — "Premium concierge" → "Preventative" to match accessible positioning
- ✅ **Negative keywords added to Google Ads** — pregnancy, MRI, CT, jobs, school, free, training, classes, salary, certification, maryland parkway, check up doctor, blood panel, breast ultrasound, full body scan
- ✅ **Facebook ad targeting tightened** — removed Pahrump (60+ miles away), set 15mi radius from clinic
- ✅ **2 weeks of Facebook content created and scheduled** — educational infographics (carotid, aorta, echo, PAD), team spotlight, blog shares, Sunday CTA posts
- ✅ **Marketing optimizer skill created** (`/svs-marketing-optimizer`) — analyzes ad/GA4 data on demand
- ✅ **Campaign tracker created** (`svs-blog-nl/vault/campaign-tracker.md`) — living document tracking all channel performance
- ✅ **Square booking widget tested** — embedded on-site but reverted (widget looks too generic). Kept direct Square booking links for now.

### Results (Week 1: Apr 12-18)
- Avg engagement time: 7 seconds → **1 minute 25 seconds (+435%)**
- **148 sessions, 211 page views, 124 first-time visitors**
- Homepage → Pricing click-through: **44%** (up from 16% pre-optimization)
- 4 `begin_checkout` events (Square booking link clicks)
- 5 `cta_click` events, 1 `click_phone` event
- Two phone call inquiries (one English, one Spanish)
- GA4 conversion events confirmed firing
- Facebook organic reach: 1,985+ views on top post
- **Zero confirmed bookings yet** — funnel is warm, first booking expected within next 1-2 weeks

### Pricing & Packages (Current)
| Package | Price | Duration | Results |
|---------|-------|----------|---------|
| Essential Wellness | $199 | ~30 min | Physician-interpreted report within 5–7 business days |
| Executive Heart | $349 | ~45 min | Physician-interpreted report within 5–7 business days |
| The Gold Standard | $597 | ~60 min | Physician-interpreted report within 5–7 business days |

### Cash-Pay Diagnostics (Current)
| Service | Price |
|---------|-------|
| Echocardiogram | $300 |
| Carotid Ultrasound | $250 |
| Aorta Ultrasound | $250 |
| Lower Extremity Arterial | $250 |
| Lower Extremity Venous | $250 |
| Abdominal Complete | $250 |
| Thyroid Ultrasound | $250 |
| Renal Ultrasound | $250 |

All diagnostics include physician interpretation. Self-referred or with doctor's order.

---

## 🔄 IN PROGRESS

- 🔄 **Google Ads** — Campaign active since Apr 13. 840+ impressions, 33+ clicks, 3.93% CTR, ~$100 spend. Negative keywords pruned. Review performance at 2 weeks (Apr 27).
- 🔄 **Facebook Ads** — Two boosted posts live since Apr 18. $7/day ($4 caregiver + $3 cost comparison). 15mi radius, 45-65+. First data check Apr 20.
- 🔄 **Facebook Content Calendar** — 2 weeks of posts scheduled (educational infographics, team spotlight, blog shares, CTA posts). Posting 4x/week.
- 🔄 **Google Reviews** — Currently ~6 reviews. Goal: 15+ within 30 days. Texting past patients individually. Review link: `https://g.page/r/CbQeS1Xa-WUYEBM/review`
- 🔄 **Personal outreach** — Texting friends, family, past patients for page follows + reviews. 5-10 per day.
- 🔄 **Google Search Console** — Linked to GA4 on Apr 15. Pages being indexed.
- 🔄 **Mailchimp** — Account set up, signup form embedded in blog section. Need to build welcome email sequence.

---

## ⬜ TODO — Next Actions

### This Weekend (Apr 19-20)
- ⬜ **Check Facebook ad performance** — first 48hr data. Look for CTR >1%, CPC <$2.
- ⬜ **GA4: Mark Key Events** — Star `generate_lead` and `begin_checkout` as Key Events in GA4 Admin → Events. Then import into Google Ads → Goals → Conversions.
- ⬜ **Text 5-10 past patients** the Google review link.
- ⬜ **Invite 20-30 friends** to like the Facebook page.
- ⬜ **Post in local Facebook groups** — Summerlin, Henderson, Las Vegas community groups.

### This Week (Apr 21-25)
- ⬜ **Monitor phone calls/texts** — Track every inquiry (source, question, outcome).
- ⬜ **Create infographics** for aorta, echo, PAD posts (Nano Banana, matching carotid style).
- ⬜ **Share blog articles on Facebook** — one per week, with captions.
- ⬜ **Continue personal outreach** — 5-10 texts per day for follows + reviews.
- ⬜ **Check Google Ads search terms** — prune any new irrelevant searches.

### This Month (Apr-May)
- ⬜ **Review Google Ads 2-week data (Apr 27)** — review search terms report, pause losing keywords, increase budget on winners.
- ⬜ **Review Facebook ad performance (Apr 25)** — kill losing ad, put full $7 behind winner.
- ⬜ **Enable Reserve with Google** — Check Square Dashboard → Online Booking → "Reserve with Google" toggle. Free bookings from Google Maps/Search.
- ⬜ **Professional email domain** — Set up info@svscreenings.com (Gmail workspace or similar).
- ⬜ **Set up GA4 API access** — Google Cloud service account for automated analytics pulls. Instructions provided, needs computer.
- ⬜ **Build Mailchimp welcome email sequence** — auto-send to new newsletter subscribers.
- ⬜ **Create Facebook retargeting audience** — after Meta Pixel collects 200+ visitors. Show ads to people who visited site but didn't book.

### Next 1-3 Months
- ⬜ **Homepage Round 3** — Named physician on site, FAQ section on homepage, "Booking for a loved one?" note, family history messaging, show Google review count.
- ⬜ **Custom booking flow** — Either Acuity Scheduling ($20/mo) for polished embedded booking, or custom Square Bookings API integration for fully branded experience.
- ⬜ **Email follow-up system** — Post-appointment thank you, review request, 6-month follow-up reminder (via Mailchimp).
- ⬜ **Local partnerships** — Use /partners page to reach out to primary care clinics, corporate wellness programs, health fairs.
- ⬜ **Blog content** — Continue publishing articles for SEO.
- ⬜ **Couples pricing for Gold Standard** — Consider a discount for two-person home visits.
- ⬜ **GaryVee content strategy** — continue posting organic content, watch for winners (5-10x avg views), boost winners with $20-50 ad spend.

### Future Considerations
- ⬜ **Hispanic market expansion** — Spanish site translation, bilingual phone solution (AI answering $30-100/mo or virtual receptionist $200-400/mo), Spanish ad creatives. ~33% of Las Vegas metro. SVS already has one machine + two techs who can scan. Start after first 5-10 English bookings.
- ⬜ **3D/4D pregnancy ultrasound** — Research complete (see below). Equipment ready (one machine capable). Two techs can scan. Startup cost is minimal (insurance + marketing only). Launch as separate sub-brand after vascular bookings are steady.
- ⬜ **Instagram expansion** — secondary to Facebook. Best for reaching caregiver daughters (35-45 age group). Launch after Facebook is producing bookings.
- ⬜ **Trademark registration** — Register "Signal View" trademark, then apply in Google Ads to show brand name instead of LLC.
- ⬜ **Form backend** — Replace mailto: forms with Formspree or similar for reliable submission tracking.
- ⬜ **Migrate to ZimaOS** — If desired, move from GitHub Pages to self-hosted for full control.

---

## 3D/4D Pregnancy Ultrasound — Market Research (Apr 2026)

### The Opportunity
- ~24,000 births/year in Clark County. 15-25% purchase elective ultrasounds = **3,600-6,000 potential clients/year**
- Average ticket: $100-$140 in Las Vegas
- Gross margins: **74-87%** (consumables only $9-$20/session)
- Net profit margins: 35-55%
- A sonographer can do 6-10 sessions/day (15-30 min each)
- Revenue potential: **$96K-$420K/year** depending on volume

### Las Vegas Competitors (6-8 active)
| Competitor | Reviews | Price Range | Notes |
|---|---|---|---|
| **Vegas Baby! 4D** | 700+ 5-star | $65-$269 | Market leader, 17+ years, 45K clients |
| **Sneak A Baby Peek** | 277 reviews | Mid-range | GE Voluson E8, open 6 days |
| **Miracle in Progress** | 245 reviews | $119+ | Largest room (25+ guests), heavy Groupon |
| **Little Blessings 4D** | 179 reviews | 11 packages | Also offers Sneak Peek DNA |
| **See My Baby** | 134 reviews | $29-$80 | Aggressive low-price competitor |

### Typical Pricing Structure
- Pregnancy verification: $29-$89
- Gender scan (2D): $65-$95
- Basic 3D/4D package: $80-$145
- Premium HD/5D (25+ min): $225-$269
- DNA gender test: $129

### What You'd Need
- **Equipment:** ✅ Already have a machine capable of 3D/4D. Two techs can scan 3D/4D. No equipment purchase needed.
- **Licensing:** Standard NV business license. No specific elective ultrasound regulation in Nevada. No medical director legally required (but recommended)
- **Insurance:** Professional + general liability = $5-15K/year
- **Disclaimers:** Non-diagnostic consent forms required for every client
- **Separate brand recommended** — e.g., "Signal View Baby" or similar, to avoid diluting the serious medical screening brand

### SVS Competitive Advantages
1. **Medical facility setting** — no other LV elective studio operates out of a medical practice. Massive trust differentiator
2. **Credentialed sonographers** — 5+ years diagnostic experience vs. strip-mall studios
3. **Concierge/mobile model already exists** — Gold Standard concept translates directly to premium mobile pregnancy scans ($150-350)
4. **Fills empty weekday capacity** — pregnancy scans Mon-Fri, vascular screenings Wed/Fri/Sat
5. **Cross-referral potential** — pregnant clients learn about vascular screening for their parents

### Strategy If You Move Forward
1. **Position premium, NOT cheap** — $149-$299 packages. Don't compete with See My Baby's $29 scans
2. **Separate sub-brand** — protect the vascular/cardiac identity
3. **OB/GYN partnerships** — highest-converting referral channel (one case study showed 220% increase in 6 months)
4. **Social media first** — Instagram/TikTok baby ultrasound photos go viral. Best marketing channel for this service
5. **Start with weekday-only scheduling** — no conflict with existing screening hours

### Risks
- Market has 6-8 competitors with the leader having 17 years head start
- Price wars at the low end (Groupon, $29 basic scans)
- FDA "strongly discourages" elective fetal ultrasound (but does not prohibit)
- Brand confusion between "serious cardiac screening" and "cute baby photos"

### Bottom Line
Real opportunity with strong margins. Equipment and staffing are already in place (one machine + two techs capable of 3D/4D), so startup cost is minimal — just insurance, disclaimers, and marketing. Best entered as a premium sub-brand leveraging SVS's medical credibility. Start after vascular screening bookings are steady.

---

## Key Contacts & Accounts

| Service | Account/ID |
|---------|-----------|
| Domain Registrar | Namecheap (svscreenings.com) |
| Hosting | GitHub Pages (quimsonm/svscreenings-) |
| Google Analytics | G-CZRBE70YJM |
| Google Ads | 166-345-7449 |
| Google Ads Payments | Quimson Development LLC (9964-1158-8701) |
| Square | Two booking profiles (clinic + Gold Standard) |
| Google Business | g.page/r/CbQeS1Xa-WUYEBM |
| Email | info@svscreenings.com |
| Mailchimp | Newsletter signup embedded in blog section |

---

## Dev Notes for Claude Code

- All site code is in `/workspace/svscreenings-rebuild/`
- `astro.config.mjs` — currently set to `site: 'https://svscreenings.com'`, `base: '/'`
- `src/utils/links.ts` — `link()` helper for all internal paths
- `src/data/` — packages.ts, services.ts, faq.ts, testimonials.ts, siteConfig.ts (source of truth for business data)
- Push to `main` branch triggers GitHub Actions auto-deploy
- Images in `src/assets/images/`, video in `public/hero-video.mp4`
- Raw/original assets in `/assets/` (gitignored, local only)
- Forms use `is:inline` scripts with mailto: approach
- Header mobile menu uses `is:inline` script with DOMContentLoaded (moved outside `<header>` to avoid stacking context issues)
