class Accordion {
  constructor(accordion) {
    this.isAnimate = false;

    accordion.addEventListener('click', this.clickHandler);
  }

  clickHandler = (e) => {
      e.stopPropagation();

      if (this.isAnimate) return;

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

      const delay = parseFloat(getComputedStyle(content).transitionDuration) * 1000 || 0;

      if (content.style.height) {
        this.isAnimate = true;

        content.style.height = `${content.scrollHeight}px`;

        setTimeout(() => { content.style.height = ''; }, 0);
        setTimeout(() => this.isAnimate = false, delay);
      } else {
        this.isAnimate = true;

        content.style.height = `${content.scrollHeight}px`;

        if (delay) {
          setTimeout(() => {
            content.style.height = 'auto';

            this.isAnimate = false;
         }, delay);
        } else {
          content.style.height = 'auto';
        }
      }
  }
}

const accordions = document.querySelectorAll('.accordion');

if (accordions.length) {
  for (const accordion of accordions) {
    new Accordion(accordion);
  }
}
