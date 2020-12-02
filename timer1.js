const args = process.argv.slice(2).filter(time => !isNaN(time)).filter(sec => sec >= 0);

args.forEach((sec) => {setTimeout(() => {process.stdout.write('\x07')}, sec * 1000);});
