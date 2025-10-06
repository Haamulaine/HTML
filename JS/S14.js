function FibonacciParittomat() {
    let fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    let summa = 1;
    for (var i = 2; i < 10; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        if (fibonacci[i] % 2 != 0) {
            summa += fibonacci[i];
        }
    }
    console.log(fibonacci);
    console.log("Parittomien summa " + summa);
}
FibonacciParittomat();