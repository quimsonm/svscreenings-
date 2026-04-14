# Signal View Screenings — Action Plan for Max

> **Last updated by Max (Mike's orchestrator): 2026-04-13**
> Items marked ✅ are DONE — no action needed from dev.

## What We Built
- Full 10-page website live at svscreenings.com
- Hero video, real images, real Google reviews
- Streamlined booking: Square for clinic packages, inquiry form for Gold Standard concierge
- Partners page for physician/clinic B2B outreach
- Privacy policy, terms of service, 404 page
- SEO: structured data, sitemap, meta tags
- New logo integrated across site + favicon + social sharing image

---

## Immediate Action Items (This Week)

### 1. ✅ Google Analytics — DONE 04-13-2026
- **Measurement ID: G-CZRBE70YJM**
- Account created, data stream set up for svscreenings.com
- Enhanced measurement ON (page views, scrolls, clicks, video, forms)
- **ACTION FOR DEV:** Wire this gtag snippet into the `<head>` of svscreenings.com:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-CZRBE70YJM"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-CZRBE70YJM');
</script>
```

### 2. ✅ Google Search Console — DONE 04-13-2026
- svscreenings.com verified as URL prefix property
- Sitemap submitted: `https://svscreenings.com/sitemap-index.xml`
- Google indexing pages now

### 3. ✅ Google Business Profile — DONE 04-13-2026
- New logo + banner uploaded
- All screening packages listed with correct pricing:
  - Essential Wellness — $199
  - Executive Heart — $349
  - The Gold Standard — $597
- Cash-pay diagnostic ultrasounds listed:
  - Echocardiogram — $300
  - Carotid, Aorta, Lower Extremity Arterial, Lower Extremity Venous, Abdominal Complete, Thyroid, Renal — $250 each
  - All include physician interpretation, self-referred or with doctor referral
- First GBP post published (new website announcement)

### 4. Start Asking for Reviews — IN PROGRESS
- After every screening, text patients the review link
- Goal: 15+ reviews within 30 days
- Review link: https://g.page/r/CbQeS1Xa-WUYEBM/review

---

## This Month

### 5. Google Ads Campaign
- Create a Google Ads account at ads.google.com
- Start with Search ads (not Display)
- Target keywords:
  - "ultrasound screening las vegas"
  - "heart screening near me"
  - "carotid artery screening las vegas"
  - "preventative health screening las vegas"
  - "echocardiogram las vegas"
- Budget: $15-20/day to start
- Landing page: svscreenings.com/pricing
- Track conversions (Square booking clicks + Gold Standard form submissions)

### 6. Social Media
- Create Facebook + Instagram business pages
- Post the hero video as your first post
- Share symptom-focused images (chest pain, leg pain) with educational captions
- Post 2-3x per week
- Link bio to svscreenings.com

### 7. Meta Pixel (Facebook Ads)
- Get your Pixel ID from Facebook Business Manager
- Send it to me, I'll add it to the site
- Run ads targeting Las Vegas adults 45+ 
- Budget: $10-15/day
- Use the symptom images as ad creative

---

## Next 3-6 Months

### 8. Cash-Pay Diagnostics Page
- **Status: Waiting on your answers** — see `cash-pay-diagnostics-todo.md`
- Need: service list, pricing, booking method
- Reading physicians already confirmed
- This is the high-margin growth play

### 9. SEO Blog Content
- I can add a blog section to the site
- Target articles:
  - "5 Warning Signs You Need a Carotid Screening"
  - "Aortic Aneurysm: The Silent Killer You Can Screen For"  
  - "What to Expect at Your First Ultrasound Screening"
  - "Cash Pay Ultrasound vs. Insurance: What Las Vegas Patients Need to Know"
- Each article drives organic Google traffic to your booking page

### 10. Local Partnerships
- Use the /partners page to reach out to:
  - Primary care clinics without in-house ultrasound
  - Corporate wellness programs (casinos, resorts, large employers)
  - Health fairs and community events
  - Urgent care centers

### 11. Email Follow-Up System
- Post-booking confirmation with address/details
- Day-before reminder
- Post-screening: review request
- 6-month follow-up: "Time for your annual screening"

---

## Revenue Targets

| Month | Patients | Revenue | Net Profit |
|-------|----------|---------|------------|
| 1 | 10-12 | $3,000-4,800 | $1,800-3,600 |
| 2 | 18-25 | $6,600-9,900 | $5,000-8,200 |
| 3 | 30-40 | $12,900-18,600 | $9,700-15,400 |

---

## What I Can Do Anytime — Just Ask
- Add Google Analytics / Meta Pixel (need your IDs)
- Build the cash-pay diagnostics page (need your pricing)
- Add a blog section
- Create ad landing pages
- Update pricing, services, or content
- Any website changes — same day turnaround
