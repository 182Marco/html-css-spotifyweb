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

// creare una nuova playlist
// variabile dell'ul che le contiene
var newPlaylistUl = document.querySelector('#newPlaylistUl');
// rendere invisibile e rimuovere dal flusso imput
var inputNewPlay = document.querySelector('#inputNewPlay');
inputNewPlay.style.display = 'none';
// placeholder prima del click
var scrittaCreaPlay = document.querySelector('#scrittaCreaPlay');
// li della lista che chiama funzione
var createNewPlay = document.querySelector('#createNewPlay');

createNewPlay.addEventListener('click', createPlaylist);
createNewPlay.addEventListener('keypress', callCreatePlaylist);

function callCreatePlaylist() {
  if (event.keyCode === 13) {
    createPlaylist();
  }
}

function createPlaylist() {
  if (inputNewPlay.style.display == 'none') {
    // togliere dal flusso placeholder
    scrittaCreaPlay.style.display = 'none';
    // reinserire imput e focus
    inputNewPlay.style.display = 'inline-block';
    inputNewPlay.focus();
  } else {
    if (inputNewPlay.value == '') {
      inputNewPlay.placeholder = 'scrivi un nome!';
    } else {
      // creare nuovo elemento
      var newLi = document.createElement('li');
      newPlaylistUl.appendChild(newLi);
      var playlist = document.createElement('a');
      playlist.innerHTML = inputNewPlay.value;
      newLi.appendChild(playlist);
      //   azzerare l'imput nome playlist
      inputNewPlay.value = '';
      inputNewPlay.style.display = 'none';
      scrittaCreaPlay.style.display = 'inline-block';
    }
  }
}

// SOSTITUIRE IMMAGINE SOTTO A SX E TITOLO

// variabile img e titolo sotto sx
var imgBranoSottoSx = document.querySelector('#imgBranoSottoSx');
var titleBranoSottoSx = document.querySelector('#titleBranoSottoSx');

// metal
var metalLinksNodeList = document.querySelectorAll('.metal');

var i;
for (let i = 0; i < metalLinksNodeList.length; i++) {
  metalLinksNodeList[i].addEventListener('click', metal);
  function metal() {
    titleBranoSottoSx.innerHTML = 'Heavy Metal';
    imgBranoSottoSx.removeAttribute('src');
    var src = document.createAttribute('src');
    src.value = 'img/metal_lifting.jpg';
    imgBranoSottoSx.setAttributeNode(src);
  }
}

// a quiet place
var quietLinksNodeList = document.querySelectorAll('.quiet');

for (let i = 0; i < quietLinksNodeList.length; i++) {
  quietLinksNodeList[i].addEventListener('click', quiet);
  function quiet() {
    titleBranoSottoSx.innerHTML = 'A quiet place';
    imgBranoSottoSx.removeAttribute('src');
    var src = document.createAttribute('src');
    src.value = 'img/aquietplace.jpeg';
    imgBranoSottoSx.setAttributeNode(src);
  }
}
// split
var splitLinksNodeList = document.querySelectorAll('.split');

for (let i = 0; i < splitLinksNodeList.length; i++) {
  splitLinksNodeList[i].addEventListener('click', split);
  function split() {
    titleBranoSottoSx.innerHTML = 'split';
    imgBranoSottoSx.removeAttribute('src');
    var src = document.createAttribute('src');
    src.value = 'img/split.jpeg';
    imgBranoSottoSx.setAttributeNode(src);
  }
}
// A cure for wellness
var cureLinksNodeList = document.querySelectorAll('.cure');

for (let i = 0; i < cureLinksNodeList.length; i++) {
  cureLinksNodeList[i].addEventListener('click', cure);
  function cure() {
    titleBranoSottoSx.innerHTML = 'A cure for wellness';
    imgBranoSottoSx.removeAttribute('src');
    var src = document.createAttribute('src');
    src.value = 'img/cure.jpeg';
    imgBranoSottoSx.setAttributeNode(src);
  }
}

// sinister
var sinisterLinksNodeList = document.querySelectorAll('.sinister');

