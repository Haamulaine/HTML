function muutaSalasanaksi() {
    const sana = document.getElementById("sana").value.trim();
    const tulosDiv = document.getElementById("tulos");

    if (sana === "") {
        tulosDiv.innerHTML = "Syötä jokin sana!";
        return;
    }

    let uusiSana = "";

    const aakkoset = "ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖ"

    for (let i = 0; i < sana.length; i++) {
        const Satunnaiskirjain = aakkoset.charAt(
            Math.floor(Math.random() * aakkoset.length)
        );

        salasana += sana[i] + Satunnaiskirjain;
    }

    document.getElementById("tulos").innerHTML = `Salasana on: <b>${uusiSana}</b>`;
}