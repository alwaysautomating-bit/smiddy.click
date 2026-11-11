// Blue Dot Technology — scroll reveal for .reveal sections.
// The <html> gets a "js" class inline in <head>, so content is only hidden
// when this script can reveal it again.
(function () {
  var els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  if (!('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
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
