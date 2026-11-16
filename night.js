// Past the first screen the forest sinks into near-darkness, leaving drifting fog and the golden dust.
// Same fade as the homepage. Pages mark the layers with data-night-depth and data-night-fog.
(function () {
  var frame = null;
  function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
  function tick() {
    frame = null;
    var vh = window.innerHeight || 1;
    var night = clamp01((window.scrollY - vh * 0.25) / (vh * 0.75));
    var depth = document.querySelectorAll('[data-night-depth]');
    for (var i = 0; i < depth.length; i++) depth[i].style.opacity = (night * 0.97).toFixed(3);
    var fog = document.querySelectorAll('[data-night-fog]');
    for (var j = 0; j < fog.length; j++) fog[j].style.opacity = night.toFixed(3);
  }
  function schedule() { if (!frame) frame = requestAnimationFrame(tick); }
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  window.addEventListener('load', schedule);
  // the page renders after this script runs, so keep checking briefly until the layers exist
  var tries = 0;
  var wait = setInterval(function () {
    schedule();
    if (document.querySelector('[data-night-depth]') || ++tries > 40) clearInterval(wait);
  }, 100);
})();
