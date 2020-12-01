const menu = document.getElementById('menu')
const ham = document.querySelector('.navbar__ham')
ham.addEventListener('click', () => {
  if (menu.classList.contains('menu') && !menu.classList.contains('show')) {
    menu.classList.add('show')
    ham.src = '/images/icon-close.svg'
  } else {
    menu.classList.remove('show')
    ham.src = '/images/icon-hamburger.svg'
  }
})


new Splide('.splide', {
  type: 'loop',
  focus: 'center',
  gap: '20px',
  perPage: 3,
  perMove: 1,
  keyboard: true,
  speed:1000
}).mount(
);