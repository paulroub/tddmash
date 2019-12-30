const {
    highlights,
    isHighlighted
} = require('./clockwork');

test('highlight noon', () => {
    const timewords = ["it", "is", "twelve", "o'clock"];
    const expected = [
        ["*it", "*is", "half", "ten"],
        ["quarter", "twenty"],
        ["five", "minutes", "to"],
        ["past", "one", "three"],
        ["two", "four", "five"],
        ["six", "seven", "eight"],
        ["nine", "ten", "eleven"],
        ["*twelve", "*o'clock"]
    ];

    expect(highlights(timewords)).toStrictEqual(expected);
});

test('highlight twenty-five after five', () => {
    const timewords = ["it", "is", "twenty", "five", "minutes", "past", "five"];
    const expected = [
        ["*it", "*is", "half", "ten"],
        ["quarter", "*twenty"],
        ["*five", "*minutes", "to"],
        ["*past", "one", "three"],
        ["two", "four", "*five"],
        ["six", "seven", "eight"],
        ["nine", "ten", "eleven"],
        ["twelve", "o'clock"]
    ];

    expect(highlights(timewords)).toStrictEqual(expected);
});

test('is highlighted', () => {
    expect(isHighlighted('*foo')).toBe(true);
});

test('is not highlighted', () => {
    expect(isHighlighted('foo')).toBe(false);
});
