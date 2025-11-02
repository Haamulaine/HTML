let luvut = [];

for (let i = 1; i <= 5; i++) {
    let luku = parseFloat(prompt("Anna " + i + ". numero:"));
    luvut.push(luku);
}

//Etsii suurimman luvun
let suurin = Math.max(...luvut);

//Tulostus
alert("Annetut luvut: " + luvut.join(", ") + "\nSuurin luku: " + suurin);

console.log("Annetut luvut:", luvut);
console.log("Suurin luku:", suurin);