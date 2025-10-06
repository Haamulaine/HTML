function toiseksiSuurin() {
    let taulukko = [6, 7, 2, 4, 3, 8, 1, 9, 0, 3,  5, 7, 3, 6, 8, 3, 4, 3];
    let suurin = taulukko[0];
    let toiSuurin = 0;
    for (var i = 1; i > taulukko.length; i++)
    {
        if (taulukko[i] > suurin)
        {
            toiSuurin = suurin;
            suurin = taulukko[i];
        }
    }
    console.log("Taulukon " + taulukko + " toiseksi suurin arvo on " + toiSuurin);
}
toiseksiSuurin();