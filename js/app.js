const accordions = document.querySelectorAll('.accordion');

if (accordions.length) {
  for (const accordion of accordions) {
    accordion.addEventListener('click', function(e) {
      const btn = e.target.closest('.accordion__btn');

      if (!btn) return;

      const content = btn.nextElementSibling;

      if (btn.classList.contains('accordion__btn_active')) {
        btn.classList.remove('accordion__btn_active');
        btn.setAttribute('aria-expanded', 'false');
      } else {
        btn.classList.add('accordion__btn_active');
        btn.setAttribute('aria-expanded', 'true');
      }

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = `${content.scrollHeight}px`;
      }
    });
  }
}
