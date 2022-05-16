(function() {
    const projectsContainer = document.querySelector('.pj--items')

    const projects = [
        {
            title: 'test_primo',
            description: 'Landing page para teste de uma companhia',
            sampleImg: 'test_primo-landing-page_testefor',
            tags: [
                'HTML',
                'CSS',
                'JS'
            ],
            author: 'Thiago Farias',
            linkPages: 'https://sycrot.github.io/test_primo/',
            linkRepository: 'https://github.com/sycrot/test_primo',
        },

        {
            title: 'blogr-landing-page',
            description: 'Landing page de uma companhia',
            sampleImg: 'blogr-landing-page_frontendmentor',
            tags: [
                'HTML',
                'CSS',
                'JS'
            ],
            author: 'Thiago Farias',
            linkPages: 'https://sycrot.github.io/blogr-landing-page/',
            linkRepository: 'https://github.com/sycrot/blogr-landing-page',
        },

        {
            title: 'Crowdfunding_Product_Page',
            description: 'Landing page de um produto',
            sampleImg: 'img_crowfunding_product_page_frontendmentor',
            tags: [
                'HTML',
                'CSS',
                'JS'
            ],
            author: 'Thiago Farias',
            linkPages: 'https://sycrot.github.io/Crowdfunding_Product_Page/',
            linkRepository: 'https://github.com/sycrot/Crowdfunding_Product_Page',
        },

        {
            title: 'calculator-app-main',
            description: 'Aplicação de calculadora, com escolha de temas',
            sampleImg: 'img_calc_project_frontendmentor',
            tags: [
                'HTML',
                'CSS',
                'JS'
            ],
            author: 'Thiago Farias',
            linkPages: 'https://sycrot.github.io/calculator-app-main/',
            linkRepository: 'https://github.com/sycrot/calculator-app-main',
        },

        {
            title: 'tip_calculator_app',
            description: 'App que calcula o valor de gorjeta e o valor que cada um deve pagar',
            sampleImg: 'tip-calculator-app_frontendmentor',
            tags: [
                'HTML',
                'CSS',
                'JS'
            ],
            author: 'Thiago Farias',
            linkPages: 'https://sycrot.github.io/tip_calculator_app/',
            linkRepository: 'https://github.com/sycrot/tip_calculator_app',
        },

        {
            title: 'github-user-search',
            description: 'Usando a APi do GitHub para buscar informações dos usuários',
            sampleImg: 'github-user-search-page-img-1659061021',
            tags: [
                'HTML',
                'CSS',
                'JS',
                'API'
            ],
            author: 'Thiago Farias',
            linkPages: 'https://sycrot.github.io/github-user-search/',
            linkRepository: 'https://github.com/sycrot/github-user-search',
        },
        {
            title: 'memory_game',
            description: 'Jogo da memória com vários jogadores',
            sampleImg: 'memory_game_tf_mult_1129261021',
            tags: [
                'HTML',
                'CSS',
                'JS'
            ],
            author: 'Thiago Farias',
            linkPages: 'https://sycrot.github.io/memory_game/',
            linkRepository: 'https://github.com/sycrot/memory_game',
        },
        {
            title: 'react_quizacarde',
            description: 'Game quiz criado com react usando styled-components',
            sampleImg: 'react_quiz_app_web_1434041121',
            tags: [
                'HTML',
                'CSS',
                'TypeScript',
                'React'
            ],
            author: 'Thiago Farias',
            linkRepository: 'https://github.com/sycrot/react_quizacarde',
        },
        {
            title: 'teste_econverse',
            description: '',
            sampleImg: 'teste_econverse',
            tags: [
                'HTML',
                'CSS',
                'Javascript',
                'Vue'
            ],
            author: 'Thiago Farias',
            linkRepository: 'https://github.com/sycrot/teste_econverse',
        }
    ]

    projects.reverse().map((item, index) => (
        projectsContainer.innerHTML += `
        <div class="pj-project-item" style="background: url(assets/img/posts/${item.sampleImg}.jpg); background-size: 500px;">
            <div class="project--texts">
                <div class="project--texts-principal">
                    <h3 class="project--title">${item.title}</h3>
                    <p class="project--paragraph">${item.description}</p>
                </div>
                <ul class="project--frameworkslist">
                    ${item.tags.map((tag, index) => (
                        `<li>${tag}</li>`
                    )).join(' ')}
                </ul>
            </div>
            <div class="pj-actions">
                ${item.linkPages !== undefined ? `<a class="pj-action-item" href="${item.linkPages}" target="_blank">Visualizar</a>` : ''}
                <a class="pj-action-item" href="${item.linkRepository}" target="_blank">Repositório</a>
            </div>
        </div>
        `
    ))
})()