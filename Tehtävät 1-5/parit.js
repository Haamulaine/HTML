function tarkistaLuku() {
    const input = document.getElementById('lukuLaatikko').value;
    const numero = Number(input);
    const tulosDiv = document.getElementById('tulos3');

    if (isNaN(numero)) {
        tulosDiv.textContent = "Anna kelvollinen numero!";
    } else if (numero % 2 === 0) {
        tulosDiv.textContent = numero + " on parillinen."
    } else {
        tulosDiv.textContent = numero + " on pariton.";
    }
}