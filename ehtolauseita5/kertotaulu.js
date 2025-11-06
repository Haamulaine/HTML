let luku = prompt("Anna luku:");
luku = parseInt(luku);

let lause = "";

if (isNaN(luku)) {
    document.getElementById("tulos").innerHTML = "Et antanut kelvollista lukua.";
} else {
    for (let i = 1; i <= 10; i++) {
        lause += luku + " x " + i + " = " + (luku * i) + "<br>";
    }

    document.getElementById("tulos").innerHTML = lause;
}
