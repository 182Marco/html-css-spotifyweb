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
  metalLinksNodeList[i].addEventListener('click', () => {
    titleBranoSottoSx.innerHTML = 'Heavy Metal';
    imgBranoSottoSx.removeAttribute('src');
    var src = document.createAttribute('src');
    src.value = 'img/metal_lifting.jpg';
    imgBranoSottoSx.setAttributeNode(src);
  });
}
// stranger
var strangerLinksNodeList = document.querySelectorAll('.stranger');

for (let i = 0; i < strangerLinksNodeList.length; i++) {
  strangerLinksNodeList[i].addEventListener('click', () => {
    titleBranoSottoSx.innerHTML = 'Stranger Things';
    imgBranoSottoSx.removeAttribute('src');
    var src = document.createAttribute('src');
    src.value = 'img/stranger.jpeg';
    imgBranoSottoSx.setAttributeNode(src);
  });
}

// a quiet place
var quietLinksNodeList = document.querySelectorAll('.quiet');

for (let i = 0; i < quietLinksNodeList.length; i++) {
  quietLinksNodeList[i].addEventListener('click', () => {
    titleBranoSottoSx.innerHTML = 'A quiet place';
    imgBranoSottoSx.removeAttribute('src');
    var src = document.createAttribute('src');
    src.value = 'img/aquietplace.jpeg';
    imgBranoSottoSx.setAttributeNode(src);
  });
}
// split
var splitLinksNodeList = document.querySelectorAll('.split');

for (let i = 0; i < splitLinksNodeList.length; i++) {
  splitLinksNodeList[i].addEventListener('click', () => {
    titleBranoSottoSx.innerHTML = 'split';
    imgBranoSottoSx.removeAttribute('src');
    var src = document.createAttribute('src');
    src.value = 'img/split.jpeg';
    imgBranoSottoSx.setAttributeNode(src);
  });
}
// A cure for wellness
var cureLinksNodeList = document.querySelectorAll('.cure');

for (let i = 0; i < cureLinksNodeList.length; i++) {
  cureLinksNodeList[i].addEventListener('click', () => {
    titleBranoSottoSx.innerHTML = 'A cure for wellness';
    imgBranoSottoSx.removeAttribute('src');
    var src = document.createAttribute('src');
    src.value = 'img/cure.jpeg';
    imgBranoSottoSx.setAttributeNode(src);
  });
}

// sinister
var sinisterLinksNodeList = document.querySelectorAll('.sinister');

for (let i = 0; i < sinisterLinksNodeList.length; i++) {
  sinisterLinksNodeList[i].addEventListener('click', () => {
    titleBranoSottoSx.innerHTML = 'Sinister';
    imgBranoSottoSx.removeAttribute('src');
    var src = document.createAttribute('src');
    src.value = 'img/sinister.jpeg';
    imgBranoSottoSx.setAttributeNode(src);
  });
}

// Release Radar
var radarLinksNodeList = document.querySelectorAll('.radar');

for (let i = 0; i < radarLinksNodeList.length; i++) {
  radarLinksNodeList[i].addEventListener('click', () => {
    titleBranoSottoSx.innerHTML = 'Release Radar';
    imgBranoSottoSx.removeAttribute('src');
    var src = document.createAttribute('src');
    src.value = 'img/radar.jpeg';
    imgBranoSottoSx.setAttributeNode(src);
  });
}

// Daily Mix 1
var mixLinksNodeList = document.querySelectorAll('.mix');

for (let i = 0; i < mixLinksNodeList.length; i++) {
  mixLinksNodeList[i].addEventListener('click', () => {
    titleBranoSottoSx.innerHTML = 'Daily Mix 1';
    imgBranoSottoSx.removeAttribute('src');
    var src = document.createAttribute('src');
    src.value = 'img/mixdaily.jpeg';
    imgBranoSottoSx.setAttributeNode(src);
  });
}
