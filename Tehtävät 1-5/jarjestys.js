function jarjesta() {
    
    const luku1 = Number(document.getElementById('luku1').value);
    const luku2 = Number(document.getElementById('luku2').value);
    const luku3 = Number(document.getElementById('luku3').value);

    // Tarkista, että käyttäjä syötti vain numeroita
    if (isNaN(luku1) || isNaN(luku2) || isNaN(luku3)) {
        alert("Syötä kaikki kentät numeroina!");
        return;
    }

    // Laita luvut taulukkoon ja järjestä ne nousevasti
    const luvut = [luku1, luku2, luku3];
    luvut.sort((a, b) => a - b);

    
    document.getElementById('tulos').textContent = "Järjestys: " + luvut.join(", ");
}
