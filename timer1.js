//will beep after a specified amount of time has passed. The user can specify 
//an unlimited number of alarms using command line arguments

const alarmClock = function(array) {
  for (let alarm of alarms) {
    if (isNaN(Number(alarm)) || Number(alarm) < 0) {
      continue
    } else {
      setTimeout(() => console.log('Beep!'), alarm * 1000);
    }
  }
};

const alarms = process.argv.slice(2);
alarmClock(alarms);