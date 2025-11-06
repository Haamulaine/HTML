function summa() {
    const luku1 = parseInt(document.getElementById("luku1").value);
    const luku2 = parseInt(document.getElementById("luku2").value);
    const luku3 = parseInt(document.getElementById("luku3").value);
    const luku4 = parseInt(document.getElementById("luku4").value);
    const luku5 = parseInt(document.getElementById("luku5").value);

    if ([luku1, luku2, luku3, luku4, luku5].some(isNaN)) {
        document.getElementById("tulos").innerHTML = "<span style='color:red'>Anna kaikki viisi lukua!</span>";
        return;
    }

    const summa = luku1 + luku2 + luku3 + luku4 + luku5;
    const keskiarvo = summa / 5;
    
    document.getElementById("tulos").innerHTML = `Lukujen summa on <b>${summa}</b> ja keskiarvo on <b>${keskiarvo}</b>.`;
}