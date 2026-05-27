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

/* Make marquees draggable — pause on drag, resume on release */
(function () {
  const marquees = document.querySelectorAll(".marquee");
  if (!marquees.length) return;

  let dragState = null;

  function getClientX(e) {
    return e.touches ? e.touches[0].clientX : e.clientX;
  }

  function onStart(e) {
    const el = e.currentTarget;
    const cx = getClientX(e);
    el.style.animationPlayState = "paused";
    el.style.cursor = "grabbing";
    const style = window.getComputedStyle(el);
    const m = style.transform.match(/matrix\([^,]+,[^,]+,[^,]+,[^,]+,\s*([\d.-]+)/);
    const currentX = m ? parseFloat(m[1]) : 0;
    el.style.transform = "translateX(" + currentX + "px)";
    dragState = { el, startX: cx, startTransform: currentX };
  }

  function onMove(e) {
    if (!dragState) return;
    e.preventDefault();
    const cx = getClientX(e);
    const dx = cx - dragState.startX;
    dragState.el.style.transform = "translateX(" + (dragState.startTransform + dx) + "px)";
  }

  function onEnd() {
    if (!dragState) return;
    dragState.el.style.transform = "";
    dragState.el.style.animationPlayState = "running";
    dragState.el.style.cursor = "";
    dragState = null;
  }

  marquees.forEach(function (el) {
    el.addEventListener("mousedown", onStart);
    el.addEventListener("touchstart", onStart, { passive: true });
  });
  document.addEventListener("mousemove", onMove);
  document.addEventListener("mouseup", onEnd);
  document.addEventListener("touchmove", onMove, { passive: false });
  document.addEventListener("touchend", onEnd);
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

/* Count-up animation */
(function () {
  const els = document.querySelectorAll(".count-up");
  if (!els.length) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        let current = 0;
        const duration = 1500;
        const step = Math.ceil(target / (duration / 16));
        const timer = setInterval(function () {
          current += step;
          if (current >= target) {
            el.textContent = target;
            clearInterval(timer);
          } else {
            el.textContent = current;
          }
        }, 16);
        observer.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );

  els.forEach(function (el) {
    observer.observe(el);
  });
})();

/* Dark mode toggle */
(function () {
  var toggle = document.querySelector('.dark-toggle');
  var html = document.documentElement;
  if (!toggle) return;

  toggle.addEventListener('click', function () {
    html.classList.toggle('dark');
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
  });
})();
