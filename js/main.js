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

/* Animate marquees with JS — draggable, pauses on interaction */
(function () {
  var marquees = document.querySelectorAll(".marquee");
  if (!marquees.length) return;

  var offsets = [];
  var running = [];
  var dragState = null;
  var rafId = null;

  function getClientX(e) {
    return e.touches ? e.touches[0].clientX : e.clientX;
  }

  marquees.forEach(function (el, i) {
    offsets[i] = 0;
    running[i] = true;
    el.style.transform = "translateX(0px)";

    el.addEventListener("mousedown", function (e) { onStart(e, i); });
    el.addEventListener("touchstart", function (e) { onStart(e, i); }, { passive: true });
  });

  function stepMarquees() {
    marquees.forEach(function (el, i) {
      if (!running[i]) return;
      var halfW = el.scrollWidth / 2;
      offsets[i] -= 0.5;
      if (offsets[i] <= -halfW) offsets[i] += halfW;
      el.style.transform = "translateX(" + offsets[i] + "px)";
    });
    rafId = requestAnimationFrame(stepMarquees);
  }

  rafId = requestAnimationFrame(stepMarquees);

  function onStart(e, idx) {
    var el = e.currentTarget;
    running[idx] = false;
    el.style.cursor = "grabbing";
    dragState = { el: el, startX: getClientX(e), offset: offsets[idx], idx: idx };
  }

  function onMove(e) {
    if (!dragState) return;
    var cx = getClientX(e);
    var dx = cx - dragState.startX;
    var pos = dragState.offset + dx;
    dragState.el.style.transform = "translateX(" + pos + "px)";
    dragState.currentPos = pos;
  }

  function onEnd() {
    if (!dragState) return;
    dragState.el.style.cursor = "";
    offsets[dragState.idx] = dragState.currentPos !== undefined ? dragState.currentPos : dragState.offset;
    running[dragState.idx] = true;
    dragState = null;
  }

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
