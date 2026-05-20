/* Mobile navigation */
(function () {
  const toggle = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  if (!toggle || !mobileNav) return;

  toggle.addEventListener("click", function () {
    const open = mobileNav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  mobileNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      mobileNav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
})();

/* Menu category tabs */
(function () {
  const tabs = document.querySelectorAll(".tab-btn");
  const panels = document.querySelectorAll(".menu-panel");
  if (!tabs.length || !panels.length) return;

  tabs.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const id = btn.getAttribute("data-tab");
      tabs.forEach(function (t) {
        t.classList.toggle("active", t === btn);
      });
      panels.forEach(function (p) {
        p.classList.toggle("active", p.id === id);
      });
    });
  });
})();

/* Contact form — show sent message (no backend) */
(function () {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    if (btn) btn.textContent = "ተልኳል ✓ Sent";
    form.reset();
  });
})();
