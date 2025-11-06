function tarkistaVuosiluku() {
    const vuosi = parseInt(document.getElementById("vuosi").value);
    const tulosVuosi = document.getElementById("tulos");

    if ((vuosi % 400 === 0) || (vuosi % 4 === 0 && vuosi % 100 !== 0)) {
        tulosVuosi.textContent = `${vuosi} on karkausvuosi.`;
        tulosVuosi.style.color = "green";
    } else {
        tulosVuosi.textContent = `${vuosi} ei ole karkausvuosi.`;
        tulosVuosi.style.color = "red";
    }
}