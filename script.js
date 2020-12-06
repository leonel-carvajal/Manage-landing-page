const menu = document.getElementById('menu')
const ham = document.querySelector('.navbar__ham')
const email = document.getElementById('email')

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
if (window.matchMedia("(max-width:360px)").matches) {
  number = 1
}
if (!window.matchMedia("(max-width:360px)").matches) {
  number = 3
}
const validateEmail = (email) => {
  const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (emailRegex.test(email)) alert('Email Valid')
  else alert('Not Valid Email')
}
const comenzar = () => {
  const send = document.getElementById('send')
  send.addEventListener('click',validateEmail)
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
window.addEventListener('DOMContentLoaded',comenzar,false)