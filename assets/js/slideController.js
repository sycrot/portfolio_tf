const slideContent = document.querySelector('.slide-content-items')
const btnNextSlide = document.querySelector('.actions-next i')
const btnPrevSlide = document.querySelector('.actions-prev i')
const slideNavigation = document.querySelector('.slide-actions-navigation')
let currentSlide = 0

const slideItems = [
    {
        title: 'ecommerce-carrefour-tech-day-dio',
        tools_used: ['HTML', 'CSS e React'],
        description: 'Um site ecommerce baseado no Carrefour, utilizando uma das API`s do próprio site carrefour.',
        preview_link: 'https://ecommerce-carrefour-tech-day-dio.vercel.app/',
        repo_link: 'https://github.com/sycrot/ecommerce-carrefour-tech-day-dio',
        img_bg: 'ecommerce-carrefour-tech-day-dio'
    },
    {
        title: 'react_quizacarde',
        tools_used: ['HTML', 'CSS e React'],
        description: 'é um jogo quiz, totalmente desenvolvido com react, com contador de vidas, e outras funções.',
        preview_link: null,
        repo_link: 'https://github.com/sycrot/react_quizacarde',
        img_bg: 'react_quiz_app_web_1434041121'
    },
    {
        title: 'calculator-app-main',
        tools_used: ['HTML', 'CSS e Javascript'],
        description: 'uma calculadora simples, onde o usuário pode escolher o tema que desejar.',
        preview_link: 'https://sycrot.github.io/calculator-app-main/',
        repo_link: 'https://github.com/sycrot/calculator-app-main',
        img_bg: 'img_calc_project_frontendmentor'
    }
]

slideItems.map((item, index) => (
    slideContent.innerHTML += `
        <div id="slide_item${index}" class="slide-item" style="background-image: url(assets/img/posts/${item.img_bg}.jpg);">
            <div class="slide-texts-container">
                <div class="slide-texts-content">
                    <div class="slide--title item--title">
                        <i class="description--title"><img src="assets/img/icons/star.svg"/></i>
                        <h3>Destaques</h3>
                    </div>
                    <div class="slide--paragraph">Desenvolvido com ${item.tools_used.join(', ')}<br> <h3>${item.title}</h3>${item.description}</div>
                    <div class="slide-items-actions">
                        <a href="${item.preview_link}" class=${item.preview_link == null ? "slide-action-item-null" : "slide-action-item"} target="_blank"><i class="fas fa-globe"></i>Visualizar</a>
                        <a href="${item.repo_link}" class="slide-action-item" target="_blank"><i class="fas fa-folder-open"></i>Repositório</a>
                    </div>
                </div>
            </div>
        </div>
    `
))

for (let i in slideItems) {
    slideNavigation.innerHTML += `
        <div class="slide-circle-navigation" id="slide-circle-${i}">
        </div>
    `
}


const slideContentItems = document.querySelectorAll('.slide-item')
const slideBtnsNavigation = document.querySelectorAll('.slide-circle-navigation')
init()
/* 
const intervalSlide = setInterval(() => {
    showNextSlide()
}, 7000) */

function init() {
    var _show = slideContent.querySelectorAll('.show-slide')
    var _btnShow = slideNavigation.querySelectorAll('.slide-circle-navigation-active')

    Array.prototype.forEach.call(_show, item => {
        item.classList.remove('show-slide')
    })
    Array.prototype.forEach.call(_btnShow, item => {
        item.classList.remove('slideNavigation')
    } )
    slideContentItems[0].classList.add('show-slide')
    slideBtnsNavigation[0].classList.add('slide-circle-navigation-active')

    addListeners()
}

function addListeners() {
    btnNextSlide.addEventListener('click', showNextSlide)
    btnPrevSlide.addEventListener('click', showPrevSlide)
}

function showNextSlide() {
    if (currentSlide == slideItems.length) {
        currentSlide = 0;
    }
    currentSlide++
    showSlide()
}

function showPrevSlide() {
    if (currentSlide <= 0) {
        currentSlide = slideItems.length
    }
    currentSlide--
    showSlide()
}

function showSlide() {
    var quantity = slideContentItems.length
    var slide = currentSlide % quantity
    slide = Math.abs(slide)

    document.querySelector('.show-slide').classList.remove('show-slide')
    document.querySelector('.slide-circle-navigation-active').classList.remove('slide-circle-navigation-active')

    slideContentItems[slide].classList.add('show-slide')
    slideBtnsNavigation[slide].classList.add('slide-circle-navigation-active')
}

for (let i in slideBtnsNavigation) {
    slideBtnsNavigation[i].addEventListener('click', () => {
        currentSlide = i
        showSlide()
    })
}