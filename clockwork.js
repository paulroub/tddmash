const theBoard = [
    ["it", "is", "half", "ten"],
    ["quarter", "twenty"],
    ["five", "minutes", "to"],
    ["past", "one", "three"],
    ["two", "four", "five"],
    ["six", "seven", "eight"],
    ["nine", "ten", "eleven"],
    ["twelve", "o'clock"]
];

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

    if (num === 20) {
        return "twenty";
    }
    else if (num === 15) {
        return "quarter";
    }

    return words[num];
}

function highlights(theWords) {
    const result = [];
    const remaining = theWords.slice(0);
    let nextWord = remaining.shift();

    theBoard.forEach((row) => {
        const newRow = [];

        row.forEach((word) => {
            if (word === nextWord) {
                newRow.push(`*${word}`);
                nextWord = remaining.shift();
            }
            else {
                newRow.push(word);
            }
        });

        result.push(newRow);
    });

    return result;
}

function isHighlighted(word) {
    return word.slice(0, 1) === '*';
}

function getText(word) {
    return word;
}

function minuteWords(minutes) {
    if (minutes === "20") {
        return ["twenty", "minutes"];
    }
    else if (minutes === 15) {
        return ["quarter"];
    }
    else if (minutes === 25) {
        return ["twenty", "five", "minutes"];
    }
    else if (minutes === 30) {
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

    if (minute === 0) {
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
        .map((numstr) => {
            return Number(numstr);
        });
}

function roundMinutes(minutes) {
    return minutes - (minutes % 5);
}

if (typeof exports === 'object') {
    module.exports = {
        timeWords,
        highlights,
        isHighlighted,
        getText
    };
}
