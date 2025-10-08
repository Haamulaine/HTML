class Elain {
    contructor(nimi) {
        this.nimi = nimi;
    }
}

class Leijona extends Elain {
    aani() {
        console.log('Leijona karjuu');
    }
}

class Kirahvi extends Elain {
    aani() {
        console.log('Kirahvi ääntelee hiljaa');
    }
}

class Elaintarha {
    contructor(nimi) {
        this.nimi = nimi;
        this.elaimet = [];
    }

    lisaaElain(elain) {
        this.elaimet.push(elain);
        console.log(`Lisätty eläin: ${elain.nimi}`);
    }

    listaaElaimet() {
        console.log(`${this.nimi}:n eläimet: `);
    }
}

const elaintarha = new Elaintarha('Korkeasaari');
const leijona = new Leijona('Simba');
const kirahvi = new Kirahvi('Gerry');

elaintarha.lisaaElain(leijona);
elaintarha.lisaaElain(kirahvi);
elaintarha.listaaElaimet();