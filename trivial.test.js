const clockwork = require('./clockwork');

test('high noon', () => {
    const time = '12:00:00';
    const expected = [
        "it", "is", "tweleve", "o'clock"
    ];

    expect(clockwork.timeWords(time)).toStrictEqual(expected);
});
