function kaanna() {
    const kieli = document.getElementById("kieli").value;
    const tulos = document.getElementById("tulos5");
    let kaannos = "";

    if (kieli === "englanti") {
        kaannos = "Hello World";
    } else if (kieli === "ruotsi") {
        kaannos = "Hej världen";
    } else if (kieli === "espanja") {
        kaannos = "Hola Mundo";
    } else {
        kaannos = "Tuntematon kieli";
    }

    tulos.textContent = `Käännös: ${kaannos}`;
    alert(`Käännös: ${kaannos}`);
}