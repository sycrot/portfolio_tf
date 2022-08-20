const titleContainer = document.querySelectorAll('.title-section')
const aboutmeImageImgAnimation = document.querySelector('.aboutme-image img')
const aboutmeTextAnimation = document.querySelector('.aboutme-text')
const projectItemAnimation = document.querySelectorAll('.project-item')
const skillsContentItemAnimation = document.querySelector('.skills-content-item')
const skillsContentOthersAnimation = document.querySelector('.skills-content-others')
const contactmeItemAnimation = document.querySelector('.contactme-content')

const aboutmeContainer = document.querySelector('#aboutme')
const projectsContentTop = document.querySelector('.projects-content')
const skillsContentTop = document.querySelector('.skills-content')

const debounce = function(func, wait, immediate) {
  let timeout
  return function(...args) {
    const context = this
    const later = function() {
      timeout = null
      if(!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

function getOffsetTop(elTop, el, className) {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)
  if (windowTop > elTop.offsetTop) {
    el.classList.add(className)
  } else {
    el.classList.remove(className)
  }
}

function playAnimation() {
  titleContainer.forEach((title) => {
    getOffsetTop(title, title, 'title-section-animation')
  })

  getOffsetTop(aboutmeContainer, aboutmeImageImgAnimation, 'about-image-animation')
  getOffsetTop(aboutmeContainer, aboutmeTextAnimation,'aboutme-text-animation')

  projectItemAnimation.forEach((project) => {
    getOffsetTop(projectsContentTop, project, 'project-item-animation')
  })

  getOffsetTop(skillsContentTop, skillsContentItemAnimation, 'skills-content-item-animation')
  getOffsetTop(skillsContentTop, skillsContentOthersAnimation, 'skills-content-others-animation')

  getOffsetTop(contactmeItemAnimation, contactmeItemAnimation, 'contactme-item-animation')
}

playAnimation()

window.addEventListener('scroll', debounce(() => playAnimation()), 200)
