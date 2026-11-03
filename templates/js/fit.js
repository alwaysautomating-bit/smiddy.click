// Scales the letter-size page cards down on narrow screens so a whole page
// fits the viewport. Has no effect on print (doc.css resets zoom there).
(function () {
  var PAGE_PX = 8.5 * 96 + 32; // page width + desk padding
  var root = document.querySelector('.doc');
  if (!root) return;
  function fit() {
    var z = Math.min(1, window.innerWidth / PAGE_PX);
    root.style.setProperty('--doc-zoom', z.toFixed(3));
  }
  fit();
  window.addEventListener('resize', fit);
})();
