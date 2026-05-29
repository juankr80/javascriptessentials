import { styleText } from 'node:util';

export function green( message ){
    console.log(styleText('green', message));
}

export function red( message ){
    console.log(styleText('red', message));
}

export function blue( message ){
    console.log(styleText('blue', message));
}

export function yellow( message ){
    console.log(styleText(['bold', 'yellow'], message));
}