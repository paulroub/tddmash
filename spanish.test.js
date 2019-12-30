const {
    GetClockwork
} = require('./clockwork');

const testClock = GetClockwork('es');

test('noon', () => {
    const time = '12:00';
    const expected = [
        "son", "las", "doce"
    ];

    expect(testClock.timeWords(time)).toStrictEqual(expected);
});

test('one is prefixed with "la"', () => {
    const time = '1:00';
    const expected = [
        "es", "la", "una"
    ];

    expect(testClock.timeWords(time)).toStrictEqual(expected);
});


test('1:10 es la una y diez', () => {
    const time = '1:10';
    const expected = [
        "es", "la", "una", "y", "diez"
    ];

    expect(testClock.timeWords(time)).toStrictEqual(expected);
});