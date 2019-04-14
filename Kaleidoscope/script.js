
const fullbody = document.querySelector('body');
console.log(fullbody);

function changeBackground(event){
  fullbody.classList.toggle('change');
}
fullbody.addEventListener('click', changeBackground);