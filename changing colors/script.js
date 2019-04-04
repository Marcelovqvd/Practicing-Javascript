const background = document.querySelector('.container');
function callBack() {  
  background.classList.remove('container');
  background.classList.add('coloredcontainer');
}
background.addEventListener('click', callBack);

const background1 = document.querySelector('.box1');
function callBack1() {  
  background1.classList.remove('box1');
  background1.classList.add('blue');
}
background1.addEventListener('click', callBack1);

const background2 = document.querySelector('.box2');
function callBack2() {  
  background2.classList.remove('box2');
  background2.classList.add('yellow');
}
background2.addEventListener('click', callBack2);

const background3 = document.querySelector('.box3');
function callBack3() {  
  background3.classList.remove('box3');
  background3.classList.add('black');
}
background3.addEventListener('click', callBack3);

const background4 = document.querySelector('.box4');
function callBack4() {  
  background4.classList.remove('box4');
  background4.classList.add('brown');
}
background4.addEventListener('click', callBack4);


