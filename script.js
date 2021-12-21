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
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})
