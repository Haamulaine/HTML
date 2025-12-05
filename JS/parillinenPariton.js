function parillinenPariton(n) {
    if (n % 2 === 0) {
        return "Parillinen";
    } else {
        return "Pariton"
    }
}

//ESIM.
console.log(parillinenPariton(12)); // Parillinen
console.log(parillinenPariton(3)); // Pariton