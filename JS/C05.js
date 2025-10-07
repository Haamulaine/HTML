class Elain {
    constructor(nimi = "kana") {
        this._nimi = nimi;
    }
    get nimi() {
        this._nimi = uusiNimi;
    }
    Syo() {
        console.log(this._nimi + " syö - mumm mumm mumm");
    }
}
const kana = new Elain();
console.log("Olio kana, nimi: " + kana.nimi);
//
kana.nimi = "kaakattaja";
console.log("Kanan uusi nimi: " + kana.nimi);
//
kana.Syo();