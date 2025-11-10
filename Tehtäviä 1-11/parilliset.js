function tulostaParilliset() {
    const syote = document.getElementById("luku").value;
    const luku = parseInt(syote);
    const tulosDiv = document.getElementById("tulos");
    tulosDiv.innerHTML = "";

    if (isNaN(luku) || luku <= 0 || luku % 2 !== 0) {
        tulosDiv.innerHTML = "Syötä parillinen luku!";
        return;
    }

    let tulos = "<h3>Parilliset luvut:</h3>";
    for (let i = 2; i <= luku; i += 2) {
        tulos += i + "<br>";
    }

    tulosDiv.innerHTML = tulos;
}