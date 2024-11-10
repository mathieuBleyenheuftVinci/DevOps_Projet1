function getBerlinClockTime(timestamp) {
    const date = new Date(timestamp);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();

   
    
}    

function gestSingleMinutesRow(minutes) {
    let row = '';
    for(let i = 0; i < 4; i++){
        row += (i < minutes % 5) ? 'Y' : 'O';
    }
    return row
}

function get5MinutesRow(minutes){
    return 'OOOOOOOOOOO'
}

module.exports = {gestSingleMinutesRow}