function muutaSalasanaksi() {
    const sana = document.getElementById("sana").value.trim();
    const tulosDiv = document.getElementById("tulos2");

    if (sana === "") {
        tulosDiv.innerHTML = "Syötä jokin sana!";
        return;
    }

    let uusiSana = "";

    for (let i = 0; i < sana.length; i++) {
        uusiSana += sana[i] + "Ö";
    }

    tulosDiv.innerHTML = `Salasana: ${uusiSana}`;
}