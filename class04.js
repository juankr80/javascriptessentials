console.log("----Named functions")

console.log( greet("Jorge") );

function greet(name){
    return `Hello, ${name}`;
}

function doNothing(num1, num2){
    const Resultado = num1+num2;
}

console.log( doNothing(2,3) );

function mySuma(a=0, b=0, c=0, d=0){
    return a+b+c+d;
}

console.log( mySuma(2,4,5,8) );
console.log( mySuma(2) );

function mySumaVacia(){
    return arguments[0]+arguments[1];
}

console.log(mySumaVacia(1,1));

console.log( mySuma(1,2,3));

function promedio(...numeros){
    let total = 0;
    for(let i=0; i <numeros.length; i++){
        total += numeros[i];
    }
    return total/numeros.length;
}

console.log(`Promedio: ${promedio(1,2,3,5,5,6)}`);


console.log(" ------- Expression ");


const add = function sumar(a, b){
    return a+b;
}

console.log( add(5,4) );

let isVipclient = true;

const calculatePrice = isVipclient 
    ? function (precio) { return precio -10 } 
    : function (precio) { return precio };

console.log(` Precio de la entrada ${calculatePrice(100) }`);


console.log(" --------- Arrow ");

const double = x => x*2;

console.log(`Double ${double(4)}`);

const sumaArr = _ => {    
    let totalArg = arguments.length;    
    return totalArg;
}

console.log( `Sumas : ${sumaArr(3,4,4)}`);


const calcular = (a, b, operacion) => operacion(a,b);

const sumar = (x, y, z) => x + y;
const restar = (x, y) => x - y;
const division = (x, y) => x / y;

console.log( calcular(2,2, sumar) );
console.log( calcular(2,2, division) );


console.log("------IIFE");

(function () {
    const secret = "contraseña";
    console.log("IIFE executada!");
})();

(() => {
    const secret = "contraseña";
    console.log("IIFE executada2!");
})();

((userName, age) => {    
    console.log(`Name ${userName}, edad: ${age}`);
})("UserName", 2);




// Global scope — accessible everywhere
const globalVar = 'I am global';

const demonstrateScope = () => {
  // Function scope — accessible within this function
  const functionVar = 'I am function-scoped';

  if (true) {
    // Block scope — accessible only within this block
    const blockVar = 'I am block-scoped';
    console.log(globalVar);   // Accessible
    console.log(functionVar); // Accessible
    console.log(blockVar);    // Accessible
  }

  console.log(globalVar);   // Accessible
  console.log(functionVar); // Accessible
  // console.log(blockVar); // ReferenceError — out of scope
};

demonstrateScope();

//Calculo factorial

// 4! = 4*3*2*1
// n! = (n)(n-1)*...*1


console.log("----------Closures");

const createCounter = () => {
    let count = 0;

    return () => {
        count += 1;
        return count;
    }
}

const counterA = createCounter();
const counterB = createCounter();

console.log( counterA() );
console.log( counterA() );

console.log( counterB() );

const filtrarNumeros = (numeros, prueba) => {
    const resultado = [];

    for(const num of numeros){
        if( prueba(num) ){
            resultado.push(num);
        }
    }

    return resultado;
}

const misNumeros = [1,2,3,5,4,8,4,3,45];

const pares = filtrarNumeros( misNumeros, num => num % 2 === 0);
console.log( pares );

const mayores5 = filtrarNumeros( misNumeros, num => num > 5 );
console.log(mayores5);


console.log("------- Composition");

const calculateFinalPrice = price => addTax( applyDiscount(price) );

const applyDiscount = price => price * 0.9;
const addTax = price => price * 1.15;

console.log( calculateFinalPrice(100) );


const compose = (f, g) => x => f(g(x)); 

const doble = x => x*2;
const sumarUno = x => x+1;

const dobleMasUno = compose(doble, sumarUno);
console.log(dobleMasUno(4));

console.log("------Currying");

const curriedSum = a => b => c => a + b +c;

console.log( curriedSum(1)(2)(3) );
console.log( curriedSum(1)(2) );

const logger = severity => message => `[${severity}] - ${message}`;

const logInfo = logger("INFO");
const logError = logger("ERROR");

console.log( logInfo("Appication Init") );

console.log( logError("NaN"));


const obtenerFromCache = () => {
    let cache = [];

    return (nombre) => {
        if( cache[nombre] != undefined ){
            return `Desde cache: ${cache[nombre]}`;
        }
        //Demora tiempo
        const user = `UsuarioId: ${Math.floor((Math.random()*100/10)) }`;
        cache[nombre] = user;
        return `Desde BD ${user}`;
    }
}

const leerDB = obtenerFromCache();

console.log(`Obtener id usuario Jhon: ${leerDB("Jhon")}`);
console.log(`Obtener id usuario Jhon: ${leerDB("Jhon")}`);
console.log(`Obtener id usuario Jhon: ${leerDB("Jhon")}`);
console.log(`Obtener id usuario Jhon: ${leerDB("Maria")}`);