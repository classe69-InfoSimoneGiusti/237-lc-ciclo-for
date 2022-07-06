console.log('INIZIO');

// pippo non professionale, ma ci capiamo ;-)
/* for (let pippo = 150; pippo <= 350; pippo = pippo + 2) {
    console.log(pippo);
}
 */


/* for (let pluto = 200; pluto >= 0; pluto = pluto - 5) {
    console.log(pluto);
} */


for ( let tabellina = 1; tabellina <= 10; tabellina++) {

    console.log('La tabellina del ' + tabellina);

    for ( let moltiplicatore = 0; moltiplicatore <= 10; moltiplicatore++) {
        const valore = tabellina * moltiplicatore;
        console.log(tabellina + ' X ' + moltiplicatore + ': ' + valore);
    }

}

console.log('FINE');
