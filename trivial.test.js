const clockwork = require('./clockwork');

test('high noon', () => {
    const time = '12:00:00';
    const expected = [
        [
            "*it*", "*is*", "half", "ten"
        ],
        [
            "quarter", "twenty"
        ],
        [
            "five", "minutes", "to"
        ],
        [
            "past", "one", "three"
        ],
        [
            "two", "four", "five"
        ],
        [
            "six", "seven", "eight"
        ],
        [
            "nine", "ten", "eleven"
        ],
        [
            "*twelve*", "*o'clock*"
        ]
    ];

    expect(clockwork.highlightTime(time)).toStrictEqual(expected);
});
