const menu = document.getElementById('menu')
const ham = document.querySelector('.navbar__ham')
const send = document.getElementById('send')
const email = document.getElementById('email')
const msj = document.getElementById('mensaje')
ham.addEventListener('click', () => {
  if (menu.classList.contains('menu') && !menu.classList.contains('show')) {
    menu.classList.add('show')
    ham.src = '/images/icon-close.svg'
  } else {
    menu.classList.remove('show')
    ham.src = '/images/icon-hamburger.svg'
  }
})

send.addEventListener('click', (e) => {
  const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (emailRegex.test(email.value)) {
    console.log('email válido')
    msj.textContent = 'Email send correctly'
    msj.classList.toggle('error')
  }
  else {
    console.log('email incorrecto')
    msj.textContent = 'Email not valid'
    msj.classList.toggle('error')
    email.value = ''
  }
})

new Splide('.splide', {
  type: 'loop',
  focus: 'center',
  gap: '20px',
  perPage: 1,
  perMove: 1,
  keyboard: true,
  speed:1000
}).mount(
);