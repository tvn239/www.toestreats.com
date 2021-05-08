
const bg = document.querySelector('body');
const nav = document.querySelectorAll('li > a');

function nightmode(){
  let heading = document.querySelector('h1');

  for (let i = 0; i < nav.length; i++) {
    nav[i].classList.toggle('nightmode-nav');
  }

  bg.classList.toggle('nightmode-bg');
  heading.classList.toggle('nightmode');

  if (bg.className === "nightmode-bg") {
    btn.textContent = "Daymode";
  } else {
    btn.textContent = "Nightmode";
  }
}


let pot = document.querySelector('a > img');

function lighten(){
  pot.style.opacity= '.5';
}
function regular(){
  pot.style.opacity = '1';
}

let btn = document.querySelector('button');
btn.addEventListener('click',nightmode);

pot.addEventListener('mouseover',lighten);

pot.addEventListener("mouseout",regular);
