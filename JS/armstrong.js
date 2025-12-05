const armstrongit = [];

for (let i = 0; i < 900; i++) {
    const luku = i + 100;
    const numerot = luku.toString().split('');
    const kuutiot = numerot
    .map(d => Number(d))
    .reduce((acc, d) => acc + Math.pow(d, 3), 0);

    if (kuutiot === luku) {
        armstrongit.push(luku);
    }
}

console.log('Kolminumeroiset Armstrong-luvut:', armstrongit);
// Toivottu tulos: [153, 370, 371, 407]