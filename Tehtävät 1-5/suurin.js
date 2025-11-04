function etsiSuurin() {

let luvut = [
    Number(document.getElementById("luku4").value),
    Number(document.getElementById("luku5").value),
    Number(document.getElementById("luku6").value),
    Number(document.getElementById("luku7").value),
    Number(document.getElementById("luku8").value)
];

//Tarkastaa onko syöte numeroita
if (luvut.some(isNaN)) {
    document.getElementById("tulos").textContent = "Anna kaikkiin kenttiin luvut!";
    document.getElementById("tulos").style.color = "red";
    return;
}

let suurin = Math.max(...luvut);

document.getElementById("tulos").textContent = `Suurin luku on: ${suurin}`;
document.getElementById("tulos").style.color = "black";
}