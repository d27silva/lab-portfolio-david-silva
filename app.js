
// ABOUT PORTFOLIO
const allPortfolio = document.querySelector('.portfolio')

const portfolio = [
    {image: 'src/1.jpg', link: 'https://statics-submarino.b2w.io/especial/hotsite/star-wars/04/code.html', alt: 'starwars logo'},
    {image: 'src/2.jpg', link: 'https://statics-submarino.b2w.io/especial/110115722/01/110115722.html', alt: 'a series of unfurtunate events logo'},
    {image: 'src/3.jpg', link: 'http://img.americanas.com.br/produtos/01/02/special/hotsite/hotsite-nespresso/06/code.html', alt: 'nespresso logo'},
    {image: 'src/4.jpg', link: 'https://statics-submarino.b2w.io/especial/hotsite/hotsite-lancamentos-filmes-games-livros/06/hotsite-lancamentos.html', alt: 'fantastic beasts and where to find them logo'},
    {image: 'src/5.jpg', link: 'https://static.netshoes.com.br/banners/l_netshoes/2019-04-16/6392_6.html', alt: 'treebo logo'},
    {image: 'src/6.jpg', link: 'https://static.netshoes.com.br/banners/l_netshoes/2019-04-16/4575_8.html', alt: 'shoestock logo'},
    {image: 'src/7.jpg', link: 'portfolio/app-todo/to-do.html', alt: 'todo logo'},
    {image: 'src/8.jpg', link: 'https://static.netshoes.com.br/banners/l_netshoes/2019-04-16/61_7.html', alt: 'nike logo'}
]

portfolio.forEach(item => {
    allPortfolio.innerHTML += `
    <div class="card col-sm-3 m-0 p-0 bg-dark transparent ">
        <a class="portfolio-card" href=${item.link} target="blank"><img src=${item.image} alt="${item.alt}"></a>
    </div>
  `
})

// ABOUT MY EXPERIENCE
const allExperience = document.querySelector('.myExperience')

const jobNetShoes = [
    'Creating animated web pages for e-commerce with CSS, HTML, and JS;',
    'Directing and planning photograph shooting according to budget;',
    'Briefing photographers, stylists, and hair & make up artists;',
    'Close relationships with photographers, filmmakers, illustrators, designers and agents for Brand Creative;',
    'Working in partnership with the Buying, Merchandising & Design function;',
    'Working together with design teams to understand the key looks and trends for the seasons;',
    'Providing support & assistance to the Head of Creative;',
    'Editing images to upload on their website;'
]
const jobB2w = [
    'Editing images to upload on their website;',
    'Creating animated CSS and HTML pages;'
]
const jobVip = [
    'Creating templates for desktop systems;',
    'Managing Visual identity and Brand',
    'Creating digital and offline contents',
    'Working next to the CEO to create visual solutions for the company'
]

const myExperience = [
    {titulo: 'Web developer and Creative Art Director - 05/2017 to 01/2020', 
    subTitulo: 'Netshoes, São Paulo', 
    jobs: function () {
            const teste = jobNetShoes
            .map(item => {      
                return item = `<li>${item}</li>`               
            })
            .join('')
            return teste
        }
    },

    {titulo: 'Web Designer - 09/2013 to 05/2017', 
    subTitulo: 'B2W Digital, São Paulo', 
    jobs: function () {
        const teste = jobB2w
        .map(item => {      
            return item = `<li>${item}</li>`               
        })
        .join('')
        return teste
    }
    },

    {titulo: 'Graphic Designer - 09/2010 to 09/2013', 
    subTitulo: 'Vip-Systems, São Paulo',
    jobs: function () {
            const teste = jobVip
            .map(item => {      
                return item = `<li>${item}</li>`               
            })
            .join('')
            return teste
        }
    },
]

myExperience.forEach(item => {
    allExperience.innerHTML += `
    <h3>${item.titulo}</h3>
    <h4>${item.subTitulo}</h4>
    <ul type="square"  class="jobs pt-3 pb-5">${item.jobs()}</ul> 
    `
});

// ABOUT SKILLS
const allSkills = document.querySelector('.skills')

