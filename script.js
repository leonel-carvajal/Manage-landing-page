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

let number = 0
console.log(number)
if (window.matchMedia("(max-width:360px)").matches) {
  number = 1
}
if (!window.matchMedia("(max-width:360px)").matches) {
  number = 3
}

new Splide('.splide',
  {
  type: 'loop',
  focus: 'center',
  gap: '50px',
  perPage: number,
  perMove: 1,
  keyboard: true,
  speed:1000
  }
).mount(
);