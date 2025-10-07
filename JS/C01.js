class Henkilo {
    constructor(etunimi, suknimi, ika) {
        this.etunimi = etunimi;
        this.sukunimi = sukunimi;
        this.ika = ika;
    }
}
const risto = new Henkilo("Risto", "Reipas", 10);
console.log("Etunimi: ", risto.etunimi);
console.log("Sukunimi: ", risto.sukunimi);
console.log("Ikä: ", risto.ika);