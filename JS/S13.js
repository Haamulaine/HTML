function FibonacciParilliset() {
    let fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    let summa = 0;
    for (var i = 2; i <10; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        if (fibonacci[i] % 2 == 0) {
            summa += fibonacci[i];
        }
    }
    console.log(fibonacci);
    console.log("Parillisten summa: " + summa);
}
FibonacciParilliset();