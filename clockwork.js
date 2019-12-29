

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
    else if (minutes == 25) {
        return ["twenty", "five", "minutes"];
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
    let hour = parts[0] % 12;
    let minute = roundMinutes(parts[1]);

    if (minute == 0)
    {
        return [
            "it", "is", numberWords(hour), "o'clock"
        ];
    }
    else {
        let direction = "past";

        if (minute > 30) {
            direction = "to";
            ++hour;
            minute = 60 - minute;
        }

        return ["it", "is"]
            .concat(minuteWords(minute))
            .concat([direction, numberWords(hour)]);
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

