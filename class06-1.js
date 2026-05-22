class Person {
  // Constructor initializes instance properties
  #age = 0;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method available on all instances
  speak() {
    return `I'm ${this.name} and I have ${this.age} years old`;
  }

  get age(){
    return this.#age;
  }

  set age( newAge ){
    if( newAge < 0 ){
        console.log(`age cannot be negative`);
        return;
    }
    this.#age = newAge;
  }

}

const alex = new Person('Alex', 20);
console.log( alex.speak() );
console.log( "Edad: "+alex.age );
alex.age = -10;
console.log( "Edad: "+alex.age );

class Student extends Person {
  constructor(name, age) {
    // Call the parent constructor with super
    super(name, age);
    this.grades = [];
  }

  addGrade(grade) {
    this.grades.push(grade);
    return `I have a new grade ${grade}`;
  }
}

console.log( new Student("Maria", 34).grades );

class ReproductorMusica {
    #cancionActual; 
    #volumen = 50;  

    constructor(cancionInicial) {
        this.#cancionActual = cancionInicial;
    }
    
    reproducir() {
        this.#subirDecibelios();
        return `Reproduciendo: ${this.#cancionActual} con volumen ${this.#volumen}`;
    }

    #subirDecibelios() {
        this.#volumen += 5;
        return this.#volumen;
    }
}

const myPlayer = new ReproductorMusica("song1");
console.log( myPlayer.reproducir() );
//console.log( myPlayer.'#volumen' );

class Animal {
    hacerSonido() { return "Sonido genérico"; }
}

class Perro extends Animal {
    hacerSonido() { return "Guau!"; } 
}

class Gato extends Animal {
    hacerSonido() { return "Miau!"; } 
}

const emitirSonido = (animal) => console.log( animal.hacerSonido() );

const black = new Perro();
const tomas = new Gato();

emitirSonido( black );
emitirSonido( tomas );

let toby = {"name": "asd"};


const objectoVacio = {};
console.log( "parse to string: "+objectoVacio.toString() );

console.log( objectoVacio instanceof Object);
console.log( Object.getPrototypeOf(objectoVacio) === Object.prototype );

console.log( tomas instanceof Gato);
console.log( tomas instanceof Animal);

console.log( Object.getPrototypeOf(black) === Perro.prototype );
console.log( Object.getPrototypeOf(Object.getPrototypeOf(black)) === Animal.prototype );

Animal.prototype.size = 10;

console.log( black.size );
console.log( tomas.size );

console.log( Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(black))) === Object.prototype );
console.log( Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(black)))) === null );


Object.prototype.saludarA = () => `hola desde prototypo`;

console.log( tomas.saludarA() );