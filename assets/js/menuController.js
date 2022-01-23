const btnMenuBar = document.querySelector('.navbar--btnmenu i')
const menuNavList = document.querySelector('.navlist')

btnMenuBar.addEventListener('click', openMenu)

function openMenu() {
    if(menuNavList.classList.contains('navlist-open')) {
        menuNavList.classList.remove('navlist-open')
    } else {
        menuNavList.classList.add('navlist-open')
    }
}

