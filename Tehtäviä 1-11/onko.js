function tarkistaO() {
    const sana = document.getElementById("sanaO").value.trim();
    const tulosDiv = document.getElementById("tulos3");

    if (sana === "") {
        tulosDiv.innerHTML = "Syötä jokin sana!";
        return;
    }

    if (sana.toLowerCase().includes("ö")) {
        tulosDiv.innerHTML = "on";
    } else {
        tulosDiv.innerHTML = "ei ole";
    }
}