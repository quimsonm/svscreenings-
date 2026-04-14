# Signal View Screenings — Action Plan for Max

> **Last updated: 2026-04-14**
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
- Location: Summerlin area clinic (3150 N Tenaya Way Suite 400) — address given upon booking confirmation, not published on site (partner clinic, not owned)
- Gold Standard: mobile service, anywhere in Greater Las Vegas
- Phone: 702.843.6612
- Email: signalviewultrasound@gmail.com

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
- ✅ Essential & Executive: "Same-day screening summary from sonographer" + "Physician interpretation available as add-on"
- ✅ Gold Standard: includes physician-signed report

### Marketing & Ads
- ✅ Google Business Profile updated with all services, pricing, logo, banner
- ✅ Google Ads account created (ID: 166-345-7449)
- ✅ Advertiser verification completed (Quimson Development LLC)
- ✅ First campaign created: "Ultrasound Screenings — $199"
- ✅ Campaign set to active, awaiting first impressions
- ✅ Google Reviews separated: view URL vs leave-review URL
- ✅ "Leave Us a Review" CTA added to testimonial section

### Pricing & Packages (Current)
| Package | Price | Duration | Results |
|---------|-------|----------|---------|
| Essential Wellness | $199 | ~30 min | Same-day sonographer summary (physician interp add-on available) |
| Executive Heart | $349 | ~45 min | Same-day sonographer summary (physician interp add-on available) |
| The Gold Standard | $597 | ~60 min | Physician-signed report within 48 hours |

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

- 🔄 **Google Ads** — Campaign active, awaiting first impressions/clicks. Monitor daily. Don't change anything for first week.
- 🔄 **Google Reviews** — Currently 6 reviews. Goal: 15+ within 30 days. Review link: `https://g.page/r/CbQeS1Xa-WUYEBM/review`
- 🔄 **Google Search Console** — Pages being indexed. Check back in a few days for search performance data.

---

## ⬜ TODO — Next Actions

### This Week
- ⬜ **Monitor Google Ads** — Check dashboard daily for impressions, clicks, and search terms. Add negative keywords for irrelevant searches (pregnancy, MRI, CT, jobs, school, free).
- ⬜ **Share the website** — Text link to friends, family, existing patients, network contacts.
- ⬜ **Stack Google reviews** — Text review link to every past patient.
- ⬜ **Create Facebook + Instagram business pages** — Post hero video, announce new website.

### This Month
- ⬜ **Facebook/Instagram Ads** — Need Meta Pixel ID from Mike, then wire it into the site. Target Las Vegas adults 45+.
- ⬜ **Review Google Ads performance** — After 1 week, review which keywords convert, pause losers, increase budget on winners.
- ⬜ **Social media content** — Post 2-3x/week. Use symptom images with educational captions.

### Next 1-3 Months
- ⬜ **Blog section** — Add to site for SEO content ("5 Warning Signs You Need a Carotid Screening", etc.)
- ⬜ **Email follow-up system** — Post-appointment thank you, review request, 6-month follow-up reminder.
- ⬜ **Local partnerships** — Use /partners page to reach out to primary care clinics, corporate wellness programs, health fairs.
- ⬜ **Optimize Google Ads** — Refine keywords, test new ad copy, add sitelink extensions.

### Future Considerations
- ⬜ **Trademark registration** — Register "Signal View" trademark, then apply in Google Ads to show brand name instead of LLC
- ⬜ **Form backend** — Replace mailto: forms with Formspree or similar for reliable submission tracking
- ⬜ **Migrate to ZimaOS** — If desired, move from GitHub Pages to self-hosted for full control
- ⬜ **GA4 conversion tracking** — Set up proper conversion events for Square booking clicks and form submissions

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
| Email | signalviewultrasound@gmail.com |

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
