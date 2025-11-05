function tarkistaLuku() {
   const luku = Number(document.getElementById('laatikko').value);
   const result = document.getElementById('tulos');

   if (isNaN(luku)) {
    result.textContent = "Syötä kelpaava luku.";
   } else if (luku > 0) {
    result.textContent = "Numero on positiivinen."
   } else if (luku < 0) {
    result.textContent = "Numero on negatiivinen."
   } else {
    result.textContent = "Numero on nolla."
   }
}