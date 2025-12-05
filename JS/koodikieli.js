function muutaKoodiksi(teksti) {
    return teksti
    .replace(/o/gi, "0")
    .replace(/i/gi, "1")
    .replace(/e/gi, "3")
    .replace(/a/gi, "4")
    .replace(/s/gi, "5");
}

const tulos = muutaKoodiksi("Ohjelmointi on hauskaa");
console.log(tulos);