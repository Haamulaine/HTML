class Kuvakirja {
    #SivujenLukumaara;
    constructor(sivumaara = 16) {
        this.#SivujenLukumaara = sivumaara;
    }
    HaeSivumaara() {
        return this.#SivujenLukumaara;
    }
}
const kuvakirjaOletus = new Kuvakirja();
console.log("Oletussivumäärä: " + kuvaKirjaOletus.HaeSivumaara());
//
const kuvakirjaMukautettu = new Kuvakirja(24);
console.log("Mukautettu sivumäärä: " + kuvakirjaMukautettu.HaeSivumaara());