for (let i = 0; i < sinisterLinksNodeList.length; i++) {
  sinisterLinksNodeList[i].addEventListener('click', sinister);

  function sinister() {
    titleBranoSottoSx.innerHTML = 'Sinister';
    imgBranoSottoSx.removeAttribute('src');
    var src = document.createAttribute('src');
    src.value = 'img/sinister.jpeg';
    imgBranoSottoSx.setAttributeNode(src);
  }
}

// Release Radar
var radarLinksNodeList = document.querySelectorAll('.radar');

for (let i = 0; i < radarLinksNodeList.length; i++) {
  radarLinksNodeList[i].addEventListener('click', radar);

  function radar() {
    titleBranoSottoSx.innerHTML = 'Release Radar';
    imgBranoSottoSx.removeAttribute('src');
    var src = document.createAttribute('src');
    src.value = 'img/radar.jpeg';
    imgBranoSottoSx.setAttributeNode(src);
  }
}

// Daily Mix 1
var mixLinksNodeList = document.querySelectorAll('.mix');

for (let i = 0; i < mixLinksNodeList.length; i++) {
  mixLinksNodeList[i].addEventListener('click', mix);

  function mix() {
    titleBranoSottoSx.innerHTML = 'Daily Mix 1';
    imgBranoSottoSx.removeAttribute('src');
    var src = document.createAttribute('src');
    src.value = 'img/mixdaily.jpeg';
    imgBranoSottoSx.setAttributeNode(src);
  }
}

// far funzionare tasto random
var lastNumber;
document.querySelector('#btnRandom').addEventListener('click', () => {
  var x = Math.floor(Math.random() * 8);
  /*   la nidificazione di if serve a rendere altamente
improbabile che venga sorteggiato lo stesso numero
cosichè l'utente al click del random non rimanga mai
 sul brano precedente */
  if (x == lastNumber) {
    var x = Math.floor(Math.random() * 8);
    if (x == lastNumber) {
      var x = Math.floor(Math.random() * 8);
      if (x == lastNumber) {
        var x = Math.floor(Math.random() * 8);
      } else {
        asign();
      }
    } else {
      asign();
    }
  } else {
    asign();
  }
  //   ******************
  function asign() {
    /* evitare che il numero casuale sorteggiato porti la stessa
     canzone di quella di defaul al caricamento dopo il primo click */
    if (x == 0 && titleBranoSottoSx.innerText != 'Stranger Things') {
      stranger();
    } else if (x == 0 && titleBranoSottoSx.innerText == 'Stranger Things') {
      /* se siamo al primo giro decido altra canzone e attribuisco numero associato
         a last number per evitare che possa essere chiamata la stessa al click dopo */
      quiet();
      lastNumber = 6;
    } else if (x == 1) {
      mix();
    } else if (x == 2) {
      radar();
    } else if (x == 3) {
      sinister();
    } else if (x == 4) {
      cure();
    } else if (x == 5) {
      split();
    } else if (x == 6) {
      quiet();
    } else {
      metal();
    }
    lastNumber = x;
  }
});

// tener bloccata progressione
var scorrimentoTempo = document.querySelectorAll('.scorrimento-tempo')[0];
scorrimentoTempo.style.webkitAnimationPlayState = 'paused';

// stranger e funzionamento audio
var things = document.querySelector('#things');
var playLi = document.querySelector('#playLi');
var pauseLi = document.querySelector('#pauseLi');
var strangerLinksNodeList = document.querySelectorAll('.stranger');
pauseLi.style.display = 'none';
things.pause();

for (let i = 0; i < strangerLinksNodeList.length; i++) {
  strangerLinksNodeList[i].addEventListener('click', stranger);
  function stranger() {
    titleBranoSottoSx.innerHTML = 'Stranger Things';
    imgBranoSottoSx.removeAttribute('src');
    var src = document.createAttribute('src');
    src.value = 'img/stranger.jpeg';
    imgBranoSottoSx.setAttributeNode(src);
    // far suonare
    playMusic();
  }
}

// btn "Redo" in variabile
var btnRedo = document.querySelector('#btnRedo');

// far funzionare stranger se si clicca play
var play = document.querySelector('#play');
// mettere in variabile il tag che continere il cronometro
var secondiPassati = document.querySelector('#secondiPassati');

play.addEventListener('click', playMusic);

