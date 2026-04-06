(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const body = document.body;

  if (!mobileMenu || !openMenuBtn || !closeMenuBtn) return;

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true';
    const nextState = !isMenuOpen;
    openMenuBtn.setAttribute('aria-expanded', String(nextState));
    mobileMenu.classList.toggle('is-open', nextState);
    body.classList.toggle('no-scroll', nextState);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);


  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', 'false');
    body.classList.remove('no-scroll');
  });
})();