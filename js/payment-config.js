/**
 * Ronin Monk Media — Payment Config Loader (Public)
 * Reads /config/payment-links.json and updates any element with [data-payment-key].
 *
 * Usage:
 *   <a href="/pages/contact.html" data-payment-key="paypal.url">Book a Session</a>
 *   → On load, href becomes the PayPal URL from config.
 *   → Falls back to /pages/contact.html if JS or fetch fails.
 *
 * Key format: dot-notation path into payment-links.json
 *   "paypal.url"  →  config.paypal.url
 */
(function () {
  if (!window.fetch) return;

  fetch('/config/payment-links.json')
    .then(function (res) { return res.json(); })
    .then(function (config) {
      document.querySelectorAll('[data-payment-key]').forEach(function (el) {
        var key = el.getAttribute('data-payment-key');
        var val = key.split('.').reduce(function (obj, k) {
          return obj && obj[k] !== undefined ? obj[k] : null;
        }, config);

        if (val === null || val === undefined) return;

        if (el.tagName === 'A' && typeof val === 'string' && val.startsWith('http')) {
          el.href = val;
        } else {
          el.textContent = String(val);
        }
      });
    })
    .catch(function () {
      /* Graceful degradation — static fallback hrefs stay active */
    });
})();
