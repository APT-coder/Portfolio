const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)


const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()
    emailjs.sendForm('service_c3q4acj', 'template_pucjwhe', '#contact-form', 'qKPmDRgy6PCdY52nV')
    .then(() =>{
        contactMessage.textContent = 'Message sent successfully !'

        setTimeout(() =>{
            contactMessage.textContent=''
        }, 10000)

        contactForm.reset()
    }, () =>{
        contactMessage.textContent = 'Message not sent'
    })
}

contactForm.addEventListener('submit', sendEmail)


const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home__data, .home__social, .contact__container, .footer__container`)
sr.reveal(`.home__image`, {origin: 'bottom'})
sr.reveal(`.about__data`, {origin: 'left'})
sr.reveal(`.about__image, .skills__content`, {origin: 'right'})
sr.reveal(`.about__image, .skills__content`, {origin: 'right'})
sr.reveal( `.services__card, .projects__card`, {interval: 100})

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', function() {
        event.preventDefault();
        if (document.body.classList.contains('light-theme')) {
            document.body.classList.remove('light-theme');
            document.documentElement.style.setProperty('--title-color', 'hsl(228, 8%, 95%)');
            document.documentElement.style.setProperty('--text-color', 'hsl(228, 8%, 65%)');
            document.documentElement.style.setProperty('--body-color', 'hsl(228, 15%, 20%)');
            document.documentElement.style.setProperty('--container-color', 'hsl(228, 15%, 15%)');
            document.documentElement.style.setProperty('--first-color', 'hsl(162, 100%, 40%)');
            document.documentElement.style.setProperty('--first-color-alt', 'hsl(162, 56%, 35%)');
        } else {
            document.body.classList.add('light-theme');
            document.documentElement.style.setProperty('--title-color', 'hsl(228, 15%, 20%)');
            document.documentElement.style.setProperty('--text-color', 'hsl(228, 15%, 10%)');
            document.documentElement.style.setProperty('--body-color', 'hsl(228, 8%, 95%)');
            document.documentElement.style.setProperty('--container-color', 'hsl(228, 8%, 90%)');
            document.documentElement.style.setProperty('--first-color', 'hsl(224, 89%, 60%)');
            document.documentElement.style.setProperty('--first-color-alt', 'hsl(224, 89%, 50%)');
        }
    });
});

