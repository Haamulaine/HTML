function ikaLuokka() {
    const ika = Number(document.getElementById("ikaLuokka").value);
    const tulos = document.getElementById("tulos");

    if (isNaN(ika) || ika < 0) {
        tulos.textContent = "Anna kelvollinen ikä.";
        return;
    }

    if (ika < 16) {
        tulos.textContent = "Saat ajaa polkupyörää.";
    } else if (ika < 18) {
        tulos.textContent = "Saat ajaa mopoa.";
    } else {
        tulos.textContent = "Saat ajaa autoa.";
    }

}