/* Shared page chrome: hamburger, page-veil transitions, reveal-on-scroll, font preloading */
(function(){
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Hamburger */
  var hb = document.getElementById('hamburger'), nl = document.getElementById('navLinks');
  if (hb && nl) hb.addEventListener('click', function(){ nl.classList.toggle('open'); });

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
