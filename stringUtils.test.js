const reverseString = require('./stringUtils');

test('reversers "hello" to "olleh"', ()=>{
    expect(reverseString('hello')).toBe('olleh');
});