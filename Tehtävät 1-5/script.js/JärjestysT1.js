function jarjesta() {

    let a = Number(prompt("Anna 1. luku:"));
    let b = Number(prompt("Anna 2. luku:"));
    let c = Number(prompt("Anna 3. luku:"));

    let luvut = [a, b, c];
    luvut.sort((x, y) => x - y);

    document.getElementById("tulos").textContent = "Numerot jäjrestyksessä: " + luvut.join(", ");
}