const header = document.querySelector('.header');
const nav = document.querySelector('.nav');

document.addEventListener(
  'scroll',
  () => {
    if (window.scrollY >= 200) {
      nav.classList.add('nav--bar');
    } else if (window.scrollY < 200) {
      nav.classList.remove('nav--bar');
    }
  },
  { passive: true }
);
