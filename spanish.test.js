const {
    GetClockwork
} = require('./clockwork');

const testClock = GetClockwork('es');

test('noone', () => {
    const time = '12:00';
    const expected = [
        "son", "las", "doce"
    ];

    expect(testClock.timeWords(time)).toStrictEqual(expected);
});