const isEven = require('./numbers')

test('4 is even', ()=>{
    expect(isEven(4)).toBe(true);
});

test('3 is not even',()=>{
    expect(isEven(3)).toBe(false);
});