const skillsData = [
    {skill: 'Adobe Photoshop', porcentage: '95', image: 'src/photo.png', alt: 'Adobe Photoshop logo'},
    {skill: 'Adobe InDesign', porcentage: '40', image: 'src/id.png', alt: 'Adobe InDesign logo'},
    {skill: 'Adobe Illustrator', porcentage: '80', image: 'src/ilustra.png', alt: 'Adobe Illustrator logo'},
    {skill: 'Adobe Premiere', porcentage: '50', image: 'src/prem.png', alt: 'Adobe Premiere logo'},
    {skill: 'Graphic layout', porcentage: '88', image: 'src/graphic.png', alt: 'Graphic layout logo'},
    {skill: 'HTML & CSS', porcentage: '90', image: 'src/html.png', alt: 'HTML & CSS logo'},
    {skill: 'Java Script', porcentage: '40', image: 'src/js.png', alt: 'Java Script logo'},
    {skill: 'React', porcentage: '10', image: 'src/react.png', alt: 'React logo'},
    {skill: 'Bootstrap', porcentage: '50', image: 'src/boot.png', alt: 'Bootstrap logo'}
]

skillsData.forEach(item => {
    allSkills.innerHTML += `
    <div class="row mb-md-3 mb-5">
        <div class="col-lg-3"> 
            <img class="float-start me-3" src="${item.image}" alt="${item.alt}" style="max-width: 24px;" >
            <p>${item.skill}</p>    
        </div>   
        <div class="col-lg-9" >
            <div class="progress bg-danger">
                <div class="progress-bar bg-warning progress-bar-striped progress-bar-animated" role="progressbar" style="width: ${item.porcentage}%" aria-valuenow="00" aria-valuemin="0" aria-valuemax="100"></div>
            </div> 
        </div>        
    </div>
`
})

//ABOUT QUIZ
const correctAnswers = ['D', 'B', 'D', 'D']
const form = document.querySelector('.quiz-form')
const questionsForm = document.querySelector('.questions')
const p = document.createElement('p')
const button = document.querySelector('button')
const finalScoreContainer = document.querySelector('.result')
let score = 0   

const infoQuiz = [
    {numberQuestion: 'inputQuestion1', question: '1. What kind of person are you looking for?', answer1: 'Always tired', answer2: 'Lazy', answer3: 'Not interested', answer4: 'Hardworking and hungry to learn',},
    {numberQuestion: 'inputQuestion2', question: '2. How many years of experience are you looking for?', answer1: 'Zero', answer2: 'Between 5 and 10', answer3: 'Between 10 and 20', answer4: 'More than 20',},
    {numberQuestion: 'inputQuestion3', question: '3. Do you need someone with experience in JS and React?', answer1: 'No', answer2: 'Not necessary', answer3: `I don't know what that means`, answer4: 'Yes, it would be perfect!',},
    {numberQuestion: 'inputQuestion4', question: '4. Is there any chance for me to work from home?', answer1: 'Never', answer2: `I don't think so`, answer3: 'Maybe', answer4: 'It is possible for 2 or 3 days in the week',}
]

infoQuiz.forEach(item => {
    questionsForm.innerHTML += `
    <div class="my-5">                                 
    <p>${item.question}</p>                         
    <div class="form-check my-2 text-light">                  
      <label class="form-check-label"  style="font-size: 1.1wrem;">
        <input type="radio" name="${item.numberQuestion}" value="A">
          ${item.answer1}
      </label>
    </div>
    <div class="form-check my-2">
      <label class="form-check-label" style="font-size: 1.1rem;" >
        <input type="radio" name="${item.numberQuestion}" value="B">
        ${item.answer2}
      </label>
    </div>
    <div class="form-check my-2">
      <label class="form-check-label" style="font-size: 1.1rem;">
        <input type="radio" name="${item.numberQuestion}" value="C">
        ${item.answer3}
      </label>
    </div>
    <div class="form-check my-2">
      <label class="form-check-label" style="font-size: 1.1rem;">
        <input type="radio" name="${item.numberQuestion}" value="D" checked>
        ${item.answer4}
      </label>
    </div>
  </div>
`
})

const getUserAnswers = () => {
    let userAnswers = []

    correctAnswers.forEach((_, index) => {
        const userAnswer = form[`inputQuestion${index + 1}`].value
        userAnswers.push(userAnswer)
    })
   return userAnswers
}

const calculateUserScore = userAnswers => {
    userAnswers.forEach((resposta, index) => {
        if (resposta === correctAnswers[index]) {
        score += 25
        }
    })
}
const showFinalScore = () => {

finalScoreContainer.classList.remove('d-none')
}

const animateFinalScore = () => {
    let counter = 0

    const timer = setInterval(() => {
        if (counter === score) {
            clearInterval(timer)
        }
        finalScoreContainer.querySelector('span').textContent = `${counter ++}%`
    }, 10)
}

const resetUserScore = () => {
    score = 0
}

form.addEventListener('submit', event => {
    resetUserScore()
    event.preventDefault()
    const userAnswers = getUserAnswers()
    calculateUserScore(userAnswers)
    showFinalScore()
    animateFinalScore()
})