class Ajoneuvo {
    constructor(merkki, malli, vuosimalli) {
        this._merkki = merkki;
        this._malli = malli;
        this._vuosimalli = vuosimalli;
    }
    get merkki() {
        return this._merkki
    }
    set merkki(uusiMerkki) {
        this._merkki = uusiMerkki;
    }
    get malli () {
        return this._malli;
    }
    set malli(uusiMalli) {
        this._malli = uusiMalli;
    }
    get vuosimalli() {
        return this._vuosimalli;
    }
    set vuosimalli(uusiVuosimalli) {
        this._vuosimalli = uusiVuosimalli;
    }
    aja() {
        console.log("Ajetaan ajoneuvoa: " + this._merkki + " " + this._malli);
    }
    kiihdyta() {
        console.log("Kiihdytetään ajoneuvoa: " + this._merkki + " " + this._malli);
    }
    jarruta() {
        console.log("Jarrutetaan ajoneuvoa: " + this._merkki + " " + this._malli);
    }
    kaynnista() {
        console.log("Käynnistetään ajoneuvoa: " + this._merkki + " " + this._malli);
    }
    sammuta() {
        console.log("Sammutetaan ajoneuvo: " + this._merkki + " " + this._malli);
    }
}
class Auto extends Ajoneuvo {
}
class TestiAjo {
    constructor() {
        const mersu = new Auto("Mercedes-Benz", "Sarja S", 2023);
        mersu.aja();
    }
}
const testiAjo = new TestiAjo();