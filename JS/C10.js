class Elain {
    construtor(nimi) {
        this.nimi = nimi;
    }

    aanesta() {
        console.log(`${this.nimi} teke ääntä.`);
    }
}
class Koira extends Elain {
    aanesta() {
        console.log(`${this.nimi} haukkuu: Woof woof!`);
    }
}
class Lintu extends Elain {
    aanesta() {
        console.log(`${this.nimi} laulaa: La la la!`);
    }
}
class Kala extends Elain {
    aanesta() {
        console.log(`${this.nimi} kuplii vedessä.`);
    }
}
const fido = new Koira("Fido");
const tweety = new Lintu("Tweety");
const nemo = new Kala("Nemo");

fido.aanesta();
tweety.aanesta();
nemo.aanesta();