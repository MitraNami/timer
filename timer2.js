/*
Instead of receiving all the timers ahead of time via process.argv, 
let's listen for user input and set timers "on demand".

The user can press b and it should beep right away
The user can input any number from 1 to 9 and it should
    -immediately output "setting timer for x seconds...", and
    -beep after that number of seconds has passed
The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating
*/

const stdin = process.stdin;
const stdout = process.stdout;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', key => {
  if (key === '\u0003') {
    stdout.write('\nThanks for using me, ciao!\n');
    process.exit();
  }
  if (key === 'b') {
    stdout.write('Beep!');
  }
  const times = Array.from(range(1, 10));
  if (times.includes(Number(key))) {
    stdout.write(`\nsetting timer for ${key} seconds...\n`);
    setTimeout(() => stdout.write('Beep!'), key * 1000);

  }
  
});

function* range(start, end) {
  let num = start;
  while (num < end) {
    yield num;
    num++;
  }
}

