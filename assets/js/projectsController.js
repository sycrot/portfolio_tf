(function () {
    const items = document.querySelectorAll('.project-item')
    const btnPrev = document.querySelector('.navigation-btn-prev')
    const btnNext = document.querySelector('.navigation-btn-next')

    let divItems = []
    let pageActual = 1
    let totalPage = 0
    let limitItems = 1

    if (window.matchMedia("(min-width: 800px").matches) {
        limitItems = 2
    }
    if (window.matchMedia("(min-width: 1280px").matches) {
        limitItems = 3
    }

    
    items.forEach(e => {divItems.push(e)})
    generateItemsQuantity(items, pageActual)
    initButtonEvents()

    function generateItemsQuantity(items, pageActual) {
        listItems(items, pageActual, limitItems)
    }

    function listItems(items, pageActual, limitItems) {
        let result = []
        let totalPages = Math.ceil(items.length / limitItems)
        let count = (pageActual * limitItems) - limitItems
        let delimiter = count + limitItems
        totalPage = totalPages

        if (pageActual <= totalPage) {
            for (let i=count; i<delimiter; i++) {
                result.push(items[i])
                count++
            }
        }

        items.forEach(e => {
            removeClassList(e, 'show-post-container')
        })

        result.forEach(e => {
            if (e !== undefined) {
                addClassList(e , 'show-post-container')
            }
        })

    }

    function initButtonEvents() {
        nextPage()
        backPage()
        /* navigationPages() */
    }

    function nextPage() {
        if (totalPage <= 1) {
            addClassList(btnNext, 'portfolio-btn-end')
        }
        btnNext.addEventListener('click', () => {
            /* backTopContainer() */
            pageActual++
            generateItemsQuantity(items, pageActual)
            /* pageActualActivate(pageActual) */
            if (pageActual >= totalPage) {
                addClassList(btnNext, 'portfolio-btn-end')
            } else if (pageActual > 1) {
                removeClassList(btnPrev, 'portfolio-btn-end')
            }
        })
    }

    function backPage() {
        if (pageActual <= 1) {
            addClassList(btnPrev, 'portfolio-btn-end')
        }
        btnPrev.addEventListener('click', () => {
            /* backTopContainer() */
            pageActual--
            generateItemsQuantity(items, pageActual)
            /* pageActualActivate(pageActual) */
            if (pageActual <= 1) {
                addClassList(btnPrev, 'portfolio-btn-end')
            } else if (pageActual < totalPage) {
                removeClassList(btnNext, 'portfolio-btn-end')
            }
        })
    }

    /* function backTopContainer() {
        const top = document.querySelector('.projects-content').offsetTop

        window.scroll({
            top: top - 150,
            behavior: 'smooth'
        })
    } */

    function addClassList(element, classList) {
        element.classList.add(classList)
    }

    function removeClassList(element, classList) {
        element.classList.remove(classList)
    }
})()