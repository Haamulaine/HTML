function tekstinKaanto(teksti) {
    let lause = "";
    for (var i = teksti.length - 1; i >= 0; i--) {
        lause +=teksti[i];
    }
    console.log(lause);
}
tekstinKaanto("Hevonen");