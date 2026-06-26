/**
 * RMHQ Admin — Payment Config Loader
 * Reads /config/payment-links.json and populates elements with [data-payment-key].
 *
 * Usage in HTML:
 *   <a href="/pages/contact.html" data-payment-key="services.worldbuilding-consultation.cta_url">Book</a>
 *   <span data-payment-key="paypal.status"></span>
 *
 * Keys use dot notation matching the JSON structure.
 * Falls back gracefully — existing href or text stays if fetch fails.
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
      /* Graceful degradation — static hrefs remain active */
    });
})();
