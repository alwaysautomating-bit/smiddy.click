// Blue Dot Technology — motion.
// The <html> gets a "js" class inline in <head>, so content is only hidden
// when this script can reveal it again. Everything here is skipped for
// people who prefer reduced motion (the CSS shows content immediately).
(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Hero: lines rise in one after another once the page is ready.
  requestAnimationFrame(function () { root.classList.add('is-ready'); });

  // Nav gains a hairline and soft shadow once the page has scrolled.
  var nav = document.querySelector('.nav');
  if (nav) {
    var onScroll = function () { nav.classList.toggle('nav--scrolled', window.scrollY > 8); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Grid items reveal in a short stagger rather than all at once.
  var groups = '.fixes, .tiers, .demos, .bench, .work-why__list, .evolve, .work-proof__cols, .work-next__links, .ledger, .nots, .lessons ul';
  document.querySelectorAll(groups).forEach(function (group) {
    Array.prototype.forEach.call(group.children, function (child, i) {
      child.classList.add('reveal-item');
      child.style.setProperty('--i', Math.min(i, 8));
    });
  });

  var els = document.querySelectorAll('.reveal, .reveal-item');
  if (!els.length) return;
  if (reduce || !('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }
  // Anything already on screen at load appears immediately, with no fade.
  var vh = window.innerHeight;
  els = Array.prototype.filter.call(els, function (el) {
    var r = el.getBoundingClientRect();
    if (r.top < vh && r.bottom > 0) { el.classList.add('is-visible', 'instant'); return false; }
    return true;
  });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0, rootMargin: '0px 0px -4% 0px' });
  els.forEach(function (el) { io.observe(el); });
})();

// Email links are assembled in the browser so the address never appears
// in the page source for scrapers. Without JavaScript, links fall back to
// the contact section and the address shows as "name [at] domain [dot] com".
(function () {
  var user = 'bluedottechnology', host = 'outlook' + '.' + 'com';
  var addr = user + '@' + host;
  document.querySelectorAll('a[data-mail]').forEach(function (a) {
    var subject = a.getAttribute('data-mail');
    a.href = 'mailto:' + addr + (subject ? '?subject=' + subject : '');
    if (/\[at\]/.test(a.textContent)) a.textContent = addr;
  });
})();
