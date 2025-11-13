function laskePP() {
    const alku = parseInt(document.getElementById("number1").value, 10);
    const loppu = parseInt(document.getElementById("number2").value, 10);

    if (isNaN(alku) || isNaN(loppu)) {
        document.getElementById("tulos11").innerHTML = "Anna molemmat luvut!";
        return;
    }

    if (loppu <= alku) {
        document.getElementById("tulos11").innerHTML = "Toisen luvun pitää olla suurempi!";
        return;
    }

    let parilliset = [];
    let parittomat = [];
    let summaParilliset = 0;
    let summaParittomat = 0;

    for (let i = alku; i <= loppu; i++) {
        if (i % 2 === 0) {
            parilliset.push(i);
            summaParilliset += i;
        } else {
            parittomat.push(i);
            summaParittomat += i;
        }
    }

    document.getElementById("tulos").innerHTML = `Parilliset luvut: ${parilliset.join(", ")}<br>
    Parillisten summa: ${summaParilliset}<br>
    Parittomat luvut: ${parittomat.join(", ")}<br>
    Parittomien summa: ${summaParittomat}`;
}