function jaollinen() {
    let lause = "";
    for (var i = 1; i <=100; i++) {
        if (i % 5 == 0 && i % 3 == 0) {
            lause += "viisitoista ";
        }
        else if (i % 5 == 0) {
            lause += "viisi ";
        }
        else if (i % 3 == 0) {
            lause += "kolme ";
        }
        else {
            lause += i + " ";
        }
    }
    console.log(lause);
}
jaollinen();