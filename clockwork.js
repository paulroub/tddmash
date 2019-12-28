const numberWords = [
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
    const hour = parts[0] % 12;
    const minute = parts[1];

    const hourStr = numberWords[hour];

    if (minute == 0)
    {
        return [
            "it", "is", hourStr, "o'clock"
        ];
    }
    else {
        const minuteStr = numberWords[minute];

        return [
            "it", "is", minuteStr, "minutes", "past", hourStr
        ];
    }
}

function parseTime(timestr) {
    return timestr
        .split(':')
        .map(numstr => Number(numstr));
}

module.exports = {
    timeWords
}

