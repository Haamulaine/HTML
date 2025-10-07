class Henkilo {
    constructor(etunimi, sukunimi, ika) {
        this.etunimi = etunimi;
        this.sukunimi = sukunimi;
        this.ika = ika;
    }
    NaytaTiedot() {
        console.log("Etunimi: ", this.etunimi);
        console.log("Sukunimi: ", this.sukunimi);
        console.log("Ikä: ", this.ika);
    }
}
const risto = new Henkilo("Risto", "Reipas", 10);
risto.NaytaTiedot();