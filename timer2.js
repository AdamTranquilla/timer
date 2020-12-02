const stdin = process.stdin;
stdin.setRawMode(true).setEncoding('utf8');

const silentBeep = () => process.stdout.write('BEEP BEEP M*THERF*CKER\n');

stdin.on('data', (key) => {
  if (key === 'b') {
    silentBeep();
  }
  if (key >= 1 && key <= 9) {
    process.stdout.write(`Setting timer for ${key} seconds...\n`);
    setTimeout(() => { silentBeep(); }, key * 1000);
  }
  if (key === '\u0003') {
    process.stdout.write(`Thanks for using me, ciao!\n`);
    process.exit();
  }
});