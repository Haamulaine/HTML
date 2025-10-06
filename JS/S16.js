function poistaPilkkuja(numerojono) {
    var numerot = numerojono.split(',');
    var tulostettavatNumerot = [];
    for (var i = 0; i < numerot.length; i++) {
        var numero = numerot[i].trim();
        if (!isNaN(numero)) {
            tulostettavatNumerot.push(numero);
        }
    }
    console.log(tulostettavatNumerot.join(' '));
}

// Käyttöesimerkki
var syote = '7,3,9,2,44,99,123';
poistaPilkkuja(syote);