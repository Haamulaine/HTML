function isoPieni(merkki) {
    if (merkki.match(/[a-öA-Ö]/i) && merkki == merkki.toUpperCase()) {
        console.log("Merkki on iso kirjan");
    }
    else if (merkki.match(/[a-öA-Ö]/i) && merkki == merkki.toLowerCase()) {
        console.log("Merkki on pieni kirjain");
    }
    else {
        console.log("Merkki ei ole kirjain");
    }
}
/*isoPieni("v");
isoPieni("T");
isoPieni("?");*/