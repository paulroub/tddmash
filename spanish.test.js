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