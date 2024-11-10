const { gestSingleMinutesRow, get5MinutesRow, getSingleHourRow, get5HoursRow, getSecondsRow, getBerlinClockTime } = require('../src/berlinClock');

describe("Main should returns hours, minutes and seconds of the actual time",() => {

    it("should return correct lamps for the single minutes row", () => {
        expect(gestSingleMinutesRow(0)).toBe('OOOO');
        expect(gestSingleMinutesRow(1)).toBe('YOOO');
        expect(gestSingleMinutesRow(2)).toBe('YYOO');
        expect(gestSingleMinutesRow(3)).toBe('YYYO');
        expect(gestSingleMinutesRow(4)).toBe('YYYY');
    });

    it("should return correct lamps for the five minutes row", () => {
        expect(get5MinutesRow(0)).toBe('OOOOOOOOOOO');
        expect(get5MinutesRow(5)).toBe('YOOOOOOOOOO');
        expect(get5MinutesRow(15)).toBe('YYROOOOOOOO');
        expect(get5MinutesRow(30)).toBe('YYRYYROOOOO');
    });

    it("should return correct lamps for the single hours row", () => {
        expect(getSingleHourRow(0)).toBe('OOOO');
        expect(getSingleHourRow(1)).toBe('ROOO');
        expect(getSingleHourRow(2)).toBe('RROO');
        expect(getSingleHourRow(3)).toBe('RRRO');
        expect(getSingleHourRow(4)).toBe('RRRR');
    });

    it("should return correct lamps for the five hours row", () => {
        expect(get5HoursRow(0)).toBe('OOOO');
        expect(get5HoursRow(5)).toBe('ROOO');
        expect(get5HoursRow(10)).toBe('RROO');
        expect(get5HoursRow(15)).toBe('RRRO');
        expect(get5HoursRow(20)).toBe('RRRR');
    });

    it("should return correct lamps for the seconds row", () => {
        expect(getSecondsRow(1)).toBe('O');
        expect(getSecondsRow(2)).toBe('Y');
        expect(getSecondsRow(3)).toBe('O');
        expect(getSecondsRow(4)).toBe('Y');
    });

    it("should return the correct Berlin Clock time", () => {
        const timestamp = new  Date('2024-11-10T10:55:38Z').getTime();
        const berlinClockTime = getBerlinClockTime(timestamp);
        expect(berlinClockTime).toEqual({
            seconds: 'Y',
            fiveHoursRow: 'RROO',
            singleHoursRow: 'OOOO',
            fiveMinutesRow: 'YYRYYRYYRYY',
            singleMinutesRow: 'OOOO'
        });
    });
});

