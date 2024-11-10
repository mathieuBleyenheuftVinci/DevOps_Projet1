const { gestSingleMinutesRow, get5MinutesRow } = require('../src/berlinClock');

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
});

