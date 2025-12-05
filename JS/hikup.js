let tulos = "";

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("hik-up");
    } else if (i % 3 === 0) {
        console.log("hik");
    } else if (i % 5 === 0) {
        console.log("up");
    } else {
        console.log(i)
    }
}

document.getElementById("output").textContent = tulos; // Tulostaa HTML:n <div class="output"></div> osioon