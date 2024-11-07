import { getBerlinClockTime } from '../src/berlinClock.js';

describe("Main should returns hours, minutes and seconds of the actual time", function(){
    let getBerlinClockTime = getBerlinClockTime();

    it("hours should return the actual hour", function(){
        let hour = getBerlinClockTime.hours;
        const date = new Date(timestamp);

        expect(hour).toBe(date.getUTCHours());
    });
});