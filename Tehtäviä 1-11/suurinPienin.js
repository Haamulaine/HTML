function etsi() {
        const luvut = [
        Number(document.getElementById("luku1").value),
        Number(document.getElementById("luku2").value),
        Number(document.getElementById("luku3").value),
        Number(document.getElementById("luku4").value),
        Number(document.getElementById("luku5").value)
    ];

    if (luvut.some(isNaN)) {
        document.getElementById("tulos").innerHTML = "Anna kaikki viisi lukua!";
        return;
    }

    const suurin = Math.max(...luvut);
    const pienin = Math.min(...luvut);

    document.getElementById("tulos").innerHTML = `Suurin luku on: <b>${suurin}</b><br>Pienin luku on: <b>${pienin}</b>`;
}