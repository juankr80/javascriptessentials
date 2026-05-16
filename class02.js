let height_int = 180;
let height_decimal = 180.0;
let height_binary = 0b10110100;
let height_hex = 0xB4;

if( height_int === height_decimal){
    console.log("Son iguales");
}

if( height_int === height_binary){
    console.log("Son iguales");
}

if( height_int === height_hex){
    console.log("Son iguales");
}


console.log("Parse Int -------------");

console.log( parseInt("123") );
console.log( parseInt("123.6567") );
console.log( parseInt("    123"));
console.log( parseInt("    123     "));

console.log( parseInt("ff", 16) );
console.log( parseInt("0xFF") );

console.log( parseInt("56jasdkjahskd"));

console.log( parseInt("asdasd7676"));

console.log("Parse Float ------------");

console.log( parseFloat("123.6567") );
console.log( parseFloat("314e-2"));
console.log( parseFloat("314E+2"));

console.log( parseFloat("123.6567sadasduw jhasjkhas") );

console.log("NaN -------------");
console.log(typeof NaN);

if( NaN === NaN){
    console.log("NaN es igual a NaN");
} else {
    console.log("NaN no es igual a NaN");
}

if( isNaN( parseInt("asdasd7676") )){
    console.log("Es NaN");
} else {
    console.log("No es NaN");
}

let _Division = 0/0;
console.log(_Division);

let $division2 = 100;
console.log($division2);

let numberx2 = myfunction(5);
console.log(numberx2);


function myfunction( value1 ){
    return value1 * 2;
}



