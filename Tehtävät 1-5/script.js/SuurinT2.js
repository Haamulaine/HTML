function etsiSuurin() {
let luvut = [];

for (let i = 1; i <= 5; i++) {
    let luku = Number(prompt("Anna luku " + i + ":"));
    luvut.push(luku);
}

//Etsii suurimman luvun
let suurin = Math.max(...luvut);

//Tulostus
document.getElementById("tulos").textContent = "Antamasi luvut: " + luvut.join(", ") + "Suurin luku on " + suurin;
}
console.log("Annetut luvut:", luvut);
console.log("Suurin luku:", suurin);