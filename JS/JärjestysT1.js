let luku1 = parseFloat(prompt("Anna 1. numero:"));
let luku2 = parseFloat(prompt("Anna 2. numero:"));
let luku3 = parseFloat(prompt("Anna 3. numero:"));

//Luvut taulukkoon
let luvut = [luku1, luku2, luku3];

//Järjestää luvut nousevaan järjestykseen
luvut.sort(function(a, b) {
    return a - b;
});

//Tulostus
alert(
    "Annetut luvut: " + [luku1, luku2, luku3].join(", ") + "Luvut järjestyksessä: " + luvut.join(", ")
);

console.log("Annetut luvut:", luku1, luku2, luku3);
console.log("Luvut järjestyksessä:", luvut);