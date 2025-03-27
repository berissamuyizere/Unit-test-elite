const{add, subtract, multiply, divide} = require('./math');

test('should provide the sum of two values', () =>{
    expect(add(1,2)).toBe(3);
});

test('should provide the test of two values', ()=>{
    expect(subtract(5,2)).toBe(3);
});

test('should provide the multiplication of two values', () => {
    expect(multiply(2,3)).toBe(6);
});

test('should provide the division of two values', () =>{
    expect(divide(10,2)).toBe(5);
    expect(()=> divide(10,0)).toThrow('Cannot divide by zero')
 });