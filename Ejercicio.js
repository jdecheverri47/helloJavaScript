function main(a, b, c) {
    a = b + c + a;

    return a;
}

console.log(main(7, 8, 3));

class coche {
    constructor (puerta) {
        this.puerta = puerta;
    }

    agregarPuerta () {
         this.puerta++;
    }
}

let miCoche = new coche(4)
miCoche.agregarPuerta();
console.log(miCoche.puerta)