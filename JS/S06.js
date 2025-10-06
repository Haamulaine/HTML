function keskiarvo() {
    let taulukko = [6, 7, 2, 4, 3, 8, 1];
    let summa = 0;
    let keskiarvo = 0;
    for (var i = 0; i < taulukko.length; i++) {
        summa += taulukko[i];
    }
    keskiarvo = summa / taulukko.length;
    console.log("Taulukon " + taulukko + " lukujen keskiarvo on: " + keskiarvo);
}
//keskiarvo();