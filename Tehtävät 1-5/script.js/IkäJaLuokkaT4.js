let ika = parseInt(prompt("Kuinka vanha olet?"));

//Tarkastaa syötteen
if (isNaN(ika) || < 0) {
    alert("Anna ikä.");
} else if (ika < 16) {
    alert("Saat ajaa polkupyörää.");
    console.log("Saat ajaa polkupyörää.");
} else if (ika < 18) {
    alert("Saat ajaa mopoa.");
    console.log("Saat ajaa mopoa.");
} else {
    alert("Saat ajaa autoa.");
    console.log("Saat ajaa autoa.")
}