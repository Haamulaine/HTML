function tulosta() {
    const tuloste = document.getElementById("tulos");

    for (i = 1; i <= 10; i++) {
        tuloste.innerHTML += i + "<br>";
    }
}