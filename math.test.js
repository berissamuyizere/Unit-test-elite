const{add, subtract, multiply, divide} = require('./math');

test('adds 1+2 to equal to 3', () =>{
    expect(add(1,2)).toBe(3);
});

test('subtracts 5-2 to equal to 3', ()=>{
    expect(subtract(5,2)).toBe(3);
});


