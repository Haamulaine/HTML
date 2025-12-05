function haeKuukausi(num) {
    const kuukaudet = [
        "Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu",
        "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu",
        "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"
    ];

    return kuukaudet[num - 1] || "Virheellinen kuukausinumero";
}

//ESIM.
console.log(haeKuukausi(1)); // Tamikuu
console.log(haeKuukausi(12)); // Joulukuu
console.log(haeKuukausi(15)); // Virheellinen kuukausinumero