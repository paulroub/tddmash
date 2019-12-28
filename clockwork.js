const hours = [
    "twelve",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven"
];

function timeWords(timestring) {
    const parts = parseTime(timestring);
    const hour = parts[0];

    const hourStr = hours[hour % 12];

    return [
        "it", "is", hourStr, "o'clock"
    ];
}

function parseTime(timestr) {
    return timestr
        .split(':')
        .map(numstr => Number(numstr));
}

module.exports = {
    timeWords
}

