const btnMenuBar = document.querySelector('.navbar--btnmenu i')
const menuNavList = document.querySelector('.navlist')
const menuItems = document.querySelectorAll('.navlist--item-link[href^="#"]')
const footerNavItems = document.querySelectorAll('.footer--ul-link[href^="#"]')
const navbarInto = document.querySelector('.navbar-into')

let topWindow = 90

window.addEventListener('scroll', e => {
    const footer = document.querySelector('#footer').offsetTop-490

    if (this.scrollY >= footer) { navbarInto.classList.remove('navbar-into-open') }
    else { navbarInto.classList.add('navbar-into-open') }
})

/* let lastScrollTop = 0
window.addEventListener('scroll', e => {
    if (e.scrollY === lastScrollTop) return

    this.scrollY < lastScrollTop ? navbarInto.classList.add('navbar-into-open') : navbarInto.classList.remove('navbar-into-open')

    lastScrollTop = this.scrollY
}, true) */

renderEvents()

function openMenu() {
    if(menuNavList.classList.contains('navlist-open')) {
        menuNavList.classList.remove('navlist-open')
    } else {
        menuNavList.classList.add('navlist-open')
    }
}

function renderEvents() {
    btnMenuBar.addEventListener('click', openMenu)
    menuItems.forEach(i => {
        i.addEventListener('click', scrollToIdOnClick)
    })
    footerNavItems.forEach(i => {
        i.addEventListener('click', scrollToIdOnClick)
    })
}

function scrollToIdOnClick(event) {
    event.preventDefault()
    
    const to = getScrollTopByHref(event.target)
    const href = event.target.hash
    scrollToPosition(to, href)
    menuNavList.classList.remove('navlist-open')
}

function scrollToPosition(to, hash) {
    let winMatchMedia = window.matchMedia('(min-width: 800px)').matches
    if (winMatchMedia) topWindow = 200
    if (winMatchMedia && hash == '#projects') topWindow = 150
    window.scroll({
        top: to - topWindow,
        behavior: 'smooth'
    })
}

function getScrollTopByHref(el) {
    const id = el.getAttribute('href')
    return document.querySelector(id).offsetTop
}

