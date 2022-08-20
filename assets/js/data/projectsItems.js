(function() {
    const projectsContainer = document.querySelector('.projects-items')

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
            description: 'Página inicial de uma loja de instrumentos',
            sampleImg: 'teste_econverse',
            tags: [
                'HTML',
                'CSS',
                'Javascript',
                'Vue'
            ],
            author: 'Thiago Farias',
            linkRepository: 'https://github.com/sycrot/teste_econverse',
        },
        {
            title: 'my-money-app-cod3r',
            description: 'Aplicação de finanças. Desenvolvido junto com o curso "Curso React + Redux" da Cod3r',
            sampleImg: 'my-money-app-cod3r',
            tags: [
                'HTML',
                'CSS',
                'Javascript',
                'React',
                'Redux'
            ],
            author: 'Thiago Farias',
            linkRepository: 'https://github.com/sycrot/my-money-app-frontend',
        },
        {
            title: 'ecommerce-carrefour-tech-day-dio',
            description: 'Site ecommerce desenvolvido para o concurso Carrefour TechDay da Digital Innovation One',
            sampleImg: 'ecommerce-carrefour-tech-day-dio',
            tags: [
                'HTML',
                'CSS',
                'Javascript',
                'React',
                'Typescript'
            ],
            author: 'Thiago Farias',
            linkPages: 'https://ecommerce-carrefour-tech-day-dio.vercel.app/',
            linkRepository: 'https://github.com/sycrot/ecommerce-carrefour-tech-day-dio',
        }
    ]

    projects.reverse().map((item, index) => (
        projectsContainer.innerHTML += `
        <div class="project-item" style="background-image: url(assets/img/posts/${item.sampleImg}.jpg);">
            <div class="project-item-content">
                <div class="project-item-texts">
                    <div class="project-item-title">
                        ${item.title}
                    </div>
                    <div class="project-item-tools">
                        ${item.tags.join(' ')}
                    </div>
                    <div class="project-item-description">
                        ${item.description}
                    </div>
                </div>
                <div class="project-item-actions">
                    <a href="${item.linkPages}" class="project-item-button" target="_blank">Visualizar</a>
                    <a href="${item.linkRepository}" class="project-item-button" target="_blank">Repositório</a>
                </div>
            </div>
        </div>
        `
    ))
})()