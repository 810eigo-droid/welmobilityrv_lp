(function(){
  document.head.insertAdjacentHTML('beforeend','<style>.wmrv-js .wmrv-lp .reveal{opacity:0;transform:translateY(28px);transition:opacity .8s ease,transform .8s ease}</style>');
  document.body.classList.add('wmrv-js');
  var els = document.querySelectorAll('.wmrv-lp .reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
      });
    }, { threshold: .15 });
    els.forEach(function(el){ io.observe(el); });
  } else {
    els.forEach(function(el){ el.classList.add('is-visible'); });
  }
  var header = document.querySelector('.wmrv-lp .header');
  if (header) {
    window.addEventListener('scroll', function(){
      header.classList.toggle('is-scrolled', window.scrollY > 10);
    }, { passive: true });
  }
})();
