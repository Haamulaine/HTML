function tarkasta() {
    const etunimi = document.getElementById("etunimi").value.trim();
    const sukunimi = document.getElementById("sukunimi").value.trim();
    const email = document.getElementById("email").value.trim();

    if(!etunimi || !sukunimi || !email) {
        alert("Täytä kaikki henkilötiedot (etunimi, sukunimi, sähköposti.");
        return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i;
    if (!emailPattern.test(email)) {
        alert("Sähköpostiosoite ei ole kelvollinen.");
    }

    const mainos = document.querySelector('input[name="mieluisin"]:checked');
    if (!mainos) {
        alert("Valitse, haluatko mainospostia.");
        return;
    }

    const mieluisat = Array.from(document.querySelectorAll('input[name="mieluisin"]:checked'))
    .map(cb => cb.value)
    .join(", ");

    alert(
        `Kiitos, ${etunimi} ${sukunimi}!\n` + `sähköposti: ${email}\n` + `Mainosposti: ${mainos.value === "kylla" ? "Kyllä" : "Ei"}\n` + 
        `Pidät eniten: ${mieluisat || "Ei valintaa"}`
    );
}