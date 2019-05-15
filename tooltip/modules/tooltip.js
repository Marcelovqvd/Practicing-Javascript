export default function initTooltip() {
  
}

const tooltips = document.querySelectorAll('[data-tooltip]');

tooltips.forEach(item => {
  item.addEventListener('mouseover', onMouseOver);
})

function onMouseOver(event) {
  const tooltipobox = criarTooltipBox(this);
  console.log(event)
}

function criarTooltipBox(element) {
  const tooltipobox = document.createElement('div');
  const text = element.getAttribute('aria-label');
  tooltipobox.classList.add('tooltip');
  tooltipobox.innerText = text;
  document.body.appendChild(tooltipobox)
  return tooltipobox;
}