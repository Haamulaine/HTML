let tulos = "";

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        tulos += "* ";
    }

    tulos += "\n";
}

document.getElementById("output").innerText = tulos;

//Tulostaa HTML:n <div class="output"></div> osioon.