import {describe, expect, test} from 'vitest';
import {sum, rest, multiply, divide} from '../src/math.js';

describe('math functions', () => {
    test('sum function', () => {
        
        expect(sum(1, 2)).toBe(3);
        expect(sum(4, 2)).toBe(6);        

    })

    test('rest function', () => {        
        expect(rest(1, NaN)).toBe(NaN);
    })

    test.skip('multiply function', () => {        
        expect(multiply("1", 5)).toBe(5);        
    })

    //test.only('Divide function', () => {        
    test('Divide function', () => {        
        expect(divide(10, 0)).toBe(Infinity);        
    })

});

describe('Objects', () => {
    test('toBe vs ToEqual', () => {
        const a = { name: 'Alice' }
        const b = { name: 'Alice' }

        expect(a).not.toBe(b)
        expect(a).toEqual(b)
    })

    test('ToEqual vs toStrict', () => {
        expect({ a: 1 }).toEqual({ a: 1, b: undefined })

        expect({ a: 1, b: undefined }).not.toStrictEqual({ a: 1 })

        class User {
            constructor(name) {
                this.name = name
            }
        }

        expect( new User('Ana')).toEqual( {name: 'Ana'});
        expect( new User('Ana')).not.toStrictEqual( {name: 'Ana'});

    });

    test('null checks and undefined', () => {
        let n = null;
        let u;

        expect(n).toBeDefined();
        expect(u).toBeUndefined();

        expect(n).toBeFalsy();
        expect("Hello").toBeTruthy();
        expect([]).toBeTruthy();
    })

    test('toBeClose', () => {
        let sum = 0.1 + 0.2;
        console.log(sum);
        expect(sum).toBeCloseTo(0.3)
    });

    test('toMacth', () => {
        expect('vitest@1.3.4').toMatch(/vitest@\d+\.\d+\.\d+/);
    });

    test('Arrays', () => {
        const shoppingList = ['milk', 'bread', 'eggs', 'butter']

        expect(shoppingList).toHaveLength(4)
        expect(shoppingList).toContain('milk')        
    })

    test('user has expected fields', () => {
        const user = {
            id: 1,
            name: 'Ana',
            email: 'ana@example.com',
            createdAt: '2024-01-01',
            address: { city: 'La Paz', street: 'Perez Velazco' }
        }

        expect(user).toMatchObject({
            name: 'Ana',
            address: {city: 'La Paz'}
        });

        expect(user).toHaveProperty('name');
        expect(user).toHaveProperty('name', 'Ana');

    });

    const testValues = [
        [1,1,2],
        [5,5,10],
        [1,-1,0]
    ];

    const label = 'Operation %i + %i => %i';

    test.for(testValues)(label, 
        ([a,b,c]) => {
            expect(sum(a,b)).toBe(c);
        });

});


    
