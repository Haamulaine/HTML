class Henkilo {
    contructor(etunimi, sukunimi, ika) {
        this.etunimi = etunimi;
        this.sukunimi = sukunimi;
        this.ika = ika;
    }
}
const risto = new Henkilo("Risto", "Reipas", 10);
risto.sukunimi = "Reippaampi";
risto.ika = 11;
//
console.log("Etunimi: ", risto.etunimi);
console.log("Sukunimi: ", risto.sukunimi);
console.log("Ikä: ", risto.ika);