//will beep after a specified amount of time has passed. The user can specify
//an unlimited number of alarms using command line arguments

const makeBeep = function(times) {
  times.forEach(time => {
    const t = Number(time);
    if (typeof t === 'number' && t >= 0) {
      setTimeout(() => process.stdout.write('.'), t * 1000);
    }
  })
};


const times = process.argv.slice(2);
makeBeep(times);
