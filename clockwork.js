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

module.exports = {
    timeWords(timestring) {
        const parts = timestring.split(':');
        const hour = Number(parts[0]);

        const hourStr = hours[hour % 12];

        return [
            "it", "is", hourStr, "o'clock"
        ];
    }
}