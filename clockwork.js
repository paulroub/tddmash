

function numberWords(num) {
    const words = [
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

    if (num == 20) {
        return "twenty";
    }
    else if (num == 15) {
        return "quarter";
    }

    return words[num];
}

function minuteWords(minutes) {
    if (minutes == "20") {
        return ["twenty", "minutes"];
    }
    else if (minutes == 15) {
        return ["quarter"];
    }
    else if (minutes == 30) {
        return ["half"];
    }
    else {
        return [numberWords(minutes), "minutes"];
    }
}

function timeWords(timestring) {
    const parts = parseTime(timestring);
    const hour = parts[0] % 12;
    const minute = roundMinutes(parts[1]);

    const hourStr = numberWords(hour);

    if (minute == 0)
    {
        return [
            "it", "is", hourStr, "o'clock"
        ];
    }
    else {
        const minuteStr = minuteWords(minute);

        return ["it", "is"].concat(minuteStr).concat(["past", hourStr]);
    }
}

function parseTime(timestr) {
    return timestr
        .split(':')
        .map(numstr => Number(numstr));
}

function roundMinutes(minutes) {
    return minutes - minutes % 5;
}

module.exports = {
    timeWords
}

