const slideContent = document.querySelector('.slide-content-items')
const btnNextSlide = document.querySelector('.actions-next i')
const btnPrevSlide = document.querySelector('.actions-prev i')
let currentSlide = 0

const slideItems = [
    {
        title: 'react_quizacarde',
        tools_used: ['HTML', 'CSS e React'],
        description: 'é um jogo quiz, totalmente desenvolvido com react, com contador de vidas, e outras funções.',
        preview_link: null,
        repo_link: 'https://github.com/sycrot/react_quizacarde',
        img_bg: 'react_quiz_app_web_1434041121'
    },
    {
        title: 'memory_game',
        tools_used: ['HTML', 'CSS e Javascript'],
        description: 'um jogo da memória, onde você pode escolher a quantidade de itens e a quantidade de jogadores.',
        preview_link: 'https://sycrot.github.io/memory_game/',
        repo_link: 'https://github.com/sycrot/memory_game',
        img_bg: 'memory_game_tf_mult_1129261021'
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
                        <i class="fas fa-layer-group description--title"></i>
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


const slideContentItems = document.querySelectorAll('.slide-item')
init()
/* 
const intervalSlide = setInterval(() => {
    showNextSlide()
}, 7000) */

function init() {
    var _show = slideContent.querySelectorAll('.show-slide')

    Array.prototype.forEach.call(_show, item => {
        item.classList.remove('show-slide')
    })
    slideContentItems[0].classList.add('show-slide')
    btnNextSlide.removeAttribute('style')
    btnPrevSlide.removeAttribute('style')

    addListeners()
}

function addListeners() {
    btnNextSlide.addEventListener('click', showNextSlide)
    btnPrevSlide.addEventListener('click', showPrevSlide)
}

function showNextSlide() {
    currentSlide++
    showSlide()
}

function showPrevSlide() {
    currentSlide--
    showSlide()
}

function showSlide() {
    var quantity = slideContentItems.length
    var slide = currentSlide % quantity
    slide = Math.abs(slide)

    document.querySelector('.show-slide').classList.remove('show-slide')
    slideContentItems[slide].classList.add('show-slide')
}