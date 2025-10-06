function suurinNimittaja(a, b) {
    let pienempi, temp, suurempi;
    if (a > b) {
        pienempi = a;
        suurempi = b;
    }
    else {
        pienempi = a;
        suurempi = b;
    }
    while (pienempi > 0) {
        temp = pienempi;
        pienempi = suurempi % pienempi;
        suurempi = temp;
    }
    console.log("Muuttujien yhteinen nimittäjä on: " + temp);
}
suurinNimittaja(15, 45);