const lamp = document.querySelector('.lamp');


function breakingLamp(event) {
  event.currentTarget.classList.toggle('break');
}

function addnone(e) {
  const h1 = document.querySelector('.paragraph');
  h1.classList.toggle('paragraphNone');
}

lamp.addEventListener('click', breakingLamp);
lamp.addEventListener('click', addnone);