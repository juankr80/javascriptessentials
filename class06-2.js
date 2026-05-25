console.log("---------Spread");

const front = [1,2,3];
const back = [1,2,3];

const combined = [...front, ...back];

console.log( combined );

const defaultConfig = { theme: 'light', lang: 'en', debug: false};
const userPref = { theme: 'dark', debug: true };

const configFinal = { ...defaultConfig, ...userPref };
console.log( configFinal );

const logAll = ( first, ...rest ) =>{
    console.log(`First : ${first}`);
    console.log( rest );
}

logAll('a','b','c','d','e');

const [first, second, ...rest] = [10,30,40,50,60];

console.log( first, second );


const usuarios = [
  { id: 1, nombre: "Ana",  activo: false },
  { id: 2, nombre: "Luis", activo: false },
  { id: 3, nombre: "Pedro", activo: false },
  { id: 4, nombre: "Maria", activo: false }
];

const usuarios2 = usuarios.map( u => u.id === 1? {...u, activo: true}: u );

console.log(usuarios2);

const usuario = { id: 1, nombre: "Ana",  activo: false, password: "ABC123"};

const { password, activo, ...usuarioSeguro} = usuario;

console.log(usuarioSeguro);