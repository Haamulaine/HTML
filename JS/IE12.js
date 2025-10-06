function koePisteet(Ma, KeFy, Ai, Ru, En) {
    var taulukko = [["Matematiikka", Ma], ["KemiaFysiikka", KeFy], ["Aidinkieli", Ai], ["Ruotsi", Ru], ["Englanti", En]];
    for (var i = 0; i < taulukko.length; i++) {
        if (taulukko[i][1] >= 90) {
            console.log(taulukko[i][0] + ": K5");
        }
        else if (taulukko[i][1] >= 80) {
            console.log(taulukko[i][0] + ": K4");
        }
        else if (taulukko [i][1] >= 70) {
            console.log(taulukko[i][0] + ": H3");
        }
        else if (taulukko [i][1] >= 60) {
            console.log(taulukko[i][0] + ": T2");
        }
        else if (taulukko[i][1] >= 50) {
            console.log(taulukko[i][0] + ": T1");
        }
        else {
            console.log(taulukko[i][0] + ": Hylätty");
        }
    }
}
/*koePisteet(55, 78, 63, 88, 94);
koePisteet(99, 45, 70, 80, 60);*/