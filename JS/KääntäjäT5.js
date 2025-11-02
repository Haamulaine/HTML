// Kysytään kieli
let kieli = prompt("Mille kielelle haluat käännöksen? (englanti, ruotsi, espanja)");

//Määritetään käännös
let kaannos;

if (kieli === "englanti") {
    kaannos = "Hello World";
} else if (kieli === "ruotsi") {
    kaannos = "Hej världen";
} else if (kieli === "espanja") {
    kaannos = "Hola mundo";
} else {
    kaannos = "Tuntematon kieli!";
}

//Tulos
alert("Käännös ('Hei maailma' -> " + kieli + "): " + kaannos);
console.log("Käännös ('Hei maailma' -> " + kieli + ") " + kaannos);