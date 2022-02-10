const btnMenuBar = document.querySelector('.navbar--btnmenu i')
const menuNavList = document.querySelector('.navlist')

let menuItems = document.querySelectorAll('.navlist--item-link[href^="#"]')
let footerNavItems = document.querySelectorAll('.footer--ul-link[href^="#"]')

let topWindow = 100

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
    scrollToPosition(to)
    menuNavList.classList.remove('navlist-open')
}

function scrollToPosition(to) {
    if (window.matchMedia('(min-width: 800px').matches) {
        topWindow = 200
    }
    window.scroll({
        top: to - topWindow,
        behavior: 'smooth'
    })
}

function getScrollTopByHref(el) {
    const id = el.getAttribute('href')
    return document.querySelector(id).offsetTop
}

