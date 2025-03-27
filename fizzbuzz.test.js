const fizzBuzz = require('./fizzbuzz');
test('returns "FizzBuzz" for 15', ()=>{
    expect(fizzBuzz(15)).toBe('FizzBuzz');
});

test('returns "Fizz" for 9', ()=>{
    expect(fizzBuzz(9)).toBe('Fizz');
});

test('returns "Buzz" for 10', ()=>{
    expect(fizzBuzz(10)).toBe('Buzz');
});
test('returns "7" for 7', ()=>{
    expect(fizzBuzz(7)).toBe('7');
});