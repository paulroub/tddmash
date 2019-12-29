const {
    highlights
} = require('./clockwork');

test('highlight in order', () => {
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
