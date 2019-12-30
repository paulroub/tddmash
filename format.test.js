const {
    formatTime
} = require('./clockwork');

test('format noon', () => {
    const noon = new Date();
    noon.setHours(12);
    noon.setMinutes(0);

    expect(formatTime(noon)).toEqual('12:00');
});