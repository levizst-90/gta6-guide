# gta6-guide

## Visitor counter

Page views and referrers are counted with [GoatCounter](https://www.goatcounter.com/). The hosted service is free for a small site, sets no cookies, and stores the statistics in the EU. It works on GitHub Pages because the count is a script request, not a server on this repo.

The site code lives in one place: `SITE_CODE` in `analytics.js`, currently `durchspiel-gta6`. Every page loads that file.

Counts stay empty until the matching account exists:

1. Open https://www.goatcounter.com/signup
2. Account name: `durchspiel-gta6` (the dashboard is then https://durchspiel-gta6.goatcounter.com)
3. Site domain, optional and only for display: `levizst-90.github.io`
4. Finish signup with your email and a password, and confirm the email if asked.
5. Leave “collect individual pageviews” off. The Datenschutz page describes this default: hourly and daily totals only, no row per visit.

If `durchspiel-gta6` is already taken, choose another account name and change `SITE_CODE` in `analytics.js` to the same name. Paths show up with the GitHub Pages prefix, for example `/gta6-guide/` and `/gta6-guide/datenschutz.html`. Referrers such as TikTok or YouTube appear when the browser sends one; some in-app browsers omit it.

To ignore your own visits, open any page once with `#toggle-goatcounter` at the end of the URL. An ad blocker that blocks `gc.zgo.at` also hides visits, so allow that host when you check the dashboard.