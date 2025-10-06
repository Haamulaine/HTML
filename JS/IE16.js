function kuukaudenPaivat(kknro) {
    kknro = parseInt(kknro);
    switch (kknro) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log("Kuukaudessa on 31 päivää");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log("Kuukaudessa on 30 päivää");
        case 2: console.log("Kuukaudessa on 27/28 päivää");
    }
}
/*kuukaudenPaivat(2);
kuukaudenPaivat(6);
kuukaudenPaivat(7);*/