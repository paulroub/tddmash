const clockwork = require('./clockwork');

test('five past the hour', () => {
    const time = '12:05';
    const expected = [
        "it", "is", "five", "minutes", "past", "twelve"
    ];

    expect(clockwork.timeWords(time)).toStrictEqual(expected);
});

test('twenty past the hour', () => {
    const time = '12:20';
    const expected = [
        "it", "is", "twenty", "minutes", "past", "twelve"
    ];

    expect(clockwork.timeWords(time)).toStrictEqual(expected);
});

test('round minutes down', () => {
    const time = '12:06';
    const expected = [
        "it", "is", "five", "minutes", "past", "twelve"
    ];

    expect(clockwork.timeWords(time)).toStrictEqual(expected);
});

test('quarter past the hour', () => {
    const time = '12:15';
    const expected = [
        "it", "is", "quarter", "past", "twelve"
    ];

    expect(clockwork.timeWords(time)).toStrictEqual(expected);
});

test('half past the hour', () => {
    const time = '12:30';
    const expected = [
        "it", "is", "half", "past", "twelve"
    ];

    expect(clockwork.timeWords(time)).toStrictEqual(expected);
});
