# SVS Campaign Tracker — Living Document

> **Purpose:** Track marketing performance across all channels. Updated after every data review.
> **Last updated:** 2026-04-17

---

## Campaign Overview

| Channel | Status | Daily Budget | Launch Date |
|---|---|---|---|
| Google Ads (Smart Campaign) | Active | $16/day | Apr 13, 2026 |
| Facebook/Instagram Ads | Active (just launched) | $7/day | Apr 17, 2026 |
| Facebook Page (Organic) | Active | Free | Apr 17, 2026 |
| Google Business Profile | Active | Free | Pre-existing |
| Blog / SEO | Active (2 articles) | Free | Apr 14, 2026 |
| Mailchimp Newsletter | Set up, not yet sent | Free | Apr 15, 2026 |

**Total monthly ad spend:** ~$690

---

## Baseline Metrics (Pre-Optimization — April 15, 2026)

| Metric | Value |
|---|---|
| Avg engagement time on homepage | 7 seconds |
| Engagement rate | 4% |
| Homepage → Pricing click-through | 16% |
| Bookings from website | 0 |
| Google Ads CTR | ~3.8% |
| Google Ads CPC | ~$1.21 |

---

## Performance Log

### April 15, 2026 — Day 1 of Optimization

**GA4:**
- 25 active users, 49 page views
- 7-second avg engagement (pre-optimization)
- 84% of views on homepage, only 8% reached pricing
- 4% engagement rate
- Traffic: 44% unassigned, 36% Google Ads, 16% display, 12% direct, 4% organic social

**Google Ads:**
- $21.80 spend (day)
- 473 impressions, 18 clicks, 3.8% CTR
- 0 real conversions (phantom conversion event removed)

**Actions taken:**
- Fixed GA4 conversion tracking (added generate_lead, begin_checkout, click_phone, cta_click events)
- Removed phantom ads_conversion_Book_appointment_1
- Linked Search Console to GA4

---

### April 16, 2026 — Post Round 1 Optimization

**GA4:**
- 9 active users
- **1 minute 25 seconds avg engagement (+435% from 16s prior day)**
- Engagement concentrated in Las Vegas and California

**Google Ads (all-time through Apr 16):**
- $30.34 total spend
- 552 impressions, 20 clicks, 3.93% CTR

**Website changes shipped:**
- Round 1: Shorter hero, price anchor, section reorder, phone CTA on mobile, services section removed
- Round 2: Team photos, full address, physician add-on $49 clarified, dual testimonials, "bringing a parent" strip, cash-pay line, CTA softened

**Phone inquiries:** 1 (English, hung up immediately)

---

### April 17, 2026 — Facebook Launch Day

**Google Ads (all-time):**
- $30+ total spend
- 840 impressions, 33 clicks, 3.93% CTR

**Phone inquiries:** 1 (Spanish, pregnancy inquiry — wrong service but confirms ads reaching people)

**Facebook Page launched:**
- Profile, cover, about section, Square booking connected
- 4 posts published
- Top organic post: "Thinking about getting your parent screened?" — **1,985 views in ~1 hour**
- Second post: "Signal View is officially here" — 1,817 views
- 1 interaction, 0 link clicks, 0 follows (expected for hour 1)

**Meta Pixel installed:** ID 2602063206805705, confirmed on site

**Facebook Ad launched:** $7/day, Las Vegas 25mi, ages 45-65+, targeting health & wellness interests

**Website changes:**
- Header redesigned: Call Us / Text Us / Book Online (text buttons, not icons)
- Mobile header: two-row layout (logo + hamburger, then 3 buttons)
- Text Us (sms:) option added throughout site with click_text tracking
- "Health Articles" renamed from "Learn More" in nav
- Meta Pixel installed in BaseLayout.astro

**Negative keywords added to Google Ads:**
- Pregnancy, 3D/4D, baby, CT, MRI, x-ray, blood panel, ultrasound school, free screening, jobs, sonography program, CAC scan, coronary artery, CCTA, breast ultrasound

---

## What's Working

1. **Homepage → Pricing rate: 44%** — up from 16% pre-optimization. Nearly half of all visitors see pricing now.
2. **4 begin_checkout events** — people are clicking through to Square booking links. Funnel is warm.
3. **Caregiver/parent content** — 1,985 organic views on first Facebook post. Strongest messaging angle confirmed.
4. **Google Ads CTR at 3.93%** — above industry average (~3%). Ad copy and targeting are solid.
5. **Phone is ringing** — 2 calls in first 3 days. Call Us / Text Us CTAs working.
6. **124 first-time visitors in week 1** — awareness is building.
7. **Engagement trend clearly shows optimization impact** — flat before Apr 14, spiked after changes.

## What's Not Working

1. **Zero confirmed bookings** — 4 people clicked to Square but unclear if any completed. Check Square dashboard.
2. **Phantom conversion event STILL ACTIVE** — `ads_conversion_Book_appointment_1` showing 55 events, 11 key events. This is polluting Google Ads optimization. MUST be removed from GA4 Key Events AND Google Ads Conversions.
3. **`begin_checkout` and `generate_lead` not marked as Key Events** — real conversions aren't being counted.
4. **Only 6 Google reviews** — biggest trust gap. Every persona flagged this.
5. **Weekly avg engagement time shows 17s** — misleading because it includes pre-optimization days (Apr 12-14 at ~0-7s). Post-optimization days were 55s-1:25.

## What to Watch

1. **Did the 4 begin_checkout clicks convert in Square?** Check Square dashboard for Apr 12-18 bookings.
2. **Facebook ad performance** — first 48hr data available Apr 19-20.
3. **Phone call / text volume** — track daily.
4. **Google Ads search terms** — check every 3 days, keep pruning.
5. **Kill the phantom conversion** — urgent, affects Google Ads optimization.

---

## Upcoming Actions

| Action | Priority | Status |
|---|---|---|
| **REMOVE phantom conversion from GA4 + Google Ads** | DO NOW | URGENT — still active |
| **Mark begin_checkout as Key Event in GA4** | DO NOW | Not done yet |
| **Check Square dashboard for bookings Apr 12-18** | DO NOW | 4 begin_checkout clicks need verification |
| Monitor Facebook ad (48hr check) | DO NOW | Check Apr 19-20 |
| Prune Google Ads search terms | THIS WEEK | In progress — added maryland pkwy, check up doctor |
| Stack Google reviews (text past patients) | THIS WEEK | Pending — highest leverage free action |
| Share in local Facebook groups | THIS WEEK | Pending |
| Review Facebook ad performance | THIS WEEK | Check Apr 21 |
| Review Google Ads 2-week data | THIS WEEK | Check Apr 27 |
| Create retargeting audience in Meta | THIS MONTH | After pixel collects 100+ visitors (~124 so far) |
| Write next blog post | THIS MONTH | Pending |
| Send first Mailchimp newsletter | THIS MONTH | Pending |
| Set up GA4 API access | THIS MONTH | Instructions given, needs computer |

---

## Revenue Tracking

| Date | Bookings | Revenue | Source | Package |
|---|---|---|---|---|
| — | 0 confirmed | $0 | — | — |

**Total revenue to date:** $0
**Total ad spend to date:** ~$100 (est. Google $80 + Facebook ~$20)
**4 begin_checkout clicks detected** — need Square confirmation
**First booking target:** By April 27 (2 weeks from launch)

---

## Next Check-In: April 20, 2026

**What to bring:** Facebook ad performance, GA4 overview, Google Ads dashboard
**Before then:**
1. Remove phantom conversion from GA4 Key Events AND Google Ads Conversions
2. Mark `begin_checkout` as Key Event in GA4
3. Check Square for any bookings Apr 12-18
4. Text past patients the Google review link
