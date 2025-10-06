function maksimi() {
    let taulukko = [6, 7, 2, 4, 3, 8, 1];
    let maksimi = taulukko[0];
    for (var i = 1; i < taulukko.length; i++) {
        if (taulukko[i] > maksimi) {
            maksimi = taulukko[i];
        }
    }
    console.log("Taulukon " + taulukko + " maksimiarvo on: " + maksimi);
}
//maksimi();