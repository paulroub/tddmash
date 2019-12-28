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
