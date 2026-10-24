// Staggered scroll-reveal for any element with class="reveal".
// Runs on every page via BaseLayout. Respects prefers-reduced-motion by
// doing nothing (CSS already shows reduced-motion elements at full opacity).

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  const groups = new Map();

  document.querySelectorAll('.reveal').forEach((el) => {
    const parent = el.parentElement;
    if (!groups.has(parent)) groups.set(parent, []);
    groups.get(parent).push(el);
  });

  groups.forEach((siblings) => {
    siblings.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i, 6) * 70}ms`;
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}
