class Pankktili {
    constructor() {
        this.saldo = 0;
    }

    talleta(maara) {
        if (maara > 0) {
            this.sadlo += maara;
            console.log(`Talletettu ${maara} euroa. Uusi saldo: ${this.saldo} euroa.`);
        }
        else {
            console.log("Nostettava määrä ylittää tilin saldon.");
        }    
}
nosta(maara) {
    if (maara > 0) {
        this.saldo -= maara;
        console.log(`Nostettu ${maara} euroa. Uusi saldo: ${this.saldo} euroa.`);
    }
    else {
        console.log("Nostettava määrä ylittää tilin saldon.");
    }
    else {
        console.log("Nostettava määrä on virheellinen.");
    }
   }
}
const tili = new Pankkitili();
tili.talleta(100); // talletettu 100e
tili.nosta(50); // nostettu 50e
tili.nosta(50); // nostettu 50e
tili.talleta(-20); // virheellinen