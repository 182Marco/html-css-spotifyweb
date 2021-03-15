/* CAMBIARE SOTTOLINEATURE ICONE ASIDE
 ATTIVE (SOLO PER MENU > DI MOBILE)*/
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

/* CAMBIARE SOTTOLINEATURE TITOLI MAIN */

// evidenza
var evidenza = document.querySelector('#evidenza');
var evidenzaLine = document.querySelector('#evidenzaLine');

evidenza.addEventListener('click', () => {
  var pagActiveList = document.querySelectorAll('.active-page');
  for (let i = 0; i < pagActiveList.length; i++) {
    pagActiveList[i].style.display = 'none';
  }
  evidenzaLine.style.display = 'block';
});
// podcast
var podcast = document.querySelector('#podcast');
var podcastLine = document.querySelector('#podcastLine');
podcastLine.style.display = 'none';

podcast.addEventListener('click', () => {
  var pagActiveList = document.querySelectorAll('.active-page');
  for (let i = 0; i < pagActiveList.length; i++) {
    pagActiveList[i].style.display = 'none';
  }
  podcastLine.style.display = 'block';
});
// classifiche
var classifiche = document.querySelector('#classifiche');
var classificheLine = document.querySelector('#classificheLine');
classificheLine.style.display = 'none';

classifiche.addEventListener('click', () => {
  var pagActiveList = document.querySelectorAll('.active-page');
  for (let i = 0; i < pagActiveList.length; i++) {
    pagActiveList[i].style.display = 'none';
  }
  classificheLine.style.display = 'block';
});
// generi
var generi = document.querySelector('#generi');
var generiLine = document.querySelector('#generiLine');
generiLine.style.display = 'none';

generi.addEventListener('click', () => {
  var pagActiveList = document.querySelectorAll('.active-page');
  for (let i = 0; i < pagActiveList.length; i++) {
    pagActiveList[i].style.display = 'none';
  }
  generiLine.style.display = 'block';
});
// NuoveUscite
var NuoveUscite = document.querySelector('#NuoveUscite');
var NuoveUsciteLine = document.querySelector('#NuoveUsciteLine');
NuoveUsciteLine.style.display = 'none';

NuoveUscite.addEventListener('click', () => {
  var pagActiveList = document.querySelectorAll('.active-page');
  for (let i = 0; i < pagActiveList.length; i++) {
    pagActiveList[i].style.display = 'none';
  }
  NuoveUsciteLine.style.display = 'block';
});
// scopri
var scopri = document.querySelector('#scopri');
var scopriLine = document.querySelector('#scopriLine');
scopriLine.style.display = 'none';

scopri.addEventListener('click', () => {
  var pagActiveList = document.querySelectorAll('.active-page');
  for (let i = 0; i < pagActiveList.length; i++) {
    pagActiveList[i].style.display = 'none';
  }
  scopriLine.style.display = 'block';
});

// CUORE DEI LIKE -> PASSARE DA PIENO A VUOTO ON CLICK

var cuoreVuoto = document.querySelector('#cuoreVuoto');
var cuorePieno = document.querySelector('#cuorePieno');

cuorePieno.style.display = 'none';

cuoreVuoto.addEventListener('click', () => {
  cuoreVuoto.style.display = 'none';
  cuorePieno.style.display = 'block';
});

cuorePieno.addEventListener('click', () => {
  cuorePieno.style.display = 'none';
  cuoreVuoto.style.display = 'block';
});
