function laskePotenssi() {
    const luku1 = Number(document.getElementById("nro1").value);
    const luku2 = Number(document.getElementById("nro2").value);

    if (isNaN(luku1) || isNaN(luku2)) {
        document.getElementById("tulos8").innerHTML = "Anna molemmat luvut!";
        return;
    }
    
    const tulos = luku1 ** luku2;

    document.getElementById("tulos8").innerHTML = `${luku1}<sup>${luku2}</sup> = ${tulos}`;
}