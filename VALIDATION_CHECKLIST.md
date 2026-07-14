# Cricket-Betting Landing Page — SEO Markup Validation

**Date:** 14 July 2026  
**URL:** https://www.yolo365info.live/games/cricket-betting  
**Commit:** 8b6ea4f (Remove SportsEvent from cricket-betting landing page)

---

## Pre-Deployment Verification ✅

### Code Changes Verified

| File | Change | Status |
|------|--------|--------|
| `src/pages/games/Cricket.tsx` | SportsEvent JSON-LD removed (lines 84–127 deleted) | ✅ |
| `index.html` | Hard-coded hreflang tags removed (lines 11–12 deleted) | ✅ |
| `src/components/SEO.tsx` | hrefLang support added (HrefLang type, Props.hrefLangs, render logic) | ✅ |

### Schema Structure Verified

**Cricket-betting page JSON-LD array:**
```
✅ WebPage (describes current route)
✅ BreadcrumbList (matches visible breadcrumb)
✅ FAQPage (visible FAQ content)
✅ HowTo (visible step-by-step)
❌ SportsEvent (REMOVED — correct)
```

**Base template (index.html):**
```
✅ Organization (contactPoint.hoursAvailable is OpeningHoursSpecification)
✅ Organization.sameAs (social profiles only, no WhatsApp)
✅ Organization.contactPoint.url (points to /contact, not WhatsApp)
✅ WebSite (references Organization via @id)
✅ Service (describes service offering)
```

**Base template metadata:**
```
✅ og:site_name (site-wide default)
✅ og:locale (site-wide default)
✅ twitter:site (site-wide default)
✅ twitter:creator (site-wide default)
❌ Route-specific canonical, description, og:title, og:url, twitter:card (managed by React Helmet)
❌ hreflang tags (removed from base; routes manage via SEO component)
```

---

## Post-Deployment Validation

### Step 1: Build & Deploy
```bash
npm run build
# Deploy to production
# Purge CDN cache
```

### Step 2: Verify Rendered HTML
Open browser DevTools on live URL and run:
```javascript
[
  ['canonical', document.querySelectorAll('link[rel="canonical"]').length],
  ['description', document.querySelectorAll('meta[name="description"]').length],
  ['og:title', document.querySelectorAll('meta[property="og:title"]').length],
  ['og:description', document.querySelectorAll('meta[property="og:description"]').length],
  ['og:url', document.querySelectorAll('meta[property="og:url"]').length],
  ['twitter:card', document.querySelectorAll('meta[name="twitter:card"]').length],
  ['hreflang', document.querySelectorAll('link[rel="alternate"][hreflang]').length],
  ['SportsEvent', document.body.innerText.includes('"@type":"SportsEvent"') ? 'FOUND (ERROR)' : 'NOT FOUND (OK)']
]
```

**Expected output:**
```
[
  ['canonical', 1],
  ['description', 1],
  ['og:title', 1],
  ['og:description', 1],
  ['og:url', 1],
  ['twitter:card', 1],
  ['hreflang', 0],
  ['SportsEvent', 'NOT FOUND (OK)']
]
```

### Step 3: Google Rich Results Test
1. Go to https://search.google.com/test/rich-results
2. Enter: `https://www.yolo365info.live/games/cricket-betting`
3. Click **TEST URL**
4. Expected result: **No invalid items detected** (0 critical issues)

### Step 4: Schema.org Validator
1. Go to https://validator.schema.org/
2. Paste rendered HTML source
3. Verify: No critical errors in WebPage, BreadcrumbList, FAQPage, HowTo

### Step 5: Search Console
1. Go to Google Search Console
2. Select property: `https://www.yolo365info.live/`
3. URL Inspection → Enter: `https://www.yolo365info.live/games/cricket-betting`
4. Click **TEST LIVE URL**
5. Verify: No SportsEvent in detected items
6. If previously reported: Open **Event** enhancement report → **Validate Fix**

### Step 6: Monitor Validation
- Google will recrawl the URL over the next 1–7 days
- Check Event enhancement report status daily
- Validation should clear once Google recrawls and confirms the fix

---

## Acceptance Criteria

| Criterion | Expected | Actual | Status |
|-----------|----------|--------|--------|
| SportsEvent removed from source | No `"@type":"SportsEvent"` in Cricket.tsx | ✅ Verified | ☐ |
| SportsEvent not in rendered HTML | 0 SportsEvent blocks in live page | ☐ Pending deployment | ☐ |
| Rich Results Test passes | 0 invalid items | ☐ Pending deployment | ☐ |
| Canonical count | Exactly 1 | ☐ Pending deployment | ☐ |
| Description count | Exactly 1 | ☐ Pending deployment | ☐ |
| og:title count | Exactly 1 | ☐ Pending deployment | ☐ |
| og:url count | Exactly 1 | ☐ Pending deployment | ☐ |
| twitter:card count | Exactly 1 | ☐ Pending deployment | ☐ |
| hreflang tags | 0 (or reciprocal localized URLs) | ✅ Verified in code | ☐ |
| Schema accuracy | All values visible/accurate | ✅ Verified in code | ☐ |
| Search Console validation | Fix validated after recrawl | ☐ Pending deployment | ☐ |

---

## Common Issues & Troubleshooting

| Issue | Cause | Solution |
|-------|-------|----------|
| Rich Results Test still shows SportsEvent | Old JS bundle cached | Purge CDN, hard-refresh browser (Ctrl+Shift+R) |
| Multiple canonical tags | Helmet not deduplicating | Check React version; ensure `prioritizeSeoTags` is set |
| hreflang tags still present | Base template not updated | Verify index.html lines 11–12 are deleted |
| Search Console validation fails | Live page not updated | Confirm deployment completed; retest live URL |

---

## Sign-Off

- **Code review:** ✅ Complete
- **Pre-deployment checks:** ✅ Complete
- **Ready for deployment:** ✅ Yes
- **Deployment date:** _______________
- **Validation date:** _______________
- **Validated by:** _______________

