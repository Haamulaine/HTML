function kertoma() {
   const n = Number(document.getElementById("kertoma").value);
   const tulosDiv = document.getElementById("tulos");

   if (isNaN(n) || n < 0) {
    tulosDiv.innerHTML = "Syötä käyvä luku!";
    return;
   }

   if (n === 0) {
    tulosDiv.innerHTML = "0! = 1";
    return;
   }

   let kertoma = 1;
   let kaava = "";

   for (let i = n; i >= 1; i--) {
    kertoma *= i;
    kaava += i;
    if (i > 1) kaava += " x ";
   }

   tulosDiv.innerHTML = `${n}! = ${kaava} = ${kertoma}`;
}