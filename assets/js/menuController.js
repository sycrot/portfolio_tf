const btnMenuBar = document.querySelector('.header-nav-menubutton')
const menuNavList = document.querySelector('.nav-menu')
const menuItems = document.querySelectorAll('.nav-menu-list-item a[href^="#"]')
const footerNavItems = document.querySelectorAll('.menu-list-item a[href^="#"]')

let topWindow = 70

window.addEventListener('scroll', e => {
    const footer = document.querySelector('footer').offsetTop-490

    if (this.scrollY >= footer) { menuNavList.classList.remove('navbar-into-open') }
    else { menuNavList.classList.add('navbar-into-open') }
})

renderEvents()

function openMenu() {
    if(menuNavList.classList.contains('show-nav-menu')) {
        menuNavList.classList.remove('show-nav-menu')
    } else {
        menuNavList.classList.add('show-nav-menu')
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
    menuNavList.classList.remove('show-nav-menu')
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

