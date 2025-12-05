function jarjestaAakkoset(sana) {
    let kirjaimet = Array.from(sana);

    kirjaimet.sort();

    let tulos = kirjaimet.join('');

    console.log(tulos);
}

//ESIM.
jarjestaAakkoset("webmaster"); //=> abeemrstw