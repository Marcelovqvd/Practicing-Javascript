const jsList = document.querySelectorAll('.js-accordion h2');
jsList[0].classList.add('ativo');
jsList[0].nextElementSibling.classList.add('ativo');

function activeAccordion(event) {
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo');
}


jsList.forEach(item => {
    item.addEventListener('click', activeAccordion);
});