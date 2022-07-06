const listaDom = document.getElementById('lista');

/* for (let i=0; i<5; i++) {
    listaDom.innerHTML += "<li>Testo " + i + "</li>";
} */

listaDom.innerHTML = "<li>PIPPO</li>";

const mioNuovoElemento = document.createElement('li');
mioNuovoElemento.append('CIAO MONDO!');

listaDom.append(mioNuovoElemento);