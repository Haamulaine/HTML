class Kirja {
    constructor(nimi, kirjailija) {
        this.nimi = nimi;
        this.kirjailija = kirjailija;
    }
}

class Kirjasto {
    constructor() {
        this.kirjat = [];
    }
    liisaaKirja(krja) {
        this.kirjat.push(kirja);
    }

    haeKirjat(kirjailija) {
        return this.kirjat.filter(kirja => kirja.kirjailja === kirjailija);
    }
}
const kirjasto1 = new Kirjasto();
const kirja1 = new Kirja("Harry Potter", "J.K. Rowling");
const kirja2 = new Kirja ("Game of Thrones", "George R.R. Martin");
kirjasto1.liisaaKirja(kirja1);
kirjasto1.liisaaKirja(kirja2);
console.log(kirjasto1.haeKirjat("J.K. Rowling"));