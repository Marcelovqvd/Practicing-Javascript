const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if(browserSmall) {
  const body = document.querySelector('body');
  body.classList.add('small');
}