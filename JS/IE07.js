function kirjainko(merkki) {
    if (merkki.lenght == 1 && merkki.match(/[a-öA-Ö]/i)) {
        console.log("Annettu merkki on kirjain");
    }
    else {
        console.log("Annettu merkki ei ole krjain");
    }
}
/*kirjainko("g");
kirjainko(1);
kirjanko("!");
kirjainko("ä");
kirjainko("H");
kirjainko("Ö")*/