function palidromi(lause) {
    let kaannetty = "";
    for (var i = lause.length-1; i >= 0; i--) {
        kaannetty += lause[i];
    }
    if (lause == kaannetty) {
        console.log("lause on palidromi");
    }
    else {
        console.log("lause ei ole palidromi");
    }
}
palidromi("aaroporaa");
palidromi("aaro");
palidromi("saippuakauppias");
palidromi("innostunut");
palidromi("innostunutsonni");