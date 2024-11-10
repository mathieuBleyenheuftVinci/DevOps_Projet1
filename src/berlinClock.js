function getBerlinClockTime(timestamp) {
    const date = new Date(timestamp);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();
}

function gestSingleMinutesRow(minutes) {
    let row = '';
    for (let i = 0; i < 4; i++) {
        row += (i < minutes % 5) ? 'Y' : 'O';
    }
    return row;
}

function get5MinutesRow(minutes) {
    let row = '';

    for (let i = 0; i < 11; i++) {
        if (i < Math.floor(minutes / 5)) {
            row += (i + 1) % 3 === 0 ? 'R' : 'Y';
        } else {
            row += 'O';
        }
    }
    return row;
}

function getSingleHourRow(hours) {
    let row = '';

    for (let i = 0; i < 4; i++) {
        row += (i < hours % 5) ? 'R' : 'O';
    }
    return row;
};

function get5HoursRow(hours) {
    let row = '';

    for (let i = 0; i < 4; i++) {
        row += (i < Math.floor(hours / 5)) ? 'R' : 'O';
    }
    return row;
}


module.exports = { gestSingleMinutesRow, get5MinutesRow , getSingleHourRow, get5HoursRow };
