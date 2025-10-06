function karkaus(vuosi) {
    if (vuosi % 4 == 0 && vuosi % 100 != 0) {
        console.log("Vuosi on karkausvuosi");
    }
    else if (vuosi % 400 == 0) {
        console.log("Vuosi on karkausvuosi");
    }
    else {
        console.log("Vuosi ei ole karkausvuosi");
    }
}
/*karkaus(2004);
karkaus(2000);
karkaus(2100);
karkaus(1997);*/