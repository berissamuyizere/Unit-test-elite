const isValidEmail = require('./emailValidator');

test('validates "mberissa@gmail.com" as a valid email', ()=>{
    expect(isValidEmail('mberissa@gmail.com')).toBe(true);
});

test('validates "invalid-email" as an invalid email', ()=>{
    expect(isValidEmail('invalid-email')).toBe(false);
});
