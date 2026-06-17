/* Shared page chrome: hamburger, page-veil transitions, reveal-on-scroll, font preloading */
(function(){
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ===== Hamburger =====
     Bind both the toggle AND the outside-close here so the order is deterministic.
     stopPropagation() on the button click is what makes mobile reliable: without it
     the same tap bubbled up to the document handler could (depending on touch timing
     on iOS Safari) be seen as an "outside" click and immediately re-close the menu.
     We also bind touchend with preventDefault so the menu opens on the first tap
     even when the browser is still deciding click vs scroll. */
  var hb = document.getElementById('hamburger'), nl = document.getElementById('navLinks');
  if (hb && nl) {
    function toggleMenu(e){
      if (e) { e.preventDefault(); e.stopPropagation(); }
      nl.classList.toggle('open');
    }
    hb.addEventListener('click', toggleMenu);
    hb.addEventListener('touchend', toggleMenu);

    /* Close on outside click — but ignore clicks on the menu itself or its trigger */
    document.addEventListener('click', function(e){
      if (!nl.classList.contains('open')) return;
      if (nl.contains(e.target) || hb.contains(e.target)) return;
      nl.classList.remove('open');
    });

    /* Close after navigating via a menu link */
    nl.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ nl.classList.remove('open'); });
    });
  }

  /* Reveal on scroll */
  var io = new IntersectionObserver(function(ents){
    ents.forEach(function(en){ if (en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });

  /* Page transitions (veil) */
  var veil = document.getElementById('veil');
  if (veil) {
    veil.classList.add('out');
    setTimeout(function(){ veil.className = 'page-veil'; }, 700);
    document.querySelectorAll('a[data-link]').forEach(function(a){
      a.addEventListener('click', function(e){
        var href = a.getAttribute('href');
        if (!href || href.charAt(0) === '#' || href.indexOf('http') === 0 || href.indexOf('mailto') === 0 || a.target === '_blank') return;
        e.preventDefault();
        veil.className = 'page-veil in';
        setTimeout(function(){ window.location.href = href; }, 520);
      });
    });
  }
})();