function playMusic() {
  if (titleBranoSottoSx.innerText == 'Stranger Things') {
    things.play();
    progression.style.display = 'flex';
    playLi.style.display = 'none';
    pauseLi.style.display = 'block';
    // ricavare il tempo da cui partire al play
    var secondsInzialiInStringa = secondiPassati.innerText.split(':')[1];
    // cronometro
    var seconds = parseInt(secondsInzialiInStringa);
    upDateCountUp();
    int = setInterval(upDateCountUp, 1000);

    function upDateCountUp() {
      //far partire animazione
      document.querySelector(
        '#scorrimentoTempo'
      ).style.webkitAnimationPlayState = 'running';
      // motore del cronometro
      var minutes = Math.floor(seconds / 60);
      moduloSeconds = seconds % 60;
      BenScrittiSeconds =
        moduloSeconds < 10 ? `0` + moduloSeconds : moduloSeconds;
      // tempo definitivo in variabile
      var time = minutes + ':' + BenScrittiSeconds;
      //   inserire cronometro nell'elemento a sx barra di scorrimento
      secondiPassati.innerHTML = time;
      if (seconds < 68) {
        seconds++;
      } else {
        // canzone ferma e da capo
        things.currentTime = 0;
        things.pause();
        // chiamare funz che azzera animazione
        avanzamentoTempoBarra.classList.remove('scorrimento-tempo');
        // fermare intervallo
        clearInterval(int);
        // cambiare stop in play
        pauseLi.style.display = 'none';
        playLi.style.display = 'block';
        // inidcatore dei secondi azzerato
        secondiPassati.innerText = '0:00';
      }
      //   azzerare secondi se premuto tasto "redo"
      btnRedo.addEventListener('click', () => {
        seconds = 0;
      });
      //  bloccare
      var pause = document.querySelector('#pause');
      pause.addEventListener('click', () => {
        if (titleBranoSottoSx.innerText == 'Stranger Things') {
          things.pause();
          pauseLi.style.display = 'none';
          playLi.style.display = 'block';
          //   bloccare animazione
          document.querySelector(
            '#scorrimentoTempo'
          ).style.webkitAnimationPlayState = 'paused';
          //   stoppare cronometro
          clearInterval(int);
        }
      });
    }
  }
}

// far funzionare tasto avanti
var btnAvanti = document.querySelector('#btnAvanti');

btnAvanti.addEventListener('click', () => {
  if (titleBranoSottoSx.innerText == 'Stranger Things') {
    quiet();
  } else if (titleBranoSottoSx.innerText == 'A quiet place') {
    split();
  } else if (titleBranoSottoSx.innerText == 'split') {
    cure();
  } else if (titleBranoSottoSx.innerText == 'A cure for wellness') {
    sinister();
  } else if (titleBranoSottoSx.innerText == 'Sinister') {
    radar();
  } else if (titleBranoSottoSx.innerText == 'Release Radar') {
    mix();
  } else if (titleBranoSottoSx.innerText == 'Daily Mix 1') {
    metal();
  } else {
    stranger();
  }
});

// far funzionare tasto indietro
var btnIndietro = document.querySelector('#btnIndietro');

btnIndietro.addEventListener('click', () => {
  if (titleBranoSottoSx.innerText == 'Stranger Things') {
    metal();
  } else if (titleBranoSottoSx.innerText == 'A quiet place') {
    stranger();
  } else if (titleBranoSottoSx.innerText == 'split') {
    quiet();
  } else if (titleBranoSottoSx.innerText == 'A cure for wellness') {
    split();
  } else if (titleBranoSottoSx.innerText == 'Sinister') {
    cure();
  } else if (titleBranoSottoSx.innerText == 'Release Radar') {
    sinister();
  } else if (titleBranoSottoSx.innerText == 'Daily Mix 1') {
    radar();
  } else {
    mix();
  }
});

// far funzionare tasto da capo (btnRedo a riga 363)
var avanzamentoTempoBarra = document.querySelector('#scorrimentoTempo');

btnRedo.addEventListener('click', again);

function again() {
  avanzamentoTempoBarra.classList.remove('scorrimento-tempo');
  setTimeout(function () {
    avanzamentoTempoBarra.classList.add('scorrimento-tempo');
    secondiPassati.innerText = '0:00';
    things.currentTime = 0;
  }, 50);
}
