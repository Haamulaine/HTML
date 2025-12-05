function luoOsoite(etunimi, sukunimi, lahiosoite, postinumero, postitoimipaikka, puhelin, sahkoposti) {
    return {
        etunimi: etunimi,
        sukunimi: sukunimi,
        lahiosoite: lahiosoite,
        postinumero: postinumero,
        postitoimipaikka: postitoimipaikka,
        puhelin: puhelin,
        sahkoposti: sahkoposti
    };
}

//ESIM.
const osoite = luoOsoite(
    "Eemeli",
    "Laine",
    "Lähteenkuja 4B 14",
    "04410",
    "Järvenpää",
    "0456712210",
    "eemeli.ea.laine@gmail.com"
);

console.log(osoite);