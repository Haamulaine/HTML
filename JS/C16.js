class Kirja {
    constructor(otsikko, kirjailija, sivumara) {
        this.otsikko = otsikko;
        this.kirjailija = kirjailija;
        this.sivumaara = this.sivumaara;
    }

    tiedot() {
        console.log(`Otsikko: ${this.otsikko}, Kirjailija: ${this.kirjailija}, Sivumäärä ${this.sivumaara}`);
    }
}
cons kirja = new Kirja('Tuntematon Sotials', 'Väinö Linna', 490);
kirja.tiedot();