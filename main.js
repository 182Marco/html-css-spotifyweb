// CAMBIARE SOTTOLINEATURE ICONE ASIDE ATTIVE (MENU > DI MOBILE)
// funzionamento click su cerca
var cerca = document.querySelector('#cerca');
var lineDicerca = document.querySelector('#lineDicerca');

cerca.addEventListener('click', () => {
  var elemLefOfIcon = document.querySelectorAll('.aside-icon-element');
  var i;
  for (let i = 0; i < elemLefOfIcon.length; i++) {
    elemLefOfIcon[i].classList.remove('active');
  }
  lineDiCerca.classList.add('active');
});

// funzionamento click su home
var home = document.querySelector('#home');
var lineDihome = document.querySelector('#lineDihome');

home.addEventListener('click', () => {
  var elemLefOfIcon = document.querySelectorAll('.aside-icon-element');
  var i;
  for (let i = 0; i < elemLefOfIcon.length; i++) {
    elemLefOfIcon[i].classList.remove('active');
  }
  lineDihome.classList.add('active');
});

// funzionamento click su libreria
var libreria = document.querySelector('#libreria');
var lineDilibreria = document.querySelector('#lineDilibreria');

libreria.addEventListener('click', () => {
  var elemLefOfIcon = document.querySelectorAll('.aside-icon-element');
  var i;
  for (let i = 0; i < elemLefOfIcon.length; i++) {
    elemLefOfIcon[i].classList.remove('active');
  }
  lineDilibreria.classList.add('active');
});