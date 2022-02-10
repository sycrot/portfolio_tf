
let menuItems = document.querySelectorAll('.navlist--item-link[href^="#"]')

menuItems.forEach(i => {
    i.addEventListener('click', scrollToIdOnClick)
})

function scrollToIdOnClick(event) {
    event.preventDefault()
    
    const to = getScrollTopByHref(event.target)
    scrollToPosition(to)
}

function scrollToPosition(to) {
    window.scroll({
        top: to - 200,
        behavior: 'smooth'
    })
}

function getScrollTopByHref(el) {
    const id = el.getAttribute('href')
    return document.querySelector(id).offsetTop
}