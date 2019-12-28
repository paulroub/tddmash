const clockwork = require('./clockwork');

test('five past the hour', () => {
    const time = '12:05';
    const expected = [
        "it", "is", "five", "minutes", "past", "twelve"
    ];

    expect(clockwork.timeWords(time)).toStrictEqual(expected);
});
