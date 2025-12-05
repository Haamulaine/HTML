function arvosana(pisteet) {
    if (pisteet < 50) {
        return "Hylätty";
    } else if (pisteet < 60) {
        return "T1";
    } else if (pisteet < 70) {
        return "T2";
    } else if (pisteet < 80) {
        return "H3";
    } else if (pisteet < 90) {
        return "H4";
    } else if (pisteet < 100) {
        return "K5";
    } else {
        return "Virheellinen pistemäärä";
    }
}

function tulostaArvosana(nimi, pisteet) {
    let arvo = arvosana(pisteet);
    console.log(`${nimi} sai kokeesta ${pisteet} pistettä --> ${nimi} ${arvo}`);
}

//ESIM.
tulostaArvosana("Daniel", 80); // Daniel H4
tulostaArvosana("Viivi", 77); // Viivi H3
tulostaArvosana("Tiina", 88); // Tiina H4
tulostaArvosana("Ismael", 95); // Ismael K5
tulostaArvosana("Tuomas", 68); // Tuomas T2