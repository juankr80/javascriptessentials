console.log("Inicio");

function squareNumber(num){
    if( typeof num !== "number"){
        throw new Error("Not number");
    }
    return num*num;
}


try {
    squareNumber("hola");
} catch (error) {
    console.log( error.message );
}

class PaymentError extends Error {
    constructor( message, statusCode, paymentMethod){
        super(message);
        this.name = "PaymentError";
        this.statusCode = statusCode;
        this.paymentMethod = paymentMethod;
    }
}

let amount = 10;
let balance = 5;

if( amount > balance ){
    throw new PaymentError(
        "Insufficients funds",
        402,
        "CreditCard"
    )
}


console.log("fin");