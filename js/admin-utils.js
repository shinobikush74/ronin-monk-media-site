/* ==========================================================
   RMHQ Admin Utilities — Ronin Monk Media LLC
   Shared across all admin pages. Load with defer.
   No inline scripts needed — CSP: script-src 'self' safe.
   ========================================================== */

/* --- Datetime display ---------------------------------------- */
(function () {
  var el = document.getElementById('mc-datetime');
  if (el) {
    try {
      var d = new Date();
      var opts = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
      el.textContent = d.toLocaleDateString('en-US', opts);
    } catch (e) {
      /* fallback for environments that don't support toLocaleDateString options */
      var days   = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      el.textContent = days[d.getDay()] + ' ' + months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
    }
  }
})();

/* --- Sprint 008+ Tab System ---------------------------------- */
/* Usage: onclick="s8Tab('group-name', index)"                  */
/* Toggles .s8-tab--active on [data-tg] and                    */
/*         .s8-panel--hidden on [data-pg]                       */
function s8Tab(grp, idx) {
  document.querySelectorAll('[data-tg="' + grp + '"]').forEach(function (el, i) {
    el.classList.toggle('s8-tab--active', i === idx);
  });
  document.querySelectorAll('[data-pg="' + grp + '"]').forEach(function (el, i) {
    el.classList.toggle('s8-panel--hidden', i !== idx);
  });
}

/* --- Mission Control Notification Tabs ----------------------- */
/* Only activates when .mc-notif-tab elements are present       */
/* (Mission Control only — harmless on other pages)             */
document.querySelectorAll('.mc-notif-tab').forEach(function (tab) {
  tab.addEventListener('click', function () {
    document.querySelectorAll('.mc-notif-tab').forEach(function (t) {
      t.classList.remove('mc-notif-tab--active');
    });
    document.querySelectorAll('.mc-notif-panel').forEach(function (p) {
      p.classList.add('mc-notif-panel--hidden');
    });
    this.classList.add('mc-notif-tab--active');
    var panel = document.getElementById('tab-' + this.getAttribute('data-tab'));
    if (panel) { panel.classList.remove('mc-notif-panel--hidden'); }
  });
});
