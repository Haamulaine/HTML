function() {
    let maksu = 5000;
    let korko = 1.02;
    let aika = 2;
    let korkosumma;
    let maksettava = maksu;
    for (var i = 1; i <=aika; i++) {
        maksettava = ( maksettava * korko);
    }
    korkosumma = maksettava - maksu;
    console.log("Joudut maksamaan " + maksu + " euron lainasta korkoa " + korkosumma + " jolloin makserravaa tulee yhteensä " + maksettava);
}
//laina();