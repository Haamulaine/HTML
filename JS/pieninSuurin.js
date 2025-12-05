function pieninSuurin(arr) {
    const pienin = Math.min(...arr);
    const suurin = Math.max(...arr);
    console.log(`Pienin arvo on ${pienin} ja suurin arvo on ${suurin}`);
    return { pienin, suurin };
}

//ESIM.
pieninSuurin([3, 4, 7, 1, 9]); // Tulostaa: Pienn arvo on 1 ja suurin arvo on 9