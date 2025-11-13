function lottoNumerot() {
    const numerot = [];
    while (numerot.length < 7) {
        const n = Math.floor(Math.random() * 40) + 1;
        if (!numerot.includes(n)) {
            numerot.push(n);
        }
    }

    numerot.sort((a, b) => a - b);
    document.getElementById("tulos2").innerText = "Arvotut numerot: " + numerot.join(", ");
}