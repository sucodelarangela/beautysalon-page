// Function: opens and close the menu when clicking the respective icon
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

// for every ELEMENT inside the constant TOGGLE...
for (const element of toggle) {
  // ...when JS 'LISTENS' to a CLICK, it must execute this FUNCTION:
  element.addEventListener('click', function () {
    // function: alternate the NAV element class in the CLASSLIST to contain or not the class 'show'
    nav.classList.toggle('show')
  })
}

// Function: when clicking an item in the menu, hide the menu
const links = document.querySelectorAll('nav ul li a')

// for every LINK inside the constant LINKS...
for (const link of links) {
  // ...when JS 'LISTENS' to a CLICK, it must execute this FUNCTION:
  link.addEventListener('click', function () {
    //function: remove the SHOW class from the selector NAV
    nav.classList.remove('show')
  })
}

// Function: change header class when scrolling
// Function: show back-to-top button when scrolling
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
const backToTopButton = document.querySelector('.back-to-top')

function changeHeaderOnScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', function () {
  changeHeaderOnScroll()
  backToTop()
})

// Function: Swiper for the testimonials
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

//Function: Scroll reveal smoothly scrolls and reveals the content in the page using the function below
const scrollReveal = ScrollReveal({
  origin: 'top', //vai vir do topo
  distance: '30px', //de uma distância de 30px
  duration: 700, //por 700ms
  reset: true //e reseta ao voltar a página
})

//constante, revele os seguintes `itens` num {intervalo de 100ms}:
scrollReveal.reveal(
  `
#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links
footer .brand, footer .social
`,
  {interval: 100}
)
