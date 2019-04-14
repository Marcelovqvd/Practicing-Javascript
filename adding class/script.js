const change = document.querySelector('.container');

function changeBackground(){
  change.classList.toggle('container_changed');
}
change.addEventListener('click', changeBackground);