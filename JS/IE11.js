function voittoTappio(myynti, osto) {
    myynti = parseInt(myynti);
    osto = parseInt(osto);
    if ((myynti - osto) > 0) {
        console.log("Sait voittoa: " + (myynti - osto));
    }
    else {
        console.log("Tappiosi oli " + (myynti - osto));
    }
}
/*voittoTappio(30, 20);
voittoTappio(20, 30);
voittoTappio(30, 30);*/