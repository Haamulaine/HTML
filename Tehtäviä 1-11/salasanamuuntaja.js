function muunna() {
    const sana = document.getElementById("salasana").value.trim();

    if (sana === "") {
        document.getElementById("tulos10").innerHTML = "Anna sana!";
    }

    let salasana = "";

    const aakkoset = "ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖ";

    for (let i = 0; i < sana.length; i++) {

        const satunnaisKirjain = aakkoset.charAt(
            Math.floor(Math.random() * aakkoset.length)
        );

        salasana += sana[i] + satunnaisKirjain;
    }

    document.getElementById("tulos10").innerHTML = `Salasana on: ${salasana}`;
}