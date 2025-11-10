function tulosta() {
    const tulosDiv = document.getElementById("tulos");
    tulosDiv.innerHTML = "";

    for (let i = 1; i <= 100; i++) {
        let teksti = "";

        if (i % 3 === 0 && i % 5 === 0) {
            teksti = "hipheijaa";
        } else if (i % 3 === 0) {
            teksti = "hip";
        } else if (i % 5 === 0) {
            teksti = "heijaa";
        } else {
            teksti = i;
        }

     tulosDiv.innerHTML += teksti + "<br>";
    }
}