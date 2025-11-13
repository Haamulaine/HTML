function tarkastaPisteet() {
    const sana = document.getElementById("sana").value.toUpperCase();
    const pisteet = {
        A: 1, E: 1, I: 1, N: 1, S: 1, T: 1,
        O: 2, Ä: 2, K: 2, L: 2,
        U: 3, M: 3,
        Y: 4, H: 4, J: 4, P: 4, R: 4, V: 4,
        Ö: 7,  D: 7,
        B: 8, F: 8, G: 8,
        C: 10
    };

    let summa = 0;
    for (let kirjain of sana) {
        summa += pisteet[kirjain] || 12;
    }

    const tulos = document.getElementById("tulos1");
    if (sana.length === 0) {
        tulos.textContent = "Syötä luku ensin.";
    } else {
        tulos.textContent = `Sanan "${sana}" pistemäärä on ${summa} pistettä.`;
    }
}