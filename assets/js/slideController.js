const slideContent = document.querySelector('.carousel-content-items')
const btnNextSlide = document.querySelector('.carousel-btn-next')
const btnPrevSlide = document.querySelector('.carousel-btn-prev')
const slideNavigation = document.querySelector('.carousel-actions-navigation')
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
        <div id="slide_item${index}" class="carousel-item">
            <div class="carousel-grid">
                <div class="title-section">
                    <img src="assets/img/icons/highlights.svg" />
                    <p>Destaques</p>
                </div>
                <div class="carousel-content-text">
                    <p class="carousel-content-description">
                    Desenvolvido com ${item.tools_used.join(', ')}
                    <br />
                    <strong>${item.title}</strong>
                    <br />
                    ${item.description}
                    </p>
                </div>
                <div class="carousel-content-actions">
                    <a href="${item.preview_link}" target="_blank" class="carousel-content-button"><img src="assets/img/icons/visualization.svg" /> Visualizar</a>
                    <a href="${item.repo_link}" target="_blank" class="carousel-content-button"><img src="assets/img/icons/repository.svg" /> Repositório</a>
                </div>
            </div>
            
            <div class="carousel-image-container">
                <div class="carousel-content-image">
                    <div class="carousel-content-image-container">
                    <img src="assets/img/posts/${item.img_bg}.jpg" />
                </div>
            </div>
            <div class="carousel-image-bg">

            </div>
        </div>
    `
))

for (let i in slideItems) {
    slideNavigation.innerHTML += `
        <button class="carousel-btn-navigation" id="slide-circle-${i}"></button>
    `
}


const slideContentItems = document.querySelectorAll('.carousel-item')
const slideBtnsNavigation = document.querySelectorAll('.carousel-btn-navigation')
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
    showAnimation()
    if (currentSlide == slideItems.length) {
        currentSlide = 0;
    }
    currentSlide++
    showSlide()
}

function showPrevSlide() {
    showAnimation()
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

function showAnimation() {
    const text = document.querySelector('.carousel-content-description')
    const carouselActions = document.querySelector('.carousel-content-actions')
    const titleSection = document.querySelector('.carousel-grid .title-section')
    const carouselImage = document.querySelector('.carousel-content-image')
    const carouselImageBg = document.querySelector('.carousel-image-bg')

    text.style.animation = "none"
    carouselActions.style.animation = "none"
    titleSection.style.animation = "none"
    carouselImage.style.animation = "none"
    carouselImageBg.style.animation = "none"

    setTimeout(() => text.style.animation = '', 100)
    setTimeout(() => carouselActions.style.animation = '', 100)
    setTimeout(() => titleSection.style.animation = '', 100)
    setTimeout(() => carouselImage.style.animation = '', 100)
    setTimeout(() => carouselImageBg.style.animation = '', 100)
}

for (let i in slideBtnsNavigation) {
    slideBtnsNavigation[i].addEventListener('click', () => {
        currentSlide = i
        showSlide()
    })
}