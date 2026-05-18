console.log("-------Numbers")

console.log(0/0);

console.log(10/0);
console.log(-10/0);

console.log(Infinity / Infinity);

console.log(Math.log(0));

const myInfinity = 2**1024;
console.log(myInfinity);

if( myInfinity == Infinity ){
    console.log("Es infinito");
}

console.log("------Number Limits");

let maxInteger = Number.MAX_SAFE_INTEGER;

console.log(maxInteger);
console.log( 2**53 - 1);

maxInteger += 1000;
console.log(maxInteger);

let myBigInt = BigInt(Number.MAX_SAFE_INTEGER);
myBigInt += 1000n;
console.log(myBigInt);

let myBigInt2 = 10n/3n;
console.log(myBigInt2);

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

console.log("Type coercion ----------");

const sum1 = "5" + 4;
console.log( sum1 );

const rest1 = '7' - 2;
console.log( rest1 );

const multiplicar = "5" * '3';
console.log( typeof multiplicar);
console.log( multiplicar );

const boolCoer = "Resultado: "+true;
console.log(boolCoer);

console.log("-------Bool cohercion")

if( true === "1" ){
    console.log("Son iguales");
}

console.log( true == BigInt(0) ) ;
console.log( true == "" );
if( "hola" ) {
    console.log("Hola es true");
}

if( !null ){
    console.log("null es falsy");
}

if( !undefined ){
    console.log("undefined es falsy");
}

if( !NaN ){
    console.log("NaN es falsy");
}

if( {} )
{
    console.log("Object");
}


console.log("-------Strings");

const name = "Jane";
const last = "Doe";

console.log(`Hello ${name} ${last}`);

let myString ="\u{2F804}";
console.log(myString);

console.log("\u{1f680}");
console.log('\u{270F}');

console.log('Hello \n World');

console.log("\xFF");

const str = "Hello World";
const partes = str.split(" ");
console.log(partes);

const oracion = "Era una tarde soleada donde el zorro y el perro se encontraron";

console.log( oracion.includes("tarde", 20));
console.log( oracion.indexOf("zorro"));

const substring = oracion.substring(8,13);
console.log( substring );

const sliced = oracion.slice(8,13);
console.log( sliced );

const substring1 = oracion.substring(-4);
console.log( substring1 );

const sliced1 = oracion.slice(-4);
console.log( sliced1 );

const substring2 = oracion.substring(13, 8);
console.log( substring2 );

const sliced2 = oracion.slice(13, 8);
console.log( sliced2 );


console.log("---- Regular expresion");

let regex = /hello/i;
const oracion2="hELLO WOrld";
console.log( regex.test(oracion2) );

let regex2 = new RegExp("world", "i");
console.log( regex2.test(oracion2) );

let regex3 = /\d+/;
console.log( regex3.test("there are 10 apples"));

const regexTelefono = /^\d{8}$/;

console.log(regexTelefono.test("76383845"));

const textPrecios = "El pedido cuesta 25$, y el envio son Bs5 mas impuesto de 2.5$";
const regexNumeros = /\d+/g;

const preciosEncontrados = textPrecios.match(regexNumeros);

console.log(`Precios encontrados: ${preciosEncontrados}`);

const tarjeta = "1234-4444-2222-1234";
const ocultarDigitos = /\d{4}-\d{4}-\d{4}-/;

const tarjetaMostrar = tarjeta.replace(ocultarDigitos, "XXXX-XXXX-XXXX-");

console.log(tarjetaMostrar);

const texto  = "Hola     mundo  con   Javascript";
const buscarEspacios = /\s+/g;

const textoLimpio = texto.replace(buscarEspacios, " ");
console.log(textoLimpio);