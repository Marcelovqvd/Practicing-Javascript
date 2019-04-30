const sections = document.querySelectorAll('.js-scroll');
const partWindow = window.innerHeight * 0.6;


function animaScroll() {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionVisible = (sectionTop - partWindow) < 0;
    if (sectionVisible) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
}

animaScroll();

window.addEventListener('scroll', animaScroll);


/*soft scroll*/

function initScrollSuave() {

  const linksInternos = document.querySelectorAll('a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

  }
  linksInternos.forEach(link => {
    link.addEventListener('click', scrollToSection);
  });

}

initScrollSuave();