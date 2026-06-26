/* Ronin Monk Media — small, dependency-free behaviors */

(function () {
  "use strict";

  // ---- mobile nav toggle ----
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") nav.classList.remove("open");
    });
  }

  // ---- footer year ----
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // ---- soft fade-in for gallery / cards when they enter view ----
  if ("IntersectionObserver" in window) {
    const reveal = function (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(8px)";
      el.style.transition = "opacity .6s ease, transform .6s ease";
    };
    const targets = document.querySelectorAll(".card, .gallery-tile, .feature-grid > *");
    targets.forEach(reveal);
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -40px 0px", threshold: 0.05 });
    targets.forEach(function (t) { io.observe(t); });
  }

  // ---- gentle parallax on hero ringlight ----
  const ring = document.querySelector(".hero-ringlight");
  if (ring && window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
    window.addEventListener("scroll", function () {
      const y = window.scrollY * 0.08;
      ring.style.transform = "translateY(" + y + "px)";
    }, { passive: true });
  }

})();
