/* Cookieless visitor counter (GoatCounter).
 *
 * SITE_CODE is the only value to change. It must match the GoatCounter
 * account name, which is also the subdomain of the dashboard:
 *   https://durchspiel-gta6.goatcounter.com
 *
 * Setup (one time, free):
 *   1. Open https://www.goatcounter.com/signup
 *   2. Account name: durchspiel-gta6
 *   3. Site domain (optional, display only): levizst-90.github.io
 *   4. Confirm the signup email if GoatCounter asks for it.
 *   5. Leave "collect individual pageviews" disabled. The Datenschutz
 *      page describes the default: aggregate counts only.
 * If that account name is taken, pick another and change SITE_CODE here.
 * Every page loads this file; do not copy the code into the HTML.
 */
(function () {
  var SITE_CODE = "durchspiel-gta6";
  if (!/^[a-z0-9-]+$/.test(SITE_CODE)) return;

  var parent = document.body || document.head;
  if (!parent) return;

  var script = document.createElement("script");
  script.defer = true;
  script.src = "https://gc.zgo.at/count.js";
  script.setAttribute(
    "data-goatcounter",
    "https://" + SITE_CODE + ".goatcounter.com/count"
  );
  parent.appendChild(script);
})();
