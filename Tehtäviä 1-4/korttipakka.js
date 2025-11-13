const maat = ["♠", "♥", "♦", "♣"];
const arvot= ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

let pakka = [];

for (let i = 0; i < maat.length; i++) {
    for (let j = 0; j < arvot.length; j++) {
        pakka.push(arvot[j] + maat[i]);
    }
}

function sekoita(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function arvoKortit() {
    const sekoitettu = sekoita([...pakka]);
    const kortit = sekoitettu.slice(0, 5);

    let html = "";
    for (let kortti of kortit) {
        let maa = kortti.includes("♠") ? "pata"
                : kortti.includes("♥") ? "hertta"
                : kortti.includes("♦") ? "ruutu"
                : "risti";

    html += `<div class="kortti ${maa}">${kortti}</div>`;
    }
    document.getElementById("tulos3").innerHTML = html;
} 