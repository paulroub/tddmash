const clockwork = require('./clockwork');

test('high noon', () => {
    const time = '12:00';
    const expected = [
        "it", "is", "twelve", "o'clock"
    ];

    expect(clockwork.timeWords(time)).toStrictEqual(expected);
});

test('another hour', () => {
    const time = '10:00';
    const expected = [
        "it", "is", "ten", "o'clock"
    ];

    expect(clockwork.timeWords(time)).toStrictEqual(expected);
});

test('midnight', () => {
    const time = '00:00';
    const expected = [
        "it", "is", "twelve", "o'clock"
    ];

    expect(clockwork.timeWords(time)).toStrictEqual(expected);
});

test('handle PM times', () => {
    const time = '22:00';
    const expected = [
        "it", "is", "ten", "o'clock"
    ];

    expect(clockwork.timeWords(time)).toStrictEqual(expected);
});