console.log("------- Refence type");

const ana = { name: "Ana" };
const ana2 = { name: "Ana" };

console.log( ana === ana2 );

const ana3 = ana;
ana3.edad = 20;
console.log(ana);

const array1 = [1,2,3,4];
const array2 = array1;

array2.push(5);

console.log(array1);

const copiaAna = { ...ana } 

copiaAna.direccion = "Calle n2";

console.log( ana );
console.log( copiaAna );


const usuarioOriginal = {
    nombre: "Ana",
    detalles: {
        ciudad: "La Paz",
        hobbies: ["leer", "correr"]
    }
};

const usuarioCopia = structuredClone( usuarioOriginal );
usuarioCopia.detalles.ciudad = "Santa Cruz";

console.log( usuarioOriginal );
console.log( usuarioCopia );

Object.preventExtensions( usuarioCopia );
usuarioCopia.edad = 20;
usuarioCopia.nombre = "Ana2";

console.log("Con nombre  "+usuarioCopia.nombre);

Object.seal(usuarioCopia);
delete usuarioCopia.nombre;

Object.freeze(usuarioCopia);

usuarioCopia.nombre = "Cambio";

console.log(usuarioCopia);



console.log("-------Arryas");

const products = [
  { name: 'Laptop', price: 999, inStock: true },
  { name: 'Phone', price: 699, inStock: false },
  { name: 'Tablet', price: 499, inStock: true },
  { name: 'Watch', price: 299, inStock: true },
  { name: 'Tv', price: 500, inStock: true },
];

const names = products.map( (product) => product.name );
console.log( names );

const available = products.filter( (product) => product.inStock );
console.log( available );

const itemsBaratos = products
    .filter( (p) => p.price <500)
    .map((p) => p.name);

console.log( itemsBaratos );


const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Carol' },
];


const bob = users.find( (u) => u.name === 'Bob');
console.log(bob);

users.forEach( u => console.log(`<div>${u.name}</div>`) );

const menor300 = products.some( p => p.price < 300 );
console.log(`Hay menores de 300 ${menor300}`);

const disponible = products.every( p => p.inStock );
console.log(`Todos disponibles ${disponible}`);

const prices = [1,2,3,4];
const  totalP = prices.reduce( (total, price ) => total +price, 0 );
console.log( `Total: ${totalP}`);

let numeroA = [] + 1;
numeroA = numeroA + 2;

console.log(numeroA);

const words = ['hello1', 'world', 'hello', 'javascript', 'world', 'hello', 'test'];

const counts = words.reduce( (acc, word) => {
    acc[word] = (acc[word] || 0 ) +1;
    return acc;
}, {})

console.log(counts);


const pipe = (...fns) => (value) => fns.reduce((acc, fn) => fn(acc), value);

const lowercase = text => text.toLowerCase();
const addHashtag = text => `#${text}`;

const createTag = pipe(lowercase, addHashtag);

console.log( createTag("JAvaScript"));

console.log("------------- JSON parsing");

const user = {
  name: 'Alice',
  age: 30,
  hobbies: ['reading', 'coding'],
  address: { city: 'Portland', state: 'OR' },
};

const jsonString = JSON.stringify(user);
console.log(user);
console.log(jsonString);

const parsed = JSON.parse(jsonString);
console.log( parsed.age );

const data = { name: 'Bob', password: 'secret123', role: 'admin' };

const safeJson = JSON.stringify( data, (key, value) => {
    if( key === "password"){
        return undefined;
    }
    return value;
});

console.log(safeJson);

const dateJson = '{"created":"2024-01-15T10:30:00.000Z","name":"Event"}';

const event = JSON.parse( dateJson, (key, value) => {
    if( key === "created"){
        return new Date(value);
    }
    return value;
});

console.log( event.created instanceof Date);
console.log( event.created.getFullYear() );