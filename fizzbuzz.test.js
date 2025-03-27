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

