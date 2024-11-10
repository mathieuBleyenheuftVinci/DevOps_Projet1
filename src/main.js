const { getBerlinClockTime } = require('./berlinClock');

function main() {
  const timestamp = Date.now();
  console.log('Actual TimeStamp in milliseconds : ' + timestamp);
  
  const berlinClockTime = getBerlinClockTime(timestamp);
  console.log('Berlin Clock Time:', berlinClockTime);
}

